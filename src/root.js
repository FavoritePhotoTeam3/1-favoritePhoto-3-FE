import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import store from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  AuthValidation,
  NotAuthValidation,
  UserProvider,
} from "./route/auth/authUser";
import NomalLayout from "./layout/nomal/nomalLayout";
import NavLayout from "./layout/nav/navLayout";

import SignupPage from "./page/signup";
import CreatePhotoCardPage from "./page/create_photocard";
import SellerDetailPage from "./page/seller_detail";
import BuyerDetailPage from "./page/buyer_detail";
import PurchaseSuccessPage from "./page/purchase_result/purchaseSuccess";
import PurchaseFailPage from "./page/purchase_result/purchaseFail";
import CancelExchangeSuccessPage from "./page/purchase_result/cancelExchangeSuccess";
import CancelExchangeFailPage from "./page/purchase_result/cancelExchangeFail";
import CreatePhotoSuccessPage from "./page/purchase_result/createPhotoSuccess";
import CreatePhotoFailPage from "./page/purchase_result/createPhotoFail";
import StateHandler from "./route/redux/stateHandler";

import LoginPage from "./page/login";
import Market from "./page/market";
import CheckNoticeEvent from "./route/notice/checkNoticeEvent";
import CheckPointEvent from "./route/randomPoint/checkPointEvent";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <StateHandler>
            <UserProvider />
          </StateHandler>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
    children: [
      {
        element: (
          <CheckNoticeEvent>
            <CheckPointEvent>
              <NavLayout />
            </CheckPointEvent>
          </CheckNoticeEvent>
        ),
        children: [
          //아무 제한이 필요없는 라우터 입니다.
          {
            path: "/",
            element: (
              <span>임시 메인 페이지입니다. localhost:3000에 해당합니다.</span>
            ),
          },
          {
            path: "/market",
            element: <Market />,
          },
          {
            element: <AuthValidation />,
            children: [
              // 로그인 상태에서만 들어갈 수 있는 라우터 입니다.
              {
                path: "/seller-detail/:shopId",
                element: <SellerDetailPage />,
              },
              {
                path: "/buyer-detail/:shopId",
                element: <BuyerDetailPage />,
              },
              {
                path: "/create-photocard",
                element: <CreatePhotoCardPage />,
              },
              {
                path: "/purchase-success",
                element: <PurchaseSuccessPage />,
              },
              {
                path: "/purchase-fail",
                element: <PurchaseFailPage />,
              },
              {
                path: "/exchange-cancel-success",
                element: <CancelExchangeSuccessPage />,
              },
              {
                path: "/exchange-cancel-fail",
                element: <CancelExchangeFailPage />,
              },
              {
                path: "/create-success",
                element: <CreatePhotoSuccessPage />,
              },
              {
                path: "/create-fail",
                element: <CreatePhotoFailPage />,
              },
            ],
          },
        ],
      },
      {
        element: <NomalLayout />,
        children: [
          {
            element: <NotAuthValidation />,
            children: [
              //비 로그인 상태에서만 들어갈 수 있는 라우터 입니다.
              {
                path: "/login",
                element: <LoginPage />,
              },
              {
                path: "/signup",
                element: <SignupPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
