import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Id: undefined,
  cardId: undefined,
  price: 0,
  totalCount: 0,
  exchangeGrade: "", // 선택적
  exchangeGenre: "", // 선택적
  exchangeDescription: "", // 선택적
};

export const registShopDataSlice = createSlice({
  name: "registShopData",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.Id = action.payload;
    },
    setCardId: (state, action) => {
      state.cardId = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    decreaseCount: (state) => {
      if (state.totalCount > 0) {
        state.totalCount -= 1;
      }
    },
    increaseCount: (state) => {
      if (state.totalCount >= 0) {
        state.totalCount += 1;
      }
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
    clearState: (state) => {
      state = initialState;
    },
  },
});

export const {
 setId,
 setCardId,
 setPrice,
 setTotalCount,
 decreaseCount,
 increaseCount,
 setExchangeGrade,
 setExchangeGenre,
 setExchangeDescription,
 clearState
} = registShopDataSlice.actions;
