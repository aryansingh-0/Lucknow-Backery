// lib/cakeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import cakeData from '@/public/JsonData/cake.json';

const initialState = {
  allCakes: cakeData,
  filteredCakes: cakeData,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    setCakes: (state, action) => {
      state.allCakes = action.payload;
      state.filteredCakes = action.payload;
    },
    updateSearch: (state, action) => {
      const query = action.payload.toLowerCase();
      if (!query.trim()) {
        state.filteredCakes = state.allCakes;
      } else {
        state.filteredCakes = state.allCakes.filter(cake =>
          cake.cakeName.toLowerCase().includes(query)
        );
      }
    },
  },
});

export const { setCakes, updateSearch } = cakeSlice.actions;
export default cakeSlice.reducer;
