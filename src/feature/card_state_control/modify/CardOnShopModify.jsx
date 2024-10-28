import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import font from "@styles/fonts.module.css";
import style from "@styles/CardStateControlStyle.module.css";
import icRefresh from "./assets/ic_refresh.png";

import PrimaryBtnAnother from "@components/common/btn/PrimaryBtnAnother";
import SecondaryAnother from "@components/common/btn/SecondaryAnother";
import CardPathModal from "./modals/CardPatchModal";
// import CardRegistModal from "./modals/CardRegistModal";

export const CardModifyOnShop = ({ shopId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = {}
  const genre = data?.exchangeGenre || "희망 장르 없음";
  const grade = data?.exchangeGrade || "희망 등급 없음";
  const description = data?.exchangeDescription || "등록한 교환 설명 없음";

  const gradeStyle = grade.toLowerCase().replace(/\s+/g, "");

  const handleSaleStop = () => {
    console.log("판매중지");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // 모달이 열리면 body 스크롤 비활성화
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 활성화
    };
  }, [isModalOpen]);

  const ToCardPatchModal = () => {
    return ReactDOM.createPortal(
      <section className={style.outSide}>
        <CardPathModal dataId={68} onClickClose={toggleModal} />
      </section>,
      document.getElementById("root")
    );
  };

  return (
    <div className={style.container}>
      {isModalOpen && <ToCardPatchModal />}

      <header className={style.exchageHeader}>
        <img src={icRefresh} onClick={() => {}} alt="새로고침" />
        <p className={font.bigHeader}>교환 희망 정보</p>
      </header>

      <section className={style.section}>
        <div className={style.boxPerRow}>
          <div className={style.gradeGenre}>
            <p className={`${font.header} ${font[gradeStyle]}`}>{grade}</p>
            <p className={`${font.header} ${font.darkGray}`}>|</p>
            <p className={`${font.header} ${font.gray}`}>{genre}</p>
          </div>
        </div>
      </section>

      <section className={style.exchangeDesc}>
        <div className={style.boxPerRow}>
          <p className={font.whiteDesc}>{description}</p>
        </div>
        <div className={style.space} />
      </section>

      <section className={style.btnBox}>
        <div className={style.btnSize}>
          <PrimaryBtnAnother
            text={"수정하기"}
            font={"large"}
            onClick={toggleModal}
          />
        </div>
        <div className={style.btnSize}>
          <SecondaryAnother
            text={"판매 내리기"}
            font={"large"}
            onClick={handleSaleStop}
          />
        </div>
      </section>
    </div>
  );
};

export default CardModifyOnShop;
