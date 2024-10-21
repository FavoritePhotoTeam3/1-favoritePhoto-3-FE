import { Outlet } from "react-router-dom";
import style from "./navLayout.module.css";
import { Nav } from "../../feature/nav/nav";

const NavLayout = () => {
  return (
    <div className={style.layout_Wrapper}>
      <Nav />
      <Outlet />
    </div>
  );
};
export default NavLayout;
