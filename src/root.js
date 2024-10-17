import { createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authProvider";

import LoginPage from "./page/login";

import SignupPage from "./page/signup";

import MarketPlace from "./page/marketplace";

import MyGallery from "./page/mygallery";

import MyMarket from "./page/mymarket";

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
          {
            path: "marketplace",
            element: <MarketPlace />
          },
          {
            path: "mygallery",
            element: <MyGallery />
          },
          {
            path: "mymarket",
            element: <MyMarket />
          },

        ],
      },
    ],
    errorElement: <spna>404 대첵 입니다. 임시로 구성했습니다.</spna>,
  },
]);

export default router;
