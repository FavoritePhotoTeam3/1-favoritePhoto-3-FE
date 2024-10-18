import styles from "./index.module.css";
import { TitleDetail } from "../../components/commons/title/Title";
import DescCardBuyer from "../../components/desc_card_buyer/DescCardBuyer";
import { useState } from "react";
import { PrimaryBtn } from "../../components/commons/btn/primaryBtn";

import defaultImage from "./assets/image1.svg";
import backIcon from "./assets/back_icon.svg";

const BuyerDetailPage = () => {
  // mock 데이터
  const sellingData = {
    grade: "legendary",
    genre: "풍경",
    nickname: "판다",
    description: "이 사진은 아주 특별한 사진입니다.",
    price: 5000,
    remainingCount: 3,
    totalCount: 10,
  };
  const exchangeData = {
    grade: "rare",
    genre: "자연",
    description: "교환을 희망하는 자연 사진입니다.",
  };
  const [quantity, setQuantity] = useState(1);

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handlePlusClick = () => {
    if (quantity < sellingData.remainingCount) {
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
              <TitleDetail title={"임시 card.title"} />
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.imageWrapper}>
                <img
                  src={defaultImage}
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
                {exchangeData.description}
              </p>
              <div className={styles.gradeAndGenre}>
                <span
                  className={`${styles.exchangeGrade} ${gradeColor(
                    exchangeData.grade
                  )}`}
                >
                  {exchangeData.grade.toUpperCase()}
                </span>
                <span className={styles.exchangeGenre}>
                  {exchangeData.genre}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BuyerDetailPage;
