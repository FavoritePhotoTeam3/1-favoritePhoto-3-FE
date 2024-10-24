import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  searchTerm: undefined,
  filterOptions: {
    grade: undefined,
    soldOut: undefined,
    genre: undefined,
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
      state.filterOptions = action.payload;
    },
    clearState(state) {
      state.cards = [];
      state.searchTerm = undefined;
      state.filterOptions = {
        grade: undefined,
        soldOut: undefined,
        genre: undefined,
      }
    }
  },
});

export const { setCards, setSearchTerm, setFilterOptions, clearState } =
  shopSlice.actions;
