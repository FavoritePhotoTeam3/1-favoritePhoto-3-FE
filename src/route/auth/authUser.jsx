import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "./authAPI";
import { APIrequestPending, completeAuth } from "./authSlice";
import { useEffect } from "react";

export const UserProvider = () => {
  // /users/me 호출 후 유저 데이터 state.auth.user에 저장
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLogged) {
      (async () => {
        dispatch(APIrequestPending({ isPending: true }));
        let APIrequest = null;

        try {
          APIrequest = await getUser();
        } catch (e) {
        } finally {
          dispatch(completeAuth(APIrequest));
          dispatch(APIrequestPending({ isPending: false }));
        }
      })();
    }
  }, [isLogged, dispatch]);

  return <Outlet />;
};

export const AuthValidation = () => {
  // state.auth.user 에서 유저 데이터 불러왔을 때, 존재하지 않는다면 / 으로 리다이렉션

  const { isPending, isLogged } = useSelector((state) => state.auth);
  if (!isPending && !isLogged) {
    return <Navigate to="/login" />;
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
