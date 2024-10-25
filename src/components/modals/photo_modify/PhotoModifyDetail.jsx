import { useDispatch, useSelector } from "react-redux";
import {
  setPrice,
  setTotalCount,
  setExchangeGrade,
  setExchangeGenre,
  setExchangeDescription,
} from "../../../feature/photo_modify/photoModifySlice";
import { PrimaryBtn } from "../../common/btn/primaryBtn";
import { SecondaryBtn } from "../../common/btn/secondary";
import { DropdownInput } from "../../common/dropdown_input/DropdownInput";
import TextArea from "../../common/text_area/TextArea";
import { TitleDetail, TitleMiddle } from "../../common/title/Title";
import DescCardDetail from "../../desc_card_detail/DescCardDetail";
import styles from "./PhotoModifyDetail.module.css";

const PhotoModifyDetail = ({ card, onCancel, onModifying }) => {
  const dispatch = useDispatch();

  const {
    price,
    totalCount,
    exchangeGrade,
    exchangeGenre,
    exchangeDescription,
  } = useSelector((state) => state.photoModify);

  const gradeOptions = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genreOptions = ["풍경", "자연", "도시", "동물", "우주"];

  const handleMinusClick = () => {
    if (totalCount > 1) {
      dispatch(setTotalCount(totalCount - 1));
    }
  };

  const handlePlusClick = () => {
    if (totalCount < card.totalCount) {
      dispatch(setTotalCount(totalCount + 1));
    }
  };

  const handlePriceChange = (e) => {
    dispatch(setPrice(e.target.value));
  };

  const handleTextChange = (e) => {
    dispatch(setExchangeDescription(e.target.value));
  };

  const handleModify = () => {
    onModifying({
      price,
      totalCount,
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
            quantity={totalCount}
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
