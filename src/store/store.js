import { configureStore } from "@reduxjs/toolkit";
import { errorLoggerMiddleware } from "./errorLoggerMiddleware";

import { loginSlice } from "../feature/login/loginSlice";
import { signupSlice } from "../feature/signup/signupSlice";
import { authSlice } from "../route/authSlice";
import photoCardFormSlice from "../feature/create_photocard/photoCardFormSlice";
import buyerModalSlice from "../feature/buyer_detail/buyerModalSlice";
import photoExchangeSlice from "../feature/photo_exchange/PhotoExchangeSlice";
import sellerModalSlice from "../feature/seller_detail/sellerModalSlice";
import photoModifySlice from "../feature/photo_modify/photoModifySlice";
import { shopSlice } from "@feature/card_render/shop/shopCardSlice";
import { randomPointSlice } from "../feature/randomPoint/randomPointSlice";
import { myGallerySlice } from "../feature/card_render/my_gallery/myGallerySlice";
import { registShopDataSlice } from "../feature/card_regist_shop/modals/registShopDataSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    randomPoint: randomPointSlice.reducer,
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    shop: shopSlice.reducer,
    myGallery: myGallerySlice.reducer,
    photoCardForm: photoCardFormSlice.reducer,
    buyerModal: buyerModalSlice.reducer,
    photoExchange: photoExchangeSlice.reducer,
    sellerModal: sellerModalSlice.reducer,
    photoModify: photoModifySlice.reducer,
    registShopData: registShopDataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(errorLoggerMiddleware(true)),
});

export default store;
