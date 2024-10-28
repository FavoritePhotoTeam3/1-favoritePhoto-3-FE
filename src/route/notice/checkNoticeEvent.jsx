import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getNotice } from "./noticeAPI";
import { useEffect } from "react";
import { initNotice } from "./noticeSlice";

const CheckNoticeEvent = ({ children }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { user, isLogged } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLogged && user) {
      (async () => {
        const APIrequest = await getNotice();
        dispatch(initNotice(APIrequest?.notifications));
      })();
    }
  }, [isLogged, user, pathname, dispatch]);

  return <>{children}</>;
};

export default CheckNoticeEvent;
