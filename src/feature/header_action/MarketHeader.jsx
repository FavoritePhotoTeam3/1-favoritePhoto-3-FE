import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import style from "@styles/PageHeaderStyle.module.css";
import { useSelector } from "react-redux";

import LoginAsking from "@components/modals/confirm/LoginAsking";
import MyCardSelectOnModal from "@feature/card_state_control/regist_on_modal/MyCardSelectOnModal";
import PrimaryBtnAnother from "@components/common/btn/PrimaryBtnAnother";

export const MarketActionHeader = () => {
  const [gotoLoginIsOpen, setGotoLoginIsOpen] = useState(false);
  const [registIsOpen, setIsregistIsOpen] = useState(false);
  const { isLogged } = useSelector((state) => state.auth);

  const closeModal = () => {
    setGotoLoginIsOpen(false);
    setIsregistIsOpen(false);
  };

  useEffect(() => {
    if (registIsOpen) {
      document.body.style.overflow = "hidden"; // 모달이 열리면 body 스크롤 비활성화
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 활성화
    };
  }, [registIsOpen]);

  const onClickButtonAction = () => {
    if (!isLogged) {
      setGotoLoginIsOpen(true);
    } else {
      setIsregistIsOpen(true);
      console.log("isLogged : ", isLogged, "로그인 되어있음");
    }
  };

  const LoginAskingModal = () => {
    return ReactDOM.createPortal(
      <section className={style.outSide}>
        <LoginAsking onClickClose={closeModal} />
      </section>,
      document.getElementById("root")
    );
  };

  const MyCardSelectOnModalToRoot = () => {
    return ReactDOM.createPortal(
      <section className={style.outSide}>
        <MyCardSelectOnModal onClickClose={closeModal} />
      </section>,
      document.getElementById("root")
    );
  };

  return (
    <header className={style.header}>
      <p className={style.headerText}>마켓플레이스</p>
      <div className={style.headerBtnSize}>
        <PrimaryBtnAnother
          text={"나의 포토카드 판매하기"}
          font={"medium"}
          onClick={onClickButtonAction}
        />

        {gotoLoginIsOpen && <LoginAskingModal />}
        {registIsOpen && <MyCardSelectOnModalToRoot />}
      </div>
    </header>
  );
};

export default MarketActionHeader;
