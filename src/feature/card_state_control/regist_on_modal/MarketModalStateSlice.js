import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  giveId: undefined,
};

export const MarketModalStateSlice = createSlice({
  name: "marketModalState",
  initialState,
  reducers: {
    setGiveId: (state, action) => {
      state.giveId = action.payload
    },
    clearState: (state) => {
      state.giveId = undefined;
    },
  },
});

export const { setGiveId, clearState } =
MarketModalStateSlice.actions;
