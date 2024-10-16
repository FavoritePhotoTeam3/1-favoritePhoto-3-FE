import { useState } from "react";
import styles from "./PhotoExchangeDetail.module.css";
import { Title } from "../../commons/title/Title";
import ImgCardMy from "../../imgcard_my/ImgCardMy";
import TextArea from "../../commons/text_area/TextArea";
import { SecondaryBtn } from "../../commons/btn/secondary";
import { PrimaryBtn } from "../../commons/btn/primaryBtn";

const PhotoExchangeDetail = ({ card, onCancel, onExchange }) => {
  const [textareaValue, setTextareaValue] = useState("");

  const handleTextChange = (e) => {
    setTextareaValue(e.target.value);
  };

  return (
    <div>
      <div className={styles.logo}>포토카드 교환하기</div>
      <div className={styles.title}>
        <Title title={card.title} />
      </div>
      <div className={styles.cardDetail}>
        <div className={styles.cardWrapper}>
          <ImgCardMy {...card} />
        </div>
        <div>
          <div className={styles.textareaWrapper}>
            <TextArea
              label="교환 제시 내용"
              placeholder="내용을 입력해 주세요"
              value={textareaValue}
              onChange={handleTextChange}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <SecondaryBtn text="취소하기" onClick={onCancel} />
            <PrimaryBtn text="교환하기" onClick={onExchange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoExchangeDetail;
