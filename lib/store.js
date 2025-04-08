'use client';

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import cakeReducer from './cakeSlice'; // ✅ Add this line

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cake: cakeReducer, // ✅ Register cake slice here
  },
});
