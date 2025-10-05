// lib/cakeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import cakeData from '@/public/JsonData/cake.json';

const initialState = {
  allCakes: cakeData,
  filteredCakes: cakeData,
  searchQuery: '',
  selectedCategory: 'All',
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
      state.searchQuery = action.payload.toLowerCase();
      state.filteredCakes = state.allCakes.filter((cake) => {
        const matchesSearch = cake.cakeName
          .toLowerCase()
          .includes(state.searchQuery);
        const matchesCategory =
          state.selectedCategory === 'All' ||
          cake.category === state.selectedCategory;
        return matchesSearch && matchesCategory;
      });
    },

    updateCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredCakes = state.allCakes.filter((cake) => {
        const matchesCategory =
          state.selectedCategory === 'All' ||
          cake.category === state.selectedCategory;
        const matchesSearch = cake.cakeName
          .toLowerCase()
          .includes(state.searchQuery);
        return matchesCategory && matchesSearch;
      });
    },
  },
});

export const { setCakes, updateSearch, updateCategory } = cakeSlice.actions;
export default cakeSlice.reducer;
