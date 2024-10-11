import React, { useState } from "react";
import style from "./DescCardBuyer.module.css";
import font from "../../styles/DescCardFont.module.css";

//컴포넌트
import QuantityControl from "../commons/quantity_control/QuantityControl.jsx";
import { PrimaryBtn } from "../commons/btn/primaryBtn.jsx"

// props 정리 *이름 준수
// selllingData = 판매 Photo 데이터 묶음
// 현재 버튼 온클릭 핸들링 없음 > 버튼 컴포넌트 내 미구현

export default function DescCardBuyer(props) {
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

  return (
    <div className={style.container}>
      <section className={style.section}>
        <div className={style.boxPerRow}>
          <div className={style.gradeGenre}>
            <p className={`${font.large} ${getColor(props.sellingData.grade)}`}>
              {props.sellingData.grade.toUpperCase()}
            </p>
            <p className={`${font.large} ${font.darkGray}`}>|</p>
            <p className={`${font.large} ${font.gray}`}>{props.sellingData.genre}</p>
          </div>
          <p className={`${font.largeUnderline} ${font.white}`}>
            {props.sellingData.nickname}
          </p>
        </div>
      </section>

      <section className={style.section}>
        <div className={style.boxPerRow}>
          <p className={`${font.small} ${font.white}`}>
            {props.sellingData.description}
          </p>
        </div>
      </section>

      <section className={`${style.section} ${style.gapSmall}`}>
        <div className={style.boxPerRow}>
          <label className={`${font.middle} ${font.gray}`}>가격</label>
          <p className={`${font.large} ${font.white}`}>{`${props.sellingData.price} P`}</p>
        </div>
        <div className={style.boxPerRow}>
          <label className={`${font.middle} ${font.gray}`}>잔여</label>
          <p className={`${font.large} ${font.white}`}>
            {props.sellingData.remainingCount}
            <span className={`${font.largeThin} ${font.gray}`}>
              {` / ${props.sellingData.totalCount}`}
            </span>
          </p>
        </div>
      </section>

      <section className={`${style.section} ${style.gapLarge}`}>
        <div className={style.boxPerRow}>
          <label className={`${font.middle} ${font.white}`}>구매 수량</label>
          <QuantityControl
            quantity={props.quantity}
            onMinusClick={props.onMinusClick}
            onPlusClick={props.onPlusClick}
          />
        </div>
        <div className={style.boxPerRow}>
          <label className={`${font.middle} ${font.white}`}>총 가격</label>
          <div className={style.totalQuantity}>
            <div className={style.priceQuantity}>
              <p className={`${font.large} ${font.white}`}>
                {`${props.sellingData.price * props.quantity} P`}
              </p>
              <p className={`${font.middle} ${font.gray}`}>
                {`(${props.quantity}장)`}
              </p>
            </div>
          </div>
        </div>
        <div className={style.space}/>
      </section>

      <PrimaryBtn text={"포토카드 구매하기"} width={"100%"} height={"80px"}/>
    </div>
  );
}
