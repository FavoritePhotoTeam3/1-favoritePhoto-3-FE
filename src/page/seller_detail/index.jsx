import styles from "./index.module.css";
import { TitleDetail } from "../../components/commons/title/Title";
import DescCardSeller from "../../components/desc_card_seller/DescCardSeller";

import defaultImage from "./assets/image1.svg";
import ImgCardExchange from "../../components/imgcard_exchange/ImgCardExchange";

const SellerDetailPage = () => {
  // mock 데이터
  const sellingData = {
    title: "우리집 앞마당",
    grade: "legendary",
    genre: "풍경",
    nickname: "판다",
    description: "이 사진은 아주 특별한 사진입니다.",
    imageUrl: defaultImage,
    price: 5000,
    remainingCount: 3,
    totalCount: 10,
  };
  const exchangeData = {
    grade: "rare",
    genre: "자연",
    description: "교환을 희망하는 자연 사진입니다.",
  };

  const handleRefresh = () => {
    console.log("새로고침 버튼 클릭됨");
  };

  const handleModify = () => {
    console.log("수정하기 버튼 클릭됨");
  };

  const handleCloseSelling = () => {
    console.log("판매 내리기 버튼 클릭됨");
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <p className={styles.logo}>마켓플레이스</p>

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
                <DescCardSeller
                  sellingData={sellingData}
                  exchangeData={exchangeData}
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
              <ImgCardExchange {...sellingData} />
              <ImgCardExchange {...sellingData} />
              <ImgCardExchange {...sellingData} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SellerDetailPage;
