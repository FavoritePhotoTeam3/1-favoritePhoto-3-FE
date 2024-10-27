import React from "react";
import style from "./index.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CardRegistShop from "@feature/card_regist_shop/CardRegistShop";

const DetailPage = () => {
  const { id } = useParams();
  const myCards = useSelector((state) =>
    state.myGallery.myCards.find((item) => item.id === parseInt(id))
  );

  if (!myCards) {
    return <p>데이터를 찾을 수 없습니다.</p>;
  }

  console.log("myCards : ", myCards);

  return (
    <main className={style.main}>
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
          <img
            src={myCards.imageURL}
            alt="Card"
            className={style.cardImage}
          />
        </picture>

        <CardRegistShop data={myCards} />
      </section>
    </main>
  );
};

export default DetailPage;
