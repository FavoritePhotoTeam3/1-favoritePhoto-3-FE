import { configureStore } from "@reduxjs/toolkit";
import { errorLoggerMiddleware } from "./errorLoggerMiddleware";

import { loginSlice } from "../feature/login/loginSlice";
import { signupSlice } from "../feature/signup/signupSlice";
import { authSlice } from "../route/authSlice";
import photoCardFormSlice from "../feature/create_photocard/photoCardFormSlice";
import buyerModalSlice from "../feature/buyer_detail/buyerModalSlice";
import photoExchangeSlice from "../feature/photo_exchange/PhotoExchangeSlice";
import sellerModalSlice from "../feature/seller_detail/sellerModalSlice";
import { shopSlice } from "../feature/shop_card/shopCardSlice";
import { randomPointSlice } from "../feature/randomPoint/randomPointSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    randomPoint: randomPointSlice.reducer,
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    shop: shopSlice.reducer,
    photoCardForm: photoCardFormSlice.reducer,
    buyerModal: buyerModalSlice.reducer,
    photoExchange: photoExchangeSlice.reducer,
    sellerModal: sellerModalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(errorLoggerMiddleware(true)),
});

export default store;
