import { createSlice } from "@reduxjs/toolkit";
import { NOTICE } from "../../api/notifications";

export const noticeSlice = createSlice({
  name: "notice",
  initialState: null,
  reducers: {
    initNotice(state, action) {
      const notices = action.payload;

      if (notices) {
        const readNotices = notices?.filter((notice) => notice.read) ?? [];
        return {
          non_read: notices.length - readNotices.length,
          notices: [...notices],
          isOpen: false,
        };
      } else {
        return {
          non_read: 0,
          notices: [],
          isOpen: false,
        };
      }
    },
    noticeModalController(state, action) {
      if (state.notices?.length === 0 && state.non_read === 0) {
        return;
      } else {
        state.isOpen = !state.isOpen;
        state.non_read = 0;
        state.notices.map(async (notice) => {
          await NOTICE.patch(`/${notice.id}`, { read: true });
        });
      }
    },
    popNotice(state, action) {
      const index = action.payload;
      state.notices = [
        ...state.notices.slice(0, index),
        ...state.notices.slice(index + 1, state.notices.length),
      ];
      if (state.notices.length === 0) {
        state.isOpen = false;
      }
    },
  },
});

export const { initNotice, noticeModalController, popNotice } =
  noticeSlice.actions;
