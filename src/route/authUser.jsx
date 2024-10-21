import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "./authAPI";
import { APIrequestPending, completeAuth } from "./authSlice";
import { useEffect } from "react";

export const UserProvider = ({ children }) => {
  const dispatch = useDispatch();

  const {
    data: user,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 30 * 1000,
  });

  useEffect(() => {
    dispatch(APIrequestPending({ isPending }));
    if (isError) {
      dispatch(completeAuth({ user: null }));
    } else {
      dispatch(completeAuth({ user }));
    }
  }, [dispatch, isError, isPending, user]);

  return <>{children}</>;
};

export const AuthValidation = ({ children }) => {
  const nav = useNavigate();
  const { user, isLogged } = useSelector((state) => state.auth);
  if (!isLogged || !user) {
    nav("/");
  } else {
    return <>{children}</>;
  }
};
