import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { randomPointInit } from "../../feature/randomPoint/randomPointSlice";

const CheckPointEvent = ({ children }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { user, isLogged } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLogged && user) {
      const drawtime = new Date(user.drawtime);
      const currentTime = new Date();
      const difference = changeHoursFromMs(currentTime, drawtime);

      dispatch(randomPointInit({ difference }));
    }
  }, [isLogged, user, pathname, dispatch]);

  return <>{children}</>;
};

export default CheckPointEvent;

const changeHoursFromMs = (currentTime, drawtime) => {
  return parseInt(
    (currentTime.getTime() - drawtime.getTime()) / (60 * 1000) // 단위 : 분
  );
};
