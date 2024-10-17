import { Outlet } from "react-router-dom";
import { Nav } from "../../../components/nav/nav";
import style from "./navLayout.module.css";

const NavLayout = () => {
  return (
    <div className={style.layout_Wrapper}>
      <Nav />
      <Outlet />
    </div>
  );
};
export default NavLayout;
