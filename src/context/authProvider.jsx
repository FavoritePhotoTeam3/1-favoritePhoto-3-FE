import { createContext, useContext, useEffect, useState } from "react";
import { USERS } from "../api/axios";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "../styles/reset.css";

const AuthContext = createContext({
  user: null,
  isPending: true,
  login: () => {},
  logout: () => {},
  signup: () => {},
});

export const AuthProvider = () => {
  const [values, setValue] = useState({
    user: null,
    isPending: true,
  });
  const nav = useNavigate();
  const { pathname } = useLocation();

  const getUser = async () => {
    setValue((prev) => ({
      ...prev,
      isPending: true,
    }));
    let nextUser;
    try {
      const response = await USERS.get("/me");
      nextUser = response.data;
      console.log(response);
    } catch (e) {
      console.log(e.data?.message, "/context/authProvider/getUser");
      setValue((prev) => ({
        ...prev,
        user: null,
        isPending: false,
      }));
    } finally {
      setValue((prev) => ({
        ...prev,
        user: nextUser,
        isPending: false,
      }));
    }
  };

  const signup = async ({ email, password, nickname }) => {
    setValue((prev) => ({
      ...prev,
      isPending: true,
    }));
    try {
      await USERS.post("/signup", {
        email,
        password,
        nickname,
      });
      setValue((prev) => ({
        ...prev,
        isPending: false,
      }));
      await getUser();
    } catch (e) {
      alert(e.data.message);
      console.log(e.status, "/context/authProvider/signup");
    }
  };

  const login = async ({ email, password }) => {
    setValue((prev) => ({
      ...prev,
      isPending: true,
    }));
    try {
      const response = await USERS.post("/login", {
        email,
        password,
      });
      console.log(response);
      setValue((prev) => ({
        ...prev,
        isPending: false,
      }));
      await getUser();
    } catch (e) {
      alert(e.data?.message);
      console.log(e.status, "/context/authProvider/login");
    }
  };

  const logout = async () => {
    setValue((prev) => ({
      ...prev,
      isPending: true,
    }));
    const response = await USERS.get("/logout");
    alert(response.data.message);
    setValue((prev) => ({
      ...prev,
      user: null,
      isPending: false,
    }));
  };

  useEffect(() => {
    (async () => {
      await getUser();
      if (values.user && (pathname === "/login") | (pathname === "/signup")) {
        nav("/");
      }
    })();
  }, [nav, pathname, values.user]);

  return (
    <AuthContext.Provider
      value={{
        user: values.user,
        isPending: values.isPending,
        login,
        logout,
        signup,
      }}
    >
      <Outlet />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { user, isPending, login, logout } = useContext(AuthContext);

  return { user, isPending, login, logout };
};