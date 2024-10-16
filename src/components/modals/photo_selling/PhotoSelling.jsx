import { Title } from "../../commons/title/Title";
import SearchBar from "../../commons/search_bar/SearchBar";
import { DropdownNoneBorder } from "../../commons/dropdown_normal/DropdownNormal";
import styles from "./PhotoSelling.module.css";
import ImgCardMy from "../../imgcard_my/ImgCardMy";
import PhotoSellingDetail from "./PhotoSellingDetail";
import { useRef, useState } from "react";

const PhotoSelling = ({ onClose, imageCards }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [search, setSearch] = useState("");
  const modalContentRef = useRef(null);

  const [selectGrade, setSelectGrade] = useState("등급");
  const [selectGenre, setSelectGenre] = useState("장르");
  const gradeOptions = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genreOptions = ["풍경", "자연", "도시", "기계", "우주"];

  // 이미지카드 클릭시 상세 페이지 보기
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCancel = () => {
    setSelectedCard(null);
  };

  const handleSelling = () => {
    console.log("판매 동작 수행하기");
  };

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
  const handleGenreChange = (option) => {
    setSelectGenre(option);
  };

  const handleOverlayClick = (e) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target)
    ) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalContent} ref={modalContentRef}>
          {selectedCard ? (
            <PhotoSellingDetail
              card={selectedCard}
              onCancel={handleCancel}
              onSelling={handleSelling}
              gradeOptions={gradeOptions}
              genreOptions={genreOptions}
            />
          ) : (
            <div className={styles.mainWrapper}>
              <div className={styles.logo}>마이갤러리</div>
              <div className={styles.title}>
                <Title title={"나의 포토카드 판매하기"} />
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
                    title={selectGenre}
                    options={genreOptions}
                    onSelect={handleGenreChange}
                  />
                </div>
              </div>
              <div className={styles.imageCardContainer}>
                {imageCards.map((card) => (
                  <ImgCardMy
                    key={card.id}
                    {...card}
                    onClick={() => handleCardClick(card)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoSelling;
