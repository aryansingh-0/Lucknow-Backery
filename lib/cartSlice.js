'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: typeof window !== 'undefined' && localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      
      const existingIndex = state.cart.findIndex(
        item => item.cakeName === newItem.cakeName && item.weight === newItem.weight
      );
    
      if (existingIndex !== -1) {
        // Update existing item
        const existingItem = state.cart[existingIndex];
        const updatedQuantity = existingItem.quantity + newItem.quantity;
        const weightMultiplier = parseInt(existingItem.weight) / 500;
    
        state.cart[existingIndex] = {
          ...existingItem,
          quantity: updatedQuantity,
          totalPrice: existingItem.cakePrice * updatedQuantity * weightMultiplier,
        };
      } else {
        // Add as new item
        state.cart.push(newItem);
      }
    
      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
    ,
    updateQuantity: (state, action) => {
      const { index, quantity } = action.payload;
      state.cart[index].quantity = quantity;
      state.cart[index].totalPrice = state.cart[index].cakePrice * quantity;
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    removeItem: (state, action) => {
      state.cart.splice(action.payload, 1);
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    clearCart: (state) => {
      state.cart = [];
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify([]));
      }
    },
  },
});

export const { setCart, addToCart, updateQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

