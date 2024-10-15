import { useState } from "react";
import { PrimaryBtn } from "../../commons/btn/primaryBtn";
import { SecondaryBtn } from "../../commons/btn/secondary";
import { DropdownInput } from "../../commons/dropdown_input/DropdownInput";
import TextArea from "../../commons/text_area/TextArea";
import { Title, TitleMiddle } from "../../commons/title/Title";
import DescCardDetail from "../../desc_card_detail/DescCardDetail";
import styles from "./PhotoSellingDetail.module.css";

const PhotoSellingDetail = ({
  card,
  onCancel,
  onSelling,
  gradeOptions,
  genreOptions,
}) => {
  const [textareaValue, setTextareaValue] = useState("");

  const handleTextChange = (e) => {
    setTextareaValue(e.target.value);
  };

  return (
    <div className={styles.sellingDetailModal}>
      <div className={styles.logo}>나의 포토카드 판매하기</div>
      <div className={styles.title}>
        <Title title={card.title} />
      </div>
      <div className={styles.detailContent}>
        <div className={styles.imageWrapper}>
          <img src={card.imageUrl} />
        </div>
        <div className={styles.cardDetailWrapper}>
          <DescCardDetail registData={card} quantity={card.counts} />
        </div>
      </div>
      <div className={styles.subTitle}>
        <TitleMiddle title="교환 희망 정보" />
      </div>
      <div className={styles.filterWrapper}>
        <DropdownInput
          label="등급"
          placeholder="등급을 선택해주세요"
          options={gradeOptions}
        />
        <DropdownInput
          label="장르"
          placeholder="장르를 선택해주세요"
          options={genreOptions}
        />
      </div>
      <div className={styles.textareaWrapper}>
        <TextArea
          label="교환 희망 설명"
          placeholder="설명을 입력해 주세요"
          value={textareaValue}
          onChange={handleTextChange}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <SecondaryBtn text="취소하기" onClick={onCancel} />
        <PrimaryBtn text="판매하기" onClick={onSelling} />
      </div>
    </div>
  );
};

export default PhotoSellingDetail;
