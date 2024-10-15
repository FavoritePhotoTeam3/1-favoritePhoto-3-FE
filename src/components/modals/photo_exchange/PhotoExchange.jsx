import { Title } from "../../commons/title/Title";
import SearchBar from "../../commons/search_bar/SearchBar";
import { DropdownNoneBorder } from "../../commons/dropdown_normal/DropdownNormal";
import styles from "./PhotoExchange.module.css";
import ImgCardMy from "../../imgcard_my/ImgCardMy";
import { useState } from "react";

const PhotoExchange = ({ onClose, imageCards }) => {
  const [search, setSearch] = useState("");
  const [selectGrade, setSelectGrade] = useState("등급");
  const [selectOrder, setSelectOrder] = useState("낮은 가격순");
  const gradeOptions = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const orderOptions = ["최신 순", "오래된 순", "높은 가격순", "낮은 가격순"];

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    console.log("검색 동작 수행하기");
  };

  // 드롭다운 선택 시 호출되는 함수
  const handleGradeChange = (option) => {
    setSelectGrade(option);
  };
  const handleOrderChange = (option) => {
    setSelectOrder(option);
  };

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
            <SearchBar
              value={search}
              onChange={handleSearchChange}
              onKeyDown={handleSearchClick}
            />
          </div>
          <div className={styles.filterWrapper}>
            <DropdownNoneBorder
              title={selectGrade}
              options={gradeOptions}
              onSelect={handleGradeChange}
            />
            <DropdownNoneBorder
              title={selectOrder}
              options={orderOptions}
              onSelect={handleOrderChange}
            />
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
