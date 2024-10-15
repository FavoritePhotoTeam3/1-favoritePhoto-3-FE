import { Title } from "../../commons/title/Title";
import SearchBar from "../../commons/search_bar/SearchBar";
import { DropdownNoneBorder } from "../../commons/dropdown_normal/DropdownNormal";
import styles from "./PhotoExchange.module.css";
import ImgCardMy from "../../imgcard_my/ImgCardMy";

const PhotoExchange = ({ onClose, imageCards }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.logo}>마이갤러리</div>
        <div className={styles.title}>
          <Title title={"포토카드 교환하기"} />
        </div>
        <div className={styles.filter}>
          <div className={styles.searchBarWrapper}>
            <SearchBar />
          </div>
          <div className={styles.filterWrapper}>
            <DropdownNoneBorder />
            <DropdownNoneBorder />
          </div>
        </div>
        <div className={styles.imageCardContainer}>
          {imageCards.map((card) => (
            <ImgCardMy key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoExchange;
