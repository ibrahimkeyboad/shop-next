import { createSlice } from '@reduxjs/toolkit';
import { cartApi } from '../cart/api';

const cartItem = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const slice = createSlice({
  name: 'auth',
  initialState: { cartItems: cartItem },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      cartApi.endpoints.addToCart.matchFulfilled,
      (state, { payload }) => {
        console.log('state', state);
        console.log('payload', payload);
        const item = payload;
        const existItem = state.cartItems.find(
          (x) => x.product === item.product
        );
        if (existItem) {
          state.cartItems.map((x) => {
            console.log(x.product, existItem.product);
            console.log('item', item);
            return x.product === existItem.product ? (x.qty = item.qty) : x;
          });
        } else {
          state.cartItems = [...state.cartItems, item];
        }
        console.log('state', state.cartItems);
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    );
  },
});

export default slice.reducer;
