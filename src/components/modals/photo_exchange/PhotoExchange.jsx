import { Title } from "../../commons/title/Title";
import SearchBar from "../../commons/search_bar/SearchBar";
import { DropdownNoneBorder } from "../../commons/dropdown_normal/DropdownNormal";
import styles from "./PhotoExchange.module.css";
import ImgCardMy from "../../imgcard_my/ImgCardMy";
import PhotoExchangeDetail from "./PhotoExchangeDetail";
import Filter from "../filter_modal/FilterModal";
import { useRef, useState } from "react";

import dragThumb from "./assets/drag_thumb.svg";
import backIcon from "./assets/back_icon.svg";
import filterIcon from "./assets/icon_filter.svg";

const PhotoExchange = ({ onClose, imageCards }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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

  const handleExchange = () => {
    console.log("교환 동작 수행하기");
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

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
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
      <div
        className={`${styles.modalContainer} ${
          selectedCard ? styles.mobileDetailContainer : ""
        }`}
        ref={modalContentRef}
      >
        <img
          src={backIcon}
          alt="back icon"
          className={`${styles.backIcon} ${
            selectedCard ? styles.mobileDetailBack : ""
          }`}
          onClick={handleCancel}
        />
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div
          className={`${styles.dragZone} ${
            selectedCard ? styles.mobileDetailThumb : ""
          }`}
          onClick={onClose}
        >
          <img src={dragThumb} alt="drag thumb" className={styles.dragThumb} />
        </div>
        <div className={styles.modalContent}>
          {selectedCard ? (
            <PhotoExchangeDetail
              card={selectedCard}
              onCancel={handleCancel}
              onExchange={handleExchange}
            />
          ) : (
            <div className={styles.mainWrapper}>
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
                    mobileWidth="52px"
                    mobileHeight="52px"
                    onSelect={handleGradeChange}
                  />
                  <DropdownNoneBorder
                    title={selectGenre}
                    options={genreOptions}
                    mobileWidth="52px"
                    mobileHeight="52px"
                    onSelect={handleGenreChange}
                  />
                </div>
                <div className={styles.filterMobile} onClick={toggleFilter}>
                  <img src={filterIcon} alt="mobile filter" />
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
      {isFilterOpen && (
        <div className={styles.filterModalOverlay}>
          <div className={styles.filterModal}>
            <Filter
              onClickClose={toggleFilter}
              onClickRefresh={() => console.log("필터 새로고침 동작")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoExchange;
