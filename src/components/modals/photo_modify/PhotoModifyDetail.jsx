import { useState } from "react";
import { PrimaryBtn } from "../../common/btn/primaryBtn";
import { SecondaryBtn } from "../../common/btn/secondary";
import { DropdownInput } from "../../common/dropdown_input/DropdownInput";
import TextArea from "../../common/text_area/TextArea";
import { TitleDetail, TitleMiddle } from "../../common/title/Title";
import DescCardDetail from "../../desc_card_detail/DescCardDetail";
import styles from "./PhotoModifyDetail.module.css";

const PhotoModifyDetail = ({ card, onCancel, onModifying }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [exchangeGrade, setExchangeGrade] = useState("COMMON");
  const [exchangeGenre, setExchangeGenre] = useState("풍경");
  const [exchangeDescription, setExchangeDescription] = useState("");

  const gradeOptions = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genreOptions = ["풍경", "자연", "도시", "동물", "우주"];

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handlePlusClick = () => {
    if (quantity < card.totalCount) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleTextChange = (e) => {
    setExchangeDescription(e.target.value);
  };

  const handleModify = () => {
    onModifying({
      price,
      totalCount: quantity,
      exchangeGrade,
      exchangeGenre,
      exchangeDescription,
    });
  };

  const registData = {
    grade: card.grade,
    genre: card.genre,
    nickname: card.nickname,
    description: card.description,
    totalCount: card.totalCount,
    price: price,
  };

  return (
    <div className={styles.sellingDetailModal}>
      <div className={styles.logo}>수정하기</div>
      <div className={styles.title}>
        <TitleDetail title={card.name} />
      </div>
      <div className={styles.detailContent}>
        <div className={styles.imageWrapper}>
          <img src={card.imageURL} alt="card" className={styles.cardImage} />
        </div>
        <div className={styles.cardDetailWrapper}>
          <DescCardDetail
            registData={registData}
            quantity={quantity}
            onMinusClick={handleMinusClick}
            onPlusClick={handlePlusClick}
            sellingPoint={price}
            onChangePoint={handlePriceChange}
          />
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
          value={exchangeGrade}
          onChange={setExchangeGrade}
        />
        <DropdownInput
          label="장르"
          placeholder="장르를 선택해주세요"
          options={genreOptions}
          value={exchangeGenre}
          onChange={setExchangeGenre}
        />
      </div>
      <div className={styles.textareaWrapper}>
        <TextArea
          label="교환 희망 설명"
          placeholder="설명을 입력해 주세요"
          value={exchangeDescription}
          onChange={handleTextChange}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <SecondaryBtn text="취소하기" onClick={onCancel} />
        <PrimaryBtn text="수정하기" onClick={handleModify} />
      </div>
    </div>
  );
};

export default PhotoModifyDetail;
