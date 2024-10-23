import React from "react";
import style from "./CommonConfirmModalStyle.module.css";

import icClose from "./assets/ic_close.png";

import PrimaryBtnAnother from "../../common/btn/PrimaryBtnAnother";

export default function PurchaseAsking(props) {
  return (
    <div className={style.container}>
      <img src={icClose} alt="닫기" className={style.closeIcon} />
      <header className={style.header}>포토카드 구매</header>
      <p
        className={style.descMedium}
      >{`[${props.purchase.grade.toUpperCase()} | ${props.purchase.name}] ${
        props.purchase.count
      }장을 구매하시겠습니까?`}</p>
      <div className={style.btnSize}>
        <PrimaryBtnAnother
          text={"구매하기"}
          font={"medium"}
          onClick={props.onClickPurchaseConfirm}
        />
      </div>
    </div>
  );
}
