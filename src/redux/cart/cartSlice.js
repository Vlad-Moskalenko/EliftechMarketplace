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
      state.cart = state.cart.filter(product => product._id !== payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    changeAmount(state, { payload }) {
      const item = state.cart.find(item => item._id === payload._id);
      payload.operator === '+' ? (item.amount += 1) : (item.amount -= 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addProduct, clearCart, deleteProduct, changeAmount } = cartSlice.actions;
