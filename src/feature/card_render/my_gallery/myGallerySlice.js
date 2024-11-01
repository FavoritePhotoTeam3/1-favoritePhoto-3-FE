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
    clearFilter: (state) => {
      state.keyword = initialState.keyword;
      state.filterOptions = initialState.filterOptions;
    },
    clearFilterOptionOnly: (state) => {
      state.filterOptions = initialState.filterOptions;
    },
    clearState(state) {
      state = initialState;
    }
  },
});

export const { setMyCards, setKeyword, setFilterOptions, clearState, clearFilter, clearFilterOptionOnly } =
myGallerySlice.actions;
