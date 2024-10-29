import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFilterOpen: false,
  selectedCard: null,
  search: "",
  gradeFilter: "",
  genreFilter: "",
  gradeCounts: {},
  genreCounts: {},
  filteredCount: 0,
  totalCount: 0,
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
    setCounts: (state, action) => {
      state.gradeCounts = action.payload.gradeCount;
      state.genreCounts = action.payload.genreCount;
      state.totalCount = action.payload.totalCount;
    },
    setFilteredCount: (state, action) => {
      state.filteredCount = action.payload;
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
  setCounts,
  setFilteredCount,
} = photoExchangeSlice.actions;
export default photoExchangeSlice;
