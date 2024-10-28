import React from "react";
import font from "@styles/fonts.module.css";
import style from "@styles/CardStateControlStyle.module.css";

export const CardModifyOnShop = ({ data }) => {

  const id = data.id;
  const price = data.card?.purchasePrice || 0;
  const totalCount = data.totalCount;
  const remainingCount = data.remainingCount;

  const genre = data.genre;
  const grade = data.grade;
  const description = data.description;

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
            <label className={font.grayLabel}>잔여</label>
            <p className={style.whiteValue}>
                {remainingCount}
                <span className={style.grayCount}>{` / ${totalCount}`}</span>
              </p>
          </div>
        </section>

    </div>
  );
};

export default CardModifyOnShop;
