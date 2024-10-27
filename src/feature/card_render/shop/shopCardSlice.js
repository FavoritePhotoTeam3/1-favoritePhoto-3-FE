import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  searchTerm: undefined,
  filterOptions: {
    grade: undefined,
    isSoldOut: undefined,
    genre: undefined,
    sortOrder: undefined,
  }
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
    clearState(state) {
      state.cards = [];
      state.searchTerm = undefined;
      state.filterOptions = {
        grade: undefined,
        soldOut: undefined,
        genre: undefined,
        sortOrder: undefined
      }
    }
  },
});

export const { setCards, setSearchTerm, setFilterOptions, clearState } =
  shopSlice.actions;
