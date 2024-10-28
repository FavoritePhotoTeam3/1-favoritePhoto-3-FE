import { createSlice } from "@reduxjs/toolkit";

export const noticeSlice = createSlice({
  name: "notice",
  initialState: null,
  reducers: {
    initNotice(state, action) {
      const notices = action.payload;
      if (notices) {
        return {
          notices: [...notices],
          isOpen: false,
        };
      } else {
        return {
          notices: [],
          isOpen: false,
        };
      }
    },
    noticeModalController(state, action) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { initNotice, noticeModalController } = noticeSlice.actions;
