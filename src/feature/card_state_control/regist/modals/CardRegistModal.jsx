import React from "react";
import style from "@styles/ModalCardStateControlStyle.module.css";
import icClose from "./assets/ic_close.png";
import { useSelector } from "react-redux";

import DescCardDetail from "./components/DescCardDetail";
import GradeSelectButton from "./components/GradeSelectButton";
import GenreSelectButton from "./components/GenreSelectButton";
import DescInputArea from "./components/DescInputArea";
import CancleButton from "./components/CancleButton";
import RegistButton from "./components/RegistButton";

export const CardRegistModal = ({ dataId, onClickClose }) => {
  const myCards = useSelector((state) =>
    state.myGallery.myCards.find((item) => item.id === parseInt(dataId))
  );

  if (!myCards) {
    return <p>데이터를 찾을 수 없습니다.</p>;
  }

  const cardId = myCards.id;
  const name = myCards.name;
  const imageURL = myCards.imageURL;

  return (
    <div className={style.modalContainer}>
      <img
        src={icClose}
        alt="닫기"
        className={style.closeIcon}
        onClick={onClickClose}
      />
      <section className={style.insideScrollSection}>
        <header className={style.modalHeaderText}>
          나의 포토카드 판매하기
        </header>
        <section className={style.cardContainer}>
          <header className={style.cardHeader}>
            <p>{name}</p>
          </header>
          <div className={style.cardDetail}>
            <picture className={style.imgWrapper}>
              <source
                type="image/webp"
                srcSet={`${imageURL}`}
                className={style.cardImage}
              />
              <img src={imageURL} alt="Card" className={`${style.cardImage}`} />
            </picture>
            <DescCardDetail data={myCards} />
          </div>

          <section className={style.hopeExchangeContainer}>
            <header className={style.hopeExchangeHeader}>
              <p>교환 희망 정보</p>
            </header>
            <div className={style.dropdownContainer}>
              <div className={style.dropdownBox}>
                <label>등급</label>
                <GradeSelectButton />
              </div>
              <div className={style.dropdownBox}>
                <label>장르</label>
                <GenreSelectButton />
              </div>
            </div>
            <section className={style.outAreaSection}>
              <div className={style.inputArea}>
                <label>교환 희망 설명</label>
                <DescInputArea />
              </div>
              <div className={style.btnContainer}>
                <CancleButton closeModal={onClickClose} />
                <RegistButton cardId={cardId} closeModal={onClickClose} />
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default CardRegistModal;
