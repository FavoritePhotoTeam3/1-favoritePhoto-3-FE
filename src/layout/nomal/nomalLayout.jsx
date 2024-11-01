import { Outlet } from "react-router-dom";
import style from "./nomalLayout.module.css";
import "../../styles/reset.css";
import LoadingModal from "../../components/modals/loading/loadingModal";
import { useSelector } from "react-redux";

const NomalLayout = () => {
  const isPending = useSelector((state) => state.auth.isPending);
  return (
    <div className={style.layout_Wrapper}>
      <Outlet />
      {isPending ? <LoadingModal /> : null}
    </div>
  );
};

export default NomalLayout;
