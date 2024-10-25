import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import style from "./MarketActionHeader.module.css";
import { useSelector } from "react-redux";

import LoginAsking from "../../components/modals/confirm/LoginAsking";
import PrimaryBtnAnother from "../../components/common/btn/PrimaryBtnAnother";

export const MarketActionHeader = () => {
  const [gotoLoginIsOpen, setGotoLoginIsOpen] = useState(false);
  const [registIsOpen, setIsregistIsOpen] = useState(false);
  const { isLogged } = useSelector((state) => state.auth);

  const closeModal = () => {
    setGotoLoginIsOpen(false);
    setIsregistIsOpen(false);
  };

  useEffect(() => {
    console.log("isLogged : ", isLogged);
    console.log("gotoLoginIsOpen : ", gotoLoginIsOpen);
    console.log("registIsOpen : ", registIsOpen);
  }, [gotoLoginIsOpen, isLogged, registIsOpen]);

  const onClickButtonAction = () => {
    if (!isLogged) {
      setGotoLoginIsOpen(true);
    } else {
      setIsregistIsOpen(true);
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
      </div>
    </header>
  );
};

export default MarketActionHeader;
