import { Provider } from "react-redux";
import { createBrowserRouter, Outlet } from "react-router-dom";
import store from "./store/store";
import NomalLayout from "./layout/nomal/nomalLayout";
import LoginPage from "./page/login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NavLayout from "./layout/nav/navLayout";
import {
  AuthValidation,
  NotAuthValidation,
  UserProvider,
} from "./route/authUser";
import SignupPage from "./page/signup";
import CreatePhotoCardPage from "./page/create_photocard";
import SellerDetailPage from "./page/seller_detail";
import BuyerDetailPage from "./page/buyer_detail";
import PurchaseSuccessPage from "./page/purchase_result/purchaseSuccess";
import PurchaseFailPage from "./page/purchase_result/purchaseFail";
import CancelExchangeSuccessPage from "./page/purchase_result/cancelExchangeSuccess";
import CancelExchangeFailPage from "./page/purchase_result/cancelExchangeFail";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <UserProvider>
            <Outlet />
          </UserProvider>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
    children: [
      {
        element: <NomalLayout />,
        children: [
          {
            path: "/login",
            element: (
              <NotAuthValidation>
                <LoginPage />
              </NotAuthValidation>
            ),
          },
          {
            path: "/signup",
            element: (
              <NotAuthValidation>
                <SignupPage />
              </NotAuthValidation>
            ),
          },
        ],
      },
      {
        element: <NavLayout />,
        children: [
          {
            path: "/",
            element: <span>임시</span>,
          },
          {
            path: "/test",
            element: (
              <AuthValidation>
                <span>로그인 및 회원 정보가 필요한 페이지 자리</span>
              </AuthValidation>
            ),
          },
          {
            path: "seller-detail/:shopId",
            element: <SellerDetailPage />,
          },
          {
            path: "buyer-detail/:shopId",
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
        ],
      },
    ],
  },
]);

export default router;
