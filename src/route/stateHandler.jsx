import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupPageInit, signupPageReset } from "../feature/signup/signupSlice";
import { loginPageInit, loginPageReset } from "../feature/login/loginSlice";
import { useEffect } from "react";

const useResetState = () => {
  const dispatch = useDispatch();
  const resetState = (pathname) => {
    if (pathname !== "/login") {
      dispatch(loginPageReset());
    } else {
      dispatch(loginPageInit());
    }

    if (pathname !== "/signup") {
      dispatch(signupPageReset());
    } else {
      dispatch(signupPageInit());
    }
  };
  return { resetState };
};

const StateHandler = ({ children }) => {
  const { pathname } = useLocation();
  const { resetState } = useResetState();

  useEffect(() => {
    resetState(pathname);
  }, [pathname, resetState]);

  return <>{children}</>;
};

export default StateHandler;
