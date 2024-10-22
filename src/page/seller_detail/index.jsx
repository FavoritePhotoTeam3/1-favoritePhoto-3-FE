import styles from "./index.module.css";
import { TitleDetail } from "../../components/common/title/Title";
import DescCardSeller from "../../components/desc_card_seller/DescCardSeller";
import ImgCardExchange from "../../components/imgcard_exchange/ImgCardExchange";
import { useParams } from "react-router-dom";
import {
  useSellerDetail,
  useSellerExchangeCards,
} from "../../feature/seller_detail/useSellerDetail";

import defaultImage from "./assets/image1.svg";
import backIcon from "./assets/back_icon.svg";

const SellerDetailPage = () => {
  const { shopId } = useParams();

  // 카드 상세 데이터
  const {
    data: sellerData,
    error: sellerError,
    isLoading: sellerLoading,
  } = useSellerDetail(shopId);
  // 교환 제시 목록 데이터
  const {
    data: exchangeCardsData,
    error: exchangeError,
    isLoading: exchangeLoading,
  } = useSellerExchangeCards(shopId);

  const handleRefresh = () => {
    console.log("새로고침 버튼 클릭됨");
  };

  const handleModify = () => {
    console.log("수정하기 버튼 클릭됨");
  };

  const handleCloseSelling = () => {
    console.log("판매 내리기 버튼 클릭됨");
  };

  if (sellerLoading || exchangeLoading) return <div>로딩중...</div>;
  if (sellerError || exchangeError)
    return (
      <div>에러 발생: {sellerError?.message || exchangeError?.message}</div>
    );

  const {
    card: { name, genre, grade, imageURL, description } = {},
    user: { nickname } = {},
    price,
    remainingCount,
    totalCount,
    exchangeDescription,
    exchangeGrade,
    exchangeGenre,
  } = sellerData || {};

  const sellingData = {
    title: name,
    grade,
    genre,
    nickname,
    description,
    imageUrl: imageURL || defaultImage,
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
              <TitleDetail title={name || "카드 이름"} />
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
                <DescCardSeller
                  sellingData={sellingData}
                  exchangeData={{
                    grade: exchangeGrade,
                    genre: exchangeGenre,
                    description: exchangeDescription,
                  }}
                  onClickRefresh={handleRefresh}
                  onClickModify={handleModify}
                  onClickCloseSelling={handleCloseSelling}
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <TitleDetail title={"교환 제시 목록"} />
            </div>
            <div className={styles.exchangeCardsContainer}>
              {exchangeCardsData?.length > 0 ? (
                exchangeCardsData.map((exchangeCard) => (
                  <ImgCardExchange key={exchangeCard.id} {...exchangeCard} />
                ))
              ) : (
                <p className={styles.exchangeEmpty}>- 교환 신청이 없습니다 -</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SellerDetailPage;
