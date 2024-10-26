import { createSlice } from "@reduxjs/toolkit";

export const randomPointSlice = createSlice({
  name: "randomPoint",
  initialState: null,
  reducers: {
    randomPointInit(state, action) {
      const { difference } = action.payload;
      if (difference <= 60) {
        return {
          modal: {
            isOpen: false,
            canGetPoint: false,
          },
        };
      } else {
        return {
          modal: {
            isOpen: false,
            canGetPoint: true,
          },
        };
      }
    },

    canGetPoint(state, action) {
      state.modal.difference = 0;
      state.modal.canGetPoint = true;
    },
    randomModalController(state, action) {
      state.modal.isOpen = !state.modal.isOpen;
    },
  },
});

export const { randomPointInit, canGetPoint, randomModalController } =
  randomPointSlice.actions;
