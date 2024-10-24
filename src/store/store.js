import { configureStore } from "@reduxjs/toolkit";

import { loginSlice } from "../feature/login/loginSlice";
import { signupSlice } from "../feature/signup/signupSlice";
import { authSlice } from "../route/authSlice";
import photoCardFormSlice from "../feature/create_photocard/photoCardFormSlice";
import buyerModalSlice from "../feature/buyer_detail/buyerModalSlice";
import photoExchangeSlice from "../feature/photo_exchange/PhotoExchangeSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    photoCardForm: photoCardFormSlice.reducer,
    modal: buyerModalSlice.reducer,
    photoExchange: photoExchangeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
