import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Id: undefined,
  cardId: undefined,
  price: 0,
  patchCount: 1,
  exchangeGrade: "", // 선택적
  exchangeGenre: "", // 선택적
  exchangeDescription: "", // 선택적
};

export const patchShopDataSlice = createSlice({
  name: "patchShopData",
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
      state.patchCount = action.payload;
    },
    decreaseCount: (state) => {
      if (state.patchCount > 0) {
        state.patchCount -= 1;
      }
    },
    increaseCount: (state) => {
      if (state.patchCount >= 0) {
        state.patchCount += 1;
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
} = patchShopDataSlice.actions;
