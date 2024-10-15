import React from "react";
import style from "./CommonConfirmModalStyle.module.css";

import icClose from "./assets/ic_close.png";

import PrimaryBtnAnother from "../../commons/btn/PrimaryBtnAnother";

export default function SaleCancleConfirm(props) {
  return (
    <div className={style.container}>
      <img src={icClose} alt="닫기" className={style.closeIcon} />
      <header className={style.header}>포토카드 판매 내리기</header>
      <p className={style.descMedium}>{`정말로 판매를 중단하시겠습니까?`}</p>
      <div className={style.btnSize}>
        <PrimaryBtnAnother
          text={"판매 내리기"}
          font={"medium"}
          onClick={props.onClickExchangeConfirm}
        />
      </div>
    </div>
  );
}
