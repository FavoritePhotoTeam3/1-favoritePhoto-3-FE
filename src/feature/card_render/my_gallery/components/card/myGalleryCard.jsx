import React, { forwardRef } from "react";
import style from "./myGalleryCard.module.css";

import logoImage from "./assets/logo.svg";

export const myGalleryCard = ({ data }, ref) => {
  const price = data.card.purchasePrice;
  const totalCount = data.totalCount;
  // const remainingCount = data.remainingCount;

  const name = data.name;
  const genre = data.genre;
  const grade = data.grade;

  const imageURL = data.imageURL;

  const nickname = data.user.nickname;

  const gradeStyle = grade ? grade.replace(/\s+/g, "").toLowerCase() : "";

  return (
    <figure className={style.contaier} ref={ref}>
      <picture className={style.imgWrapper}>
        <source
          type="image/webp"
          srcSet={`${imageURL}`}
          className={style.cardImage}
        />
        <img
          id="checkCard"
          src={imageURL}
          alt="Card"
          className={`${style.cardImage}`}
        />
      </picture>

      <article className={style.contentSection}>
        <section className={style.cardInfo}>
          <p>{name}</p>
          <div className={style.subtitle}>
            <div className={style.infoLeftBox}>
              <p className={style[gradeStyle]}>{grade?.toUpperCase()}</p>
              <p>|</p>
              <p>{genre}</p>
            </div>
            <p className={style.nickname}>{nickname}</p>
          </div>
        </section>

        <section className={style.quntitySection}>
          <div className={style.price}>
            <label>가격</label>
            <p className={style.whiteCount}>{`${price} P`}</p>
          </div>
          <div className={style.remain}>
            <label>수량</label>
            <p className={style.whiteCount}>
              {}
              <span className={style.grayCount}>{`${totalCount}`}</span>
            </p>
          </div>
        </section>
      </article>
      <img src={logoImage} alt="logo icon" className={style.logoImage} />
    </figure>
  );
};

export default React.memo(forwardRef(myGalleryCard));
