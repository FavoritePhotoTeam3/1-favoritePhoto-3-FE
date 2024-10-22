import { configureStore } from "@reduxjs/toolkit";
import { errorLoggerMiddleware } from "./errorLoggerMiddleware";

import { loginSlice } from "../feature/login/loginSlice";
import { signupSlice } from "../feature/signup/signupSlice";
import { authSlice } from "../route/authSlice";

import { shopSlice } from "../feature/shop_card/shopCardSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    shop: shopSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorLoggerMiddleware(true)), // errorLoggerMiddleware 추가
});

export default store;
