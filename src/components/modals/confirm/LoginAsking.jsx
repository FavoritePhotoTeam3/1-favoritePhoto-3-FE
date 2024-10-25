import React from "react";
import style from "./CommonConfirm.module.css";
import icClose from "./assets/ic_close.png";
import PrimaryBtnAnother from "../../common/btn/PrimaryBtnAnother";
import { Link } from "react-router-dom";

export default function LoginAsking(props) {
  return (
    <div className={style.container}>
      <img src={icClose} alt="닫기" className={style.closeIcon} onClick={props.onClickClose} />
      <header className={style.header}>로그인이 필요합니다.</header>
      <section className={style.descSmall}>
        <p>로그인 하시겠습니까?</p>
        <p>다양한 서비스를 편리하게 이용하실 수 있습니다.</p>
      </section>
      <div className={style.btnSize}>
        <Link to="/login">
          <PrimaryBtnAnother text={"로그인"} font={"medium"} />
        </Link>
      </div>
    </div>
  );
}
