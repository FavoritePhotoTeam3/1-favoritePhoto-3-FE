import { Title } from "../../commons/title/Title";
import styles from "./PhotoSellingDetail.module.css";

const PhotoSellingDetail = ({ card, onCancel }) => {
  return (
    <div>
      <div className={styles.logo}>나의 포토카드 판매하기</div>
      <div className={styles.title}>
        <Title title={card.title} />
      </div>
      <div className={styles.detailContent}>
        <div className={styles.imageWrapper}>
          <img src={card.imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default PhotoSellingDetail;
