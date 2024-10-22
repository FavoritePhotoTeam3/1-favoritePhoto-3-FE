import { createSlice } from "@reduxjs/toolkit";

const isLogged = !!localStorage.getItem("isLogged");

const initialState = {
  user: null,
  isLogged: isLogged ?? false,
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
        localStorage.setItem("isLogged", true);
      } else {
        state.isLogged = false;
        state.user = null;
      }
    },
    expireAuth(state, action) {
      state.isLogged = false;
      state.user = null;
      localStorage.removeItem("isLogged");
    },
    APIrequestPending(state, action) {
      const { isPending } = action.payload;
      state.isPending = isPending;
    },
  },
});

export const { completeAuth, expireAuth, APIrequestPending } =
  authSlice.actions;
