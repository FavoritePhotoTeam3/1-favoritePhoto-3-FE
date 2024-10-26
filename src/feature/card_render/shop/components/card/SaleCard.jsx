import React, { forwardRef } from "react";
import style from "./SaleCard.module.css";
import { Link } from "react-router-dom";

import logoImage from "./assets/logo.svg";
import soldOutImage from "./assets/soldout.svg";

const SaleCard = ({ data }, ref) => {
  const id = data.id;
  const price = data.price;
  const totalCount = data.totalCount;
  const remainingCount = data.remainingCount;
  const isSoldOut = data.isSoldOut;

  const name = data.card.name;
  const genre = data.card.genre;
  const grade = data.card.grade;
  const imageURL = data.card.imageURL;

  const nickname = data.user.nickname;

  const gradeStyle = grade ? grade.replace(/\s+/g, "").toLowerCase() : "";

  return (
    <Link to={`/item/${id}`} ref={ref}>
      <figure className={style.contaier}>
        <section className={style.imgWrapper}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${imageURL}`}
              className={style.cardImage}
            />
            <img
              id="checkCard"
              src={imageURL}
              alt="Card"
              className={`${style.cardImage} ${isSoldOut ? style.soldOut : ""}`}
            />
          </picture>
          {isSoldOut && (
            <img
              src={soldOutImage}
              alt="Sold out"
              className={style.soldOutImage}
            />
          )}
        </section>

        <article className={style.contentSection}>
          <section className={style.cardInfo}>
            <p>{name}</p>
            <div className={style.subtitle}>
              <div className={style.infoLeftBox}>
                <p className={style[gradeStyle]}>{grade.toUpperCase()}</p>
                <p>|</p>
                <p>{genre}</p>
              </div>
              <p className={style.nickname}>{nickname}</p>
            </div>
          </section>

          <section className={style.quntitySection}>
            <div className={style.price}>
              <label>가격</label>
              <p className={style.whiteCount}>{price}</p>
            </div>
            <div className={style.remain}>
              <label>잔여</label>
              <p className={style.whiteCount}>
                {remainingCount}
                <span className={style.grayCount}>{` / ${totalCount}`}</span>
              </p>
            </div>
          </section>
        </article>
        <img src={logoImage} alt="logo icon" className={style.logoImage} />
      </figure>
    </Link>
  );
};

export default React.memo(forwardRef(SaleCard));
