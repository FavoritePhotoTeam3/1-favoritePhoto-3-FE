import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getUser } from "./authAPI";
import { APIrequestPending, completeAuth } from "./authSlice";
import { useEffect } from "react";

export const UserProvider = ({ children }) => {
  // /users/me 호출 후 유저 데이터 state.auth.user에 저장
  const dispatch = useDispatch();
  const { user, isLogged } = useSelector((state) => state.auth);

  const {
    data: newUser,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      if (isLogged) {
        return getUser();
      } else {
        return null;
      }
    },
  });

  useEffect(() => {
    dispatch(APIrequestPending({ isPending }));
    if (isError) {
      dispatch(completeAuth(null));
    } else {
      dispatch(completeAuth(newUser));
    }
  }, [dispatch, isError, isPending, user, newUser]);

  return <>{children}</>;
};

export const AuthValidation = () => {
  // state.auth.user 에서 유저 데이터 불러왔을 때, 존재하지 않는다면 / 으로 리다이렉션

  const { isLogged } = useSelector((state) => state.auth);
  const nav = useNavigate();
  useEffect(() => {
    console.log("렌더링 태스트");
    if (isLogged) {
      return nav("/login");
    }
  }, []);

  if (isLogged) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export const NotAuthValidation = ({ children }) => {
  // state.auth.user 에서 유저 데이터 불러왔을 때, 존재한다면 / 으로 리다이렉션
  const nav = useNavigate();
  const { user, isLogged } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLogged) {
      nav("/");
    }
  }, [isLogged, user, nav]);
  return <>{children}</>;
};
