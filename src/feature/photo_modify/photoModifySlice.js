import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
  totalCount: 1,
  exchangeGrade: "COMMON",
  exchangeGenre: "풍경",
  exchangeDescription: "",
};

const photoModifySlice = createSlice({
  name: "photoModify",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setExchangeGrade: (state, action) => {
      state.exchangeGrade = action.payload;
    },
    setExchangeGenre: (state, action) => {
      state.exchangeGenre = action.payload;
    },
    setExchangeDescription: (state, action) => {
      state.exchangeDescription = action.payload;
    },
    resetModifyState: (state) => {
      state.price = 0;
      state.totalCount = 1;
      state.exchangeGrade = "COMMON";
      state.exchangeGenre = "풍경";
      state.exchangeDescription = "";
    },
  },
});

export const {
  setPrice,
  setTotalCount,
  setExchangeGrade,
  setExchangeGenre,
  setExchangeDescription,
  resetModifyState,
} = photoModifySlice.actions;

export default photoModifySlice;
