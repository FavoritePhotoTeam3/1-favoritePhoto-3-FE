import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
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
    staleTime: 60 * 60 * 1000,
  });

  useEffect(() => {
    dispatch(APIrequestPending({ isPending }));
    if (isError) {
      dispatch(completeAuth(null));
    } else {
      dispatch(completeAuth(newUser));
    }
  }, [dispatch, isError, isPending, user, newUser]);

  return <Outlet />;
};

export const AuthValidation = () => {
  // state.auth.user 에서 유저 데이터 불러왔을 때, 존재하지 않는다면 / 으로 리다이렉션

  const { isPending, isLogged } = useSelector((state) => state.auth);
  if (!isPending && !isLogged) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export const NotAuthValidation = () => {
  // state.auth.user 에서 유저 데이터 불러왔을 때, 존재한다면 / 으로 리다이렉션
  const { isPending, isLogged } = useSelector((state) => state.auth);
  if (!isPending && isLogged) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};
