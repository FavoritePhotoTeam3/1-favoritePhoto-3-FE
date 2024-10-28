import styles from "./index.module.css";
import { TitleDetail } from "../../components/common/title/Title";
import DescCardSeller from "@components/desc_card/desc_card_seller/DescCardSeller";
import ImgCardExchange from "../../components/imgcard_exchange/ImgCardExchange";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  useSellerDetail,
  useSellerExchangeCards,
} from "../../feature/seller_detail/useSellerDetail";
import PhotoModify from "../../components/modals/photo_modify/PhotoModify";
import CancelSellingAsking from "../../components/modals/confirm/CancelSellingConfirm";
import RejectAsking from "../../components/modals/confirm/RejectConfirm";
import ApproveAsking from "../../components/modals/confirm/ApproveConfirm";
import {
  openCancelSellingModal,
  openRejectModal,
  openApproveModal,
  openModifyModal,
} from "../../feature/seller_detail/sellerModalSlice";

import defaultImage from "./assets/image1.svg";
import backIcon from "./assets/back_icon.svg";

const SellerDetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shopId } = useParams();

  const { isModalOpen, modalType } = useSelector((state) => state.sellerModal);

  // 카드 상세 데이터
  const {
    data: sellerData,
    error: sellerError,
    isLoading: sellerLoading,
    refetch: refetchSellerDetail,
  } = useSellerDetail(shopId);
  // 교환 제시 목록 데이터
  const {
    data: exchangeCardsData,
    error: exchangeError,
    isLoading: exchangeLoading,
    refetch: refetchExchangeCards,
  } = useSellerExchangeCards(shopId);

  const handleHomeClick = () => navigate("/");

  const handleRefresh = () => {
    console.log("새로고침 버튼 클릭됨");
  };

  const handleModifyClick = () => {
    dispatch(
      openModifyModal({
        shopId: sellerData.id,
        cardId: sellerData.cardId,
        price: sellerData.price,
        totalCount: sellerData.totalCount,
        nickname: sellerData.user.nickname,
        grade: sellerData.card.grade,
        genre: sellerData.card.genre,
        name: sellerData.card.name,
        description: sellerData.card.description,
        imageURL: sellerData.card.imageURL,
        exchangeGrade: sellerData.exchangeGrade,
        exchangeGenre: sellerData.exchangeGenre,
        exchangeDescription: sellerData.exchangeDescription,
      })
    );
  };

  const handleCancelSellingClick = () => {
    dispatch(
      openCancelSellingModal({
        shopId,
        name: sellerData?.card.name,
        grade: sellerData?.card.grade,
      })
    );
  };

  const handleRejectClick = (exchangeCard) => {
    dispatch(
      openRejectModal({
        exchangeId: exchangeCard.id,
        name: exchangeCard.card.name,
        grade: exchangeCard.card.grade,
      })
    );
  };

  const handleApproveClick = (exchangeCard) => {
    dispatch(
      openApproveModal({
        exchangeId: exchangeCard.id,
        name: exchangeCard.card.name,
        grade: exchangeCard.card.grade,
      })
    );
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
            <img
              src={backIcon}
              alt="back"
              className={styles.backIcon}
              onClick={handleHomeClick}
            />
            <div className={styles.logoWrapper} onClick={handleHomeClick}>
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
                  onClickModify={handleModifyClick}
                  onClickCloseSelling={handleCancelSellingClick}
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <TitleDetail title={"교환 제시 목록"} />
            </div>
            <div className={styles.exchangeCardsContainer}>
              {exchangeCardsData?.length > 0 ? (
                exchangeCardsData.map((exchangeCard) => (
                  <ImgCardExchange
                    key={exchangeCard.id}
                    title={exchangeCard.card.name}
                    grade={exchangeCard.card.grade}
                    genre={exchangeCard.card.genre}
                    nickname={exchangeCard.user.nickname}
                    price={exchangeCard.card.purchasePrice}
                    imageUrl={exchangeCard.card.imageURL}
                    description={exchangeCard.description}
                    onClickReject={() => handleRejectClick(exchangeCard)}
                    onClickApprove={() => handleApproveClick(exchangeCard)}
                  />
                ))
              ) : (
                <p className={styles.exchangeEmpty}>- 교환 신청이 없습니다 -</p>
              )}
            </div>
            {isModalOpen && modalType === "modify" && (
              <PhotoModify
                refetchSellerDetail={refetchSellerDetail}
                refetchExchangeCards={refetchExchangeCards}
              />
            )}
            {isModalOpen && modalType === "cancelSelling" && (
              <CancelSellingAsking />
            )}
            {isModalOpen && modalType === "reject" && <RejectAsking />}
            {isModalOpen && modalType === "approve" && <ApproveAsking />}
          </div>
        </div>
      </main>
    </>
  );
};

export default SellerDetailPage;
