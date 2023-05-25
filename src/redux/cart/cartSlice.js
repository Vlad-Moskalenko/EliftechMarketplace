import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    cart: [],
  },

  reducers: {
    addProduct(state, { payload }) {
      state.cart.push(payload);
    },
    deleteProduct(state, { payload }) {
      state.cart.filter(product => product._id !== payload._id);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addProduct, clearCart, deleteProduct } = cartSlice.actions;
