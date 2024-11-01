import React from "react";
import style from "@styles/PageHeaderStyle.module.css";
import icBack from "./assets/back_icon.svg";

export const MySaleCardHeader = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <header className={style.mobileHeader}>
        <div className={style.backIconWrapper}>
          <img
            src={icBack}
            alt="뒤로"
            className={style.backIcon}
            onClick={() => handleBack()}
          />
        </div>
        <p className={style.mobileHeaderText}>나의 판매 포토카드</p>
      </header>
      
      <header className={style.desktopHeader}>
        <p className={style.headerText}>나의 판매 포토카드</p>
      </header>
    </>
  );
};

export default MySaleCardHeader;
