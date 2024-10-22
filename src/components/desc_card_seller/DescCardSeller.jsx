import React from "react";
import style from "./DescCardSeller.module.css";
import font from "../../styles/fonts.module.css";
import icRefresh from "./assets/ic_refresh.png";

//컴포넌트
import PrimaryBtnAnother from "../common/btn/PrimaryBtnAnother.jsx";
import SecondaryAnother from "../common/btn/SecondaryAnother.jsx";

// props 정리 *이름 준수
// selllingData = 판매 Photo 데이터 묶음
// exchangeData = 교환 희망 정보 데이터 묶음
// 현재 버튼 온클릭 핸들링 없음 > 버튼 컴포넌트 내 미구현

export default function DescCardSeller(props) {
  const getColor = (grade) => {
    switch (grade.toLowerCase()) {
      case "common":
        return font.common;
      case "rare":
        return font.rare;
      case "super rare":
        return font.superRare;
      case "legendary":
        return font.legendary;
      default:
        return font.common;
    }
  };

  return (
    <div className={style.container}>
      <article>
        <section className={style.section}>
          <div className={style.boxPerRow}>
            <div className={style.gradeGenre}>
              <p
                className={`${font.header} ${getColor(
                  props.sellingData.grade
                )}`}
              >
                {props.sellingData.grade.toUpperCase()}
              </p>
              <p className={`${font.header} ${font.darkGray}`}>|</p>
              <p className={`${font.header} ${font.gray}`}>
                {props.sellingData.genre}
              </p>
            </div>
            <p className={`${font.header} ${font.white} ${font.underline}`}>
              {props.sellingData.nickname}
            </p>
          </div>
        </section>

        <section className={style.section}>
          <div className={style.boxPerRow}>
            <p className={font.whiteDesc}>{props.sellingData.description}</p>
          </div>
        </section>

        <section className={`${style.section} ${style.gapSmall}`}>
          <div className={style.boxPerRow}>
            <label className={font.grayLabel}>가격</label>
            <p className={font.whiteValue}>{`${props.sellingData.price} P`}</p>
          </div>
          <div className={style.boxPerRow}>
            <label className={font.grayLabel}>잔여</label>
            <p className={font.whiteValue}>
              {props.sellingData.remainingCount}
              <span className={font.grayValue}>
                {` / ${props.sellingData.totalCount}`}
              </span>
            </p>
          </div>
        </section>
      </article>

      <article>
        <header className={style.exchageHeader}>
          <img src={icRefresh} onClick={props.onClickRefresh} alt="새로고침" />
          <p className={font.bigHeader}>교환 희망 정보</p>
        </header>

        <section className={style.section}>
          <div className={style.boxPerRow}>
            <div className={style.gradeGenre}>
              <p
                className={`${font.header} ${getColor(
                  props.exchangeData.grade
                )}`}
              >
                {props.exchangeData.grade.toUpperCase()}
              </p>
              <p className={`${font.header} ${font.darkGray}`}>|</p>
              <p className={`${font.header} ${font.gray}`}>
                {props.exchangeData.genre}
              </p>
            </div>
          </div>
        </section>

        <section className={style.section}>
          <div className={style.boxPerRow}>
            <p className={font.whiteDesc}>{props.exchangeData.description}</p>
          </div>
          <div className={style.space} />
        </section>

        <section className={style.btnBox}>
          <div className={style.btnSize}>
            <PrimaryBtnAnother
              text={"수정하기"}
              font={"large"}
              onClick={props.onClickModify}
            />
          </div>
          <div className={style.btnSize}>
            <SecondaryAnother
              text={"판매 내리기"}
              font={"large"}
              onClick={props.onClickCloseSelling}
            />
          </div>
        </section>
      </article>
    </div>
  );
}
