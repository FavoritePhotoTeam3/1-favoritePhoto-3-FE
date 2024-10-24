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
      // const newCards = action.payload.filter(
      //   (newCard) =>
      //     !state.cards.some((existingCard) => existingCard.id === newCard.id)
      // );
      // state.cards = [...state.cards, ...newCards];
      state.cards = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      // state.cards = [];
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
