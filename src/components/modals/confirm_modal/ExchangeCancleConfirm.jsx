import React from "react";
import style from "./CommonConfirmModalStyle.module.css";

import icClose from "./assets/ic_close.png";

import PrimaryBtnAnother from "../../commons/btn/PrimaryBtnAnother";

export default function ExchangeConfirm(props) {
  return (
    <div className={style.container}>
      <img src={icClose} alt="닫기" className={style.closeIcon} />
      <header className={style.header}>교환 제시 취소</header>
      <p className={style.descMedium}>{`[${props.exchange.grade.toUpperCase()} | ${
        props.exchange.name
      }] 카드와의 교환을 취소하시겠습니까?`}</p>
      <div className={style.btnSize}>
        <PrimaryBtnAnother
          text={"취소하기"}
          font={"medium"}
          onClick={props.onClickExchangeConfirm}
        />
      </div>
    </div>
  );
}
