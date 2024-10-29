import React from "react";
import style from "@styles/CardDetailStyle.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CardONShopState from "@feature/card_state_control/modify/CardOnShopState";
import CardOnShopModify from "@feature/card_state_control/modify/CardOnShopModify";

const MySaleDetail = () => {
  const { id } = useParams();
  const myCards = useSelector((state) =>
    state.mySaleCard.myCards.find((item) => item.id === parseInt(id))
  );
  console.log("myCards : ", myCards);

  if (!myCards) {
    return <p>데이터를 찾을 수 없습니다.dddd</p>;
  }

  console.log("myCards : ", myCards);

  return (
    <main className={style.main}>
      <p className={style.pageHeader}>마켓 플레이스</p>
      <header className={style.header}>
        <p className={style.headerText}>{myCards.name}</p>
      </header>
      <section className={style.cardDetail}>
        <picture className={style.imgWrapper}>
          <source
            type="image/webp"
            srcSet={myCards.imageURL}
            className={style.cardImage}
          />
          <img src={myCards.imageURL} alt="Card" className={style.cardImage} />
        </picture>
        <section className={style.cardDetailSectionMerge}>
          <CardONShopState data={myCards} />
          <CardOnShopModify data={myCards} />
        </section>
      </section>
    </main>
  );
};

export default MySaleDetail;
