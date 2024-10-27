import React, { useEffect } from "react";
import style from "./CommonHeader.module.css";
import { useSelector } from "react-redux";

import PrimaryBtnAnother from "@components/common/btn/PrimaryBtnAnother";
import { Link } from "react-router-dom";

export const MyGalleryHeader = () => {
  const { isLogged } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("isLogged : ", isLogged);
  }, [isLogged]);

  return (
    <header className={style.header}>
      <p className={style.headerText}>마이갤러리</p>
      <div className={style.headerBtnSize}>
        <Link to="/create-photocard">
          <PrimaryBtnAnother text={"포토카드 생성하기"} font={"medium"} />
        </Link>
      </div>
    </header>
  );
};

export default MyGalleryHeader;
