import { useState } from "react";
import styles from "./PhotoExchangeDetail.module.css";
import { TitleDetail } from "../../common/title/Title";
import ImgCardMy from "../../img_card/imgcard_my/ImgCardMy";
import TextArea from "../../common/text_area/TextArea";
import { SecondaryBtn } from "../../common/btn/secondary";
import { PrimaryBtn } from "../../common/btn/primaryBtn";
import { requestCardExchange } from "../../../feature/photo_exchange/PhotoExchangeAPI";

const PhotoExchangeDetail = ({
  card,
  onCancel,
  onExchange,
  shopId,
  onSuccess,
}) => {
  const [description, setDescription] = useState("");
  const count = 1;

  const handleExchangeRequest = async () => {
    try {
      const myCardId = card.id;

      const response = await requestCardExchange(
        shopId,
        myCardId,
        description,
        count
      );
      if (response.success) {
        console.log("교환 요청이 성공적으로 처리되었습니다.", response.data);
        onExchange();
        onSuccess(); // 교환 목록 새로고침
      } else {
        console.error("교환 요청 실패:", response.error);
      }
    } catch (error) {
      console.error("교환 처리 오류:", error);
    }
  };

  return (
    <div className={styles.detailWrapper}>
      <div className={styles.logo}>포토카드 교환하기</div>
      <div className={styles.title}>
        <TitleDetail title={card.title} />
      </div>
      <div className={styles.cardDetail}>
        <div className={styles.cardWrapper}>
          <ImgCardMy
            title={card.name}
            grade={card.grade}
            genre={card.genre}
            nickname={card.user.nickname}
            price={card.purchasePrice || 0}
            remainingCount={card.remainingCount}
            imageURL={card.imageURL}
          />
        </div>
        <div>
          <div className={styles.textareaWrapper}>
            <TextArea
              label="교환 제시 내용"
              placeholder="내용을 입력해 주세요"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <SecondaryBtn text="취소하기" onClick={onCancel} />
            <PrimaryBtn text="교환하기" onClick={handleExchangeRequest} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoExchangeDetail;
