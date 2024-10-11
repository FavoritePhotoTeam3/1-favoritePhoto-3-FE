import React from "react";
import style from "./DescCardDetail.module.css";
import font from "../../styles/DescCardFont.module.css";

//컴포넌트
import QuantityControl from "../commons/quantity_control/QuantityControl.jsx";

// props 정리 *이름 준수
// registData = 판매 등록 데이터
// onClickRefresh로 icRefresh 온클릭 핸들링
// quantity = 버튼으로 조절하는 수량 조절 값 > 상위 컴포넌트에서 state 관리 및 전달 필요

export default function DescCardDetail(props) {
  const getColor = (grade) => {
    switch (grade) {
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

  const InputPoint = (props) => {
    return (
      <div className={style.inputContainer}>
        <input
          type="number"
          className={style.pointInput}
          placeholder={props.placeholder}
          value={props.point}
          onChange={props.onChangePoint}
        />
        <span className={`${font.middleBold} ${font.white}`}>P</span>
      </div>
    );
  };

  return (
    <div className={style.container}>
      <section className={style.section}>
        <div className={style.boxPerRow}>
          <div className={style.gradeGenre}>
            <p className={`${font.large} ${getColor(props.registData.grade)}`}>
              {props.registData.grade.toUpperCase()}
            </p>
            <p className={`${font.large} ${font.darkGray}`}>|</p>
            <p className={`${font.large} ${font.gray}`}>
              {props.registData.genre}
            </p>
          </div>
          <p className={`${font.largeUnderline} ${font.white}`}>
            {props.registData.nickname}
          </p>
        </div>
      </section>

      <section className={`${style.section} ${style.gapLarge}`}>
        <div className={style.boxPerRow}>
          <label className={`${font.middle} ${font.white}`}>구매 수량</label>
          <div className={style.quantityBox}>
            <QuantityControl
              quantity={props.quantity}
              onMinusClick={props.onMinusClick}
              onPlusClick={props.onPlusClick}
            />
            <div>
              <p className={`${font.large} ${font.white}`}>
                {` / ${props.registData.totalCount}`}
              </p>
              <p className={`${font.verySmall} ${font.gray}`}>
                {`최대 ${props.registData.totalCount}장`}
              </p>
            </div>
          </div>
        </div>
        <div className={style.boxPerRow}>
          <label className={`${font.middle} ${font.white}`}>장당 가격</label>
          <InputPoint
            point={props.sellingPoint}
            onChangePoint={props.onChangePoint}
            placeholder={"숫자만 입력"}
          />
        </div>
        <div className={style.space} />
      </section>
    </div>
  );
}
