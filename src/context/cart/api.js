import { url } from '@/utils/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    addToCart: builder.query({
      query: (id, qnt) => `api/products/${id}`,
    }),
    onQueryStarted: ({ id, qty }, { dispatch, getState }) => {
      // You can dispatch an action here if needed
    },
    async onQueryFulfilled({ id, qty }, { dispatch, getState }, response) {
      const product = {
        product: response.data.product._id,
        name: response.data.product.name,
        image: response.data.product.image,
        price: response.data.product.price,
        countInStock: response.data.product.countInStock,
        qty,
      };
      localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
      console.log('product', product);
      return product;
    },
    onQueryError: (error, { dispatch, getState }) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      throw new Error(message);
    },
  }),
});

export const { useAddToCartQuery } = cartApi;
