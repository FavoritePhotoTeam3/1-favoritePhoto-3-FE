import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import font from "@styles/fonts.module.css";
import style from "./CardRegistShop.module.css";

import PrimaryBtnAnother from "@components/common/btn/PrimaryBtnAnother.jsx";
import CardRegistModal from "./modals/CardRegistModal";

export const CardRegistShop = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const id = data.id;
  const price = data.card?.purchasePrice || 0;
  // const totalCount = data.totalCount;
  const remainingCount = data.remainingCount;

  const genre = data.genre;
  const grade = data.grade;
  const description = data.description;

  const nickname = data.user.nickname;

  const gradeStyle = grade.toLowerCase().replace(/\s+/g, "");

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

  const ToCardRegistModal = () => {
    return ReactDOM.createPortal(
      <section className={style.outSide}>
        <CardRegistModal dataId={id} onClickClose={toggleModal} />
      </section>,
      document.getElementById("root")
    );
  };

  return (
    <div className={style.container}>
      <section className={style.section}>
        <div className={style.boxPerRow}>
          <div className={style.gradeGenre}>
            <p className={`${font.header} ${font[gradeStyle]}`}>
              {grade.toUpperCase()}
            </p>
            <p className={`${font.header} ${font.darkGray}`}>|</p>
            <p className={`${font.header} ${font.gray}`}>{genre}</p>
          </div>
          <p className={`${font.header} ${font.white} ${font.underline}`}>
            {nickname}
          </p>
        </div>
      </section>

      <section className={style.section}>
        <div className={style.boxPerRow}>
          <p className={font.whiteDesc}>{description}</p>
        </div>
      </section>

      <section className={`${style.section} ${style.gapSmall}`}>
        <div className={style.boxPerRow}>
          <label className={font.grayLabel}>가격</label>
          <p className={font.whiteValue}>{`${price} P`}</p>
        </div>
        <div className={style.boxPerRow}>
          <label className={font.grayLabel}>보유량</label>
          <p className={font.whiteValue}>{remainingCount}</p>
        </div>
        <div className={style.btnSize}>
          <PrimaryBtnAnother
            text={"포토카드 판매하기"}
            font={"large"}
            onClick={toggleModal}
          />
        </div>
        {isModalOpen && <ToCardRegistModal />}
      </section>
    </div>
  );
};

export default CardRegistShop;
