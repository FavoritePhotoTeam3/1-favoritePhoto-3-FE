import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCards: [],
  keyword: undefined,
  filterOptions: {
    grade: undefined,
    genre: undefined,
    isSoldOut: undefined,
    salesType: undefined,
  }
};

export const mySaleCardSlice = createSlice({
  name: "mySaleCard",
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
      state = initialState;
    }
  },
});

export const { setMyCards, setKeyword, setFilterOptions, clearState } =
mySaleCardSlice.actions;
