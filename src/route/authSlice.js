import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLogged: false,
  isPending: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    completeAuth(state, action) {
      const user = action.payload;
      if (user) {
        state.isLogged = true;
        state.user = user;
      } else {
        state.isLogged = false;
        state.user = null;
      }
    },
    expireAuth(state, action) {
      state.user = null;
      state.isLogged = false;
    },
    APIrequestPending(state, action) {
      const { isPending } = action.payload;
      state.isPending = isPending;
    },
  },
});

export const { completeAuth, expireAuth, APIrequestPending } =
  authSlice.actions;
