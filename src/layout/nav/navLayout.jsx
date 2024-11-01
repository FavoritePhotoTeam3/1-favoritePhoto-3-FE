import { Outlet } from "react-router-dom";
import style from "./navLayout.module.css";
import { Nav } from "../../feature/nav/main/nav";
import { useSelector } from "react-redux";
import LoadingModal from "../../components/modals/loading/loadingModal";
import RandomPoint from "../../feature/randomPoint/randomPoint";

const NavLayout = () => {
  const isPending = useSelector((state) => state.auth.isPending);
  const randomPointOpen = useSelector(
    (state) => state.randomPoint?.modal.isOpen
  );

  return (
    <div className={style.layout_Wrapper}>
      <Nav />
      <Outlet />
      {isPending ? <LoadingModal /> : null}
      {randomPointOpen ? <RandomPoint /> : null}
    </div>
  );
};
export default NavLayout;
