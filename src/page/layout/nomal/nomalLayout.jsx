import { Outlet } from "react-router-dom";

import style from "./nomalLayout.module.css";

const NomalLayout = () => {
  return (
    <div className={style.layout_Wrapper}>
      <Outlet />
    </div>
  );
};

export default NomalLayout;
