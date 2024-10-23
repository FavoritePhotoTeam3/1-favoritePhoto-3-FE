import styles from "./index.module.css";
import { TitleDetail } from "../../components/common/title/Title";
import DescCardBuyer from "../../components/desc_card_buyer/DescCardBuyer";
import ImgCardExchangeMy from "../../components/imgcard_exchange_my/ImgCardExchangeMy";
import { PrimaryBtn } from "../../components/common/btn/primaryBtn";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  useBuyerDetail,
  useBuyerExchangeCards,
} from "../../feature/buyer_detail/useBuyerDetail";
import { useDispatch, useSelector } from "react-redux";
import {
  openPurchaseModal,
  closeModal,
} from "../../feature/buyer_detail/buyerModalSlice";
import PurchaseAsking from "../../components/modals/confirm/PurchaseConfirm";

import defaultImage from "./assets/image1.svg";
import backIcon from "./assets/back_icon.svg";

const BuyerDetailPage = () => {
  const { shopId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const modalType = useSelector((state) => state.modal.modalType);
  const purchaseInfo = useSelector((state) => state.modal.purchaseInfo || {});
  const exchangeInfo = useSelector((state) => state.modal.exchangeInfo);

  // 카드 상세 데이터
  const {
    data: buyerData,
    error: buyerError,
    isLoading: buyerLoading,
  } = useBuyerDetail(shopId);
  // 교환 제시 목록 데이터
  const {
    data: exchangeCardsData,
    error: exchangeError,
    isLoading: exchangeLoading,
  } = useBuyerExchangeCards(shopId);

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusClick = () => {
    if (quantity < (buyerData?.remainingCount || 1)) {
      setQuantity(quantity + 1);
    }
  };

  const handlePurchaseClick = () => {
    console.log(`${quantity}개의 포토카드를 구매합니다.`);
    dispatch(
      openPurchaseModal({
        shopId: buyerData?.shopId,
        name: buyerData?.card.name,
        grade: buyerData?.card.grade,
        count: quantity,
      })
    );
  };

  const handleExchangeClick = () => {
    console.log(`포토카드를 교환합니다.`);
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handlePurchaseConfirm = () => {
    console.log(`${purchaseInfo?.count}개의 포토카드를 구매합니다.`);
    dispatch(closeModal());
  };

  const handleExchangeConfirm = () => {
    console.log("교환 신청을 처리합니다.", exchangeInfo);
    dispatch(closeModal());
  };

  const gradeColor = (grade) => {
    switch (grade.toLowerCase()) {
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

  if (buyerLoading || exchangeLoading) return <div>로딩중...</div>;
  if (buyerError || exchangeError)
    return (
      <div>에러 발생: {buyerError?.message || exchangeError?.message}</div>
    );

  const {
    card: { name, imageURL, genre, grade, description } = {},
    user: { nickname } = {},
    price,
    remainingCount,
    totalCount,
    exchangeDescription,
    exchangeGrade,
    exchangeGenre,
  } = buyerData || {};

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
            <div className={styles.titleWrapper}>
              <TitleDetail title={"내가 제시한 교환 목록"} />
            </div>
            <div className={styles.exchangeCardsContainer}>
              {exchangeCardsData?.length > 0 ? (
                exchangeCardsData.map((exchangeCard) => (
                  <ImgCardExchangeMy
                    key={exchangeCard.id}
                    title={exchangeCard.card.name}
                    grade={exchangeCard.card.grade}
                    genre={exchangeCard.card.genre}
                    imageUrl={exchangeCard.card.imageURL}
                    description={exchangeCard.description}
                  />
                ))
              ) : (
                <p className={styles.exchangeEmpty}>- 교환 신청이 없습니다 -</p>
              )}
            </div>
            {isModalOpen && modalType === "purchase" && purchaseInfo && (
              <PurchaseAsking
                purchase={purchaseInfo}
                onClickPurchaseConfirm={handlePurchaseConfirm}
                onClose={handleCloseModal}
              />
            )}
            {/* {isModalOpen && modalType === "exchange" && (
              <exchangeModal
                exchange={exchangeInfo}
                onClickExchangeConfirm={handleExchangeConfirm}
                onClose={handleCloseModal}
              />
            )} */}
          </div>
        </div>
      </main>
    </>
  );
};

export default BuyerDetailPage;
