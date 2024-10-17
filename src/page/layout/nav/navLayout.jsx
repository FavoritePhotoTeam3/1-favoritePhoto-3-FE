import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Nav } from "../../../components/nav/nav";
import style from "./navLayout.module.css";
import { useAuth } from "../../../context/authProvider";

const NavLayout = () => {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user & !(pathname === "/")) {
      console.log("무한렌더링");
      nav("/");
    }
  }, [nav, pathname, user]);
  return (
    <div className={style.layout_Wrapper}>
      <Nav />
      <Outlet />
    </div>
  );
};
export default NavLayout;
