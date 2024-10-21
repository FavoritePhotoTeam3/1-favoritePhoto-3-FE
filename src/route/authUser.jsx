import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "./authAPI";
import { APIrequestPending, completeAuth } from "./authSlice";
import { useEffect } from "react";

export const UserProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { user, isLogged } = useSelector((state) => state.auth);
  console.log(user);

  const {
    data: newUser,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      if (isLogged || (!isLogged && !user)) {
        console.log("사랑해 이시온");
        return getUser();
      } else {
        return null;
      }
    },
    staleTime: 30 * 1000,
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

export const AuthValidation = ({ children }) => {
  const nav = useNavigate();
  const { user, isLogged } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLogged || !user) {
      nav("/");
    }
  }, [isLogged, user, nav]);
  return <>{children}</>;
};
