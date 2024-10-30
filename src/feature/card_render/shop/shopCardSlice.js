import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  searchTerm: undefined,
  filterOptions: {
    grade: undefined,
    isSoldOut: undefined,
    genre: undefined,
    sortOrder: undefined,
  },
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilterOptions: (state, action) => {
      const { key, value } = action.payload;
      state.filterOptions[key] = value;
    },
    clearFilterOptionOnly: (state) => {
      state.filterOptions = initialState.filterOptions;
    },
    clearState(state) {
      state = initialState;
    },
  },
});

export const {
  setCards,
  setSearchTerm,
  setFilterOptions,
  clearState,
  clearFilterOptionOnly,
} = shopSlice.actions;
