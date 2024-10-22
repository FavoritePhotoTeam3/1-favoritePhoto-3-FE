import styles from "./index.module.css";
import { TitleDetail } from "../../components/common/title/Title";
import DescCardBuyer from "../../components/desc_card_buyer/DescCardBuyer";
import { useState } from "react";
import { PrimaryBtn } from "../../components/common/btn/primaryBtn";
import { useParams } from "react-router-dom";
import { useBuyerDetail } from "../../feature/buyer_detail/useBuyerDetail";

import defaultImage from "./assets/image1.svg";
import backIcon from "./assets/back_icon.svg";

const BuyerDetailPage = () => {
  const { shopId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { data, error, isLoading } = useBuyerDetail(shopId);

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handlePlusClick = () => {
    if (quantity < (data?.remainingCount || 1)) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handlePurchaseClick = () => {
    console.log(`${quantity}개의 포토카드를 구매합니다.`);
  };

  const gradeColor = (grade) => {
    switch (grade) {
      case "common":
        return styles.common;
      case "rare":
        return styles.rare;
      case "super rare":
        return styles.superRare;
      case "legendary":
        return styles.legendary;
      default:
        return styles.common;
    }
  };

  if (isLoading) return <div>로딩중</div>;
  if (error) return <div>에러 : {error.message}</div>;

  const {
    card: { name, imageURL, genre, grade } = {},
    user: { nickname } = {},
    description,
    price,
    remainingCount,
    totalCount,
    exchangeDescription,
    exchangeGrade,
    exchangeGenre,
  } = data || {};

  const sellingData = {
    grade,
    genre,
    nickname,
    description,
    price,
    remainingCount,
    totalCount,
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.header}>
            <img src={backIcon} alt="back" className={styles.backIcon} />
            <div className={styles.logoWrapper}>
              <p className={styles.logo}>마켓플레이스</p>
            </div>
          </div>

          <div className={styles.detailContent}>
            <div className={styles.titleWrapper}>
              <TitleDetail title={name || "card.name"} />
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.imageWrapper}>
                <img
                  src={imageURL || defaultImage}
                  alt="card"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.DescCardWrapper}>
                <DescCardBuyer
                  sellingData={sellingData}
                  quantity={quantity}
                  onMinusClick={handleMinusClick}
                  onPlusClick={handlePlusClick}
                  onClickPurchase={handlePurchaseClick}
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <TitleDetail title={"교환 희망 정보"} />
              <div className={styles.buttonWrapper}>
                <PrimaryBtn
                  text="포토카드 교환하기"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
            <div className={styles.exchangeInfo}>
              <p className={styles.exchangeDescription}>
                {exchangeDescription}
              </p>
              <div className={styles.gradeAndGenre}>
                <span
                  className={`${styles.exchangeGrade} ${gradeColor(
                    exchangeGrade
                  )}`}
                >
                  {exchangeGrade?.toUpperCase()}
                </span>
                <span className={styles.exchangeGenre}>{exchangeGenre}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BuyerDetailPage;
