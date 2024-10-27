import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCards: [],
  keyword: undefined,
  filterOptions: {
    grade: undefined,
    isSoldOut: undefined,
    genre: undefined,
    sortOrder: undefined,
  }
};

export const myGallerySlice = createSlice({
  name: "myGallery",
  initialState,
  reducers: {
    setMyCards: (state, action) => {
      state.myCards = action.payload;
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setFilterOptions: (state, action) => {
      const { key, value } = action.payload;
      state.filterOptions[key] = value;
    },

    clearState(state) {
      state.cards = [];
      state.keyword = undefined;
      state.filterOptions = {
        grade: undefined,
        soldOut: undefined,
        genre: undefined,
        sortOrder: undefined
      }
    }
  },
});

export const { setMyCards, setKeyword, setFilterOptions, clearState } =
myGallerySlice.actions;
