import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartApi } from './cart/api';
import cartReducer from '@/context/feature/cartSlice';

export const store = configureStore({
  reducer: {
    [cartApi.reducerPath]: cartApi.reducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApi.middleware),
});

setupListeners(store.dispatch);
