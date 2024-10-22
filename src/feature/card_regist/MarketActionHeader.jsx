import React from "react";
import style from "./MarketActionHeader.module.css";
import PrimaryBtnAnother from "../../components/common/btn/PrimaryBtnAnother";

export const MarketActionHeader = () => {
  return (
    <header className={style.header}>
      <p className={style.headerText}>마켓플레이스</p>
      <div className={style.headerBtnSize}>
        <PrimaryBtnAnother
          text={"나의 포토카드 판매하기"}
          font={"medium"}
          onclick={() => {}}
        />
      </div>
    </header>
  );
};

export default MarketActionHeader;