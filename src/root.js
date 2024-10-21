import { Provider } from "react-redux";
import { createBrowserRouter, Outlet } from "react-router-dom";
import store from "./store/store";
import NomalLayout from "./layout/nomal/nomalLayout";
import LoginPage from "./page/login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NavLayout from "./layout/nav/navLayout";
import { AuthValidation, UserProvider } from "./route/authUser";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Outlet />
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
    children: [
      {
        element: <NomalLayout />,
        children: [{ path: "/login", element: <LoginPage /> }],
      },
      {
        path: "/",
        element: (
          <UserProvider>
            <NavLayout />
          </UserProvider>
        ),
        children: [
          {
            path: "/",
            element: (
              <AuthValidation>
                <span>로그인이 필요한 페이지 컴포넌트 자리</span>
              </AuthValidation>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
