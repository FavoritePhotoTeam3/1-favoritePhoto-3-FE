import { Outlet } from "react-router-dom";
import style from "./navLayout.module.css";
import { Nav } from "../../feature/nav/nav";
import { useSelector } from "react-redux";
import LoadingModal from "../../components/modals/loading/loadingModal";

const NavLayout = () => {
  const isPending = useSelector((state) => state.auth.isPending);
  return (
    <div className={style.layout_Wrapper}>
      <Nav />
      <Outlet />
      {isPending ? <LoadingModal /> : null}
    </div>
  );
};
export default NavLayout;
