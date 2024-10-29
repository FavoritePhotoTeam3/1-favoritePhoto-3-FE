import React from "react";
import style from "@styles/PageHeaderStyle.module.css";

export const MySaleCardHeader = () => {

  return (
    <header className={style.header}>
      <p className={style.headerText}>나의 판매 포토카드</p>
    </header>
  );
};

export default MySaleCardHeader;
