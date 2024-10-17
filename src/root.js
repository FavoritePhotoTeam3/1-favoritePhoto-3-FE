import { createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authProvider";

import LoginPage from "./page/login";

import SignupPage from "./page/signup";

import NavLayout from "./page/layout/nav/navLayout";
import NomalLayout from "./page/layout/nomal/nomalLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <AuthProvider />,
    children: [
      {
        element: <NomalLayout />,
        children: [
          { path: "/login", element: <LoginPage /> },
          { path: "/signup", element: <SignupPage /> },
        ],
      },
      {
        path: "/",
        element: <NavLayout />,
        children: [
          /*
            path: 상대주소로 지정해주세요!
            element: 제작하신 페이지 컴포넌트를 넣어주시면 됩니다!
        */
          {
            path: "succes",
            element: <span>언젠가 만나 네게 할 말이 많아.</span>,
          },
        ],
      },
    ],
    errorElement: <spna>404 대첵 입니다. 임시로 구성했습니다.</spna>,
  },
]);

export default router;
