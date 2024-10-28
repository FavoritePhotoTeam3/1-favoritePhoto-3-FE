import React from "react";
import style from "./DescCardDetail.module.css";
import font from "@styles/fonts.module.css";

//컴포넌트
import QuantityControl from "./QuantityControl";
import InputPoint from "./InputPoint";

export const DescCardDetail = ({ data }) => {
  // const totalCount = data.totalCount;
  const remainingCount = data.remainingCount;

  const genre = data.genre;
  const grade = data.grade;

  const nickname = data.user.nickname;

  const gradeStyle = grade.toLowerCase().replace(/\s+/g, "");

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

      <section className={`${style.section} ${style.gapLarge}`}>
        <div className={style.boxPerRow}>
          <section className={style.labelBox}>
            <label className={font.whiteLabel}>총 판매 수량</label>
            <label className={font.whiteLabel}>장당 가격</label>
          </section>
          <section className={style.controllerBox}>
            <div className={style.quantityBox}>
              <QuantityControl maxCount={remainingCount} />
              <div>
                <p className={font.whiteSmallValue}>{` / ${remainingCount}`}</p>
                <p className={font.graySmallValue}>
                  {`최대 ${remainingCount}장`}
                </p>
              </div>
            </div>
            <div className={style.quantityBox}>
              <InputPoint />
            </div>
          </section>
        </div>
        <div className={style.space} />
      </section>
    </div>
  );
};

export default DescCardDetail;