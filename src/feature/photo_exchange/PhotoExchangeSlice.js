import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFilterOpen: false,
  selectedCard: null,
  search: "",
  gradeFilter: "",
  genreFilter: "",
};

const photoExchangeSlice = createSlice({
  name: "photoExchange",
  initialState,
  reducers: {
    toggleFilter: (state) => {
      state.isFilterOpen = !state.isFilterOpen;
    },
    selectCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    clearSelectedCard: (state) => {
      state.selectedCard = null;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setGradeFilter: (state, action) => {
      state.gradeFilter = action.payload;
    },
    setGenreFilter: (state, action) => {
      state.genreFilter = action.payload;
    },
  },
});

export const {
  toggleFilter,
  selectCard,
  clearSelectedCard,
  setSearch,
  setGradeFilter,
  setGenreFilter,
} = photoExchangeSlice.actions;
export default photoExchangeSlice;
