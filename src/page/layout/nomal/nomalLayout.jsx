import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import style from "./nomalLayout.module.css";
import { useAuth } from "../../../context/authProvider";

const NomalLayout = () => {
  const nav = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      console.log("무한렌더링");
      nav("/");
    }
  }, [nav, user]);
  return (
    <div className={style.layout_Wrapper}>
      <Outlet />
    </div>
  );
};

export default NomalLayout;
