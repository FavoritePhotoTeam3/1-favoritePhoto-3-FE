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
            path: "/create-photocard",
            element: <CreatePhotoCardPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
