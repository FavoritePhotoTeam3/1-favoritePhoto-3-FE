import { useDispatch, useSelector } from "react-redux";
import {
  toggleFilter,
  selectCard,
  clearSelectedCard,
  setSearch,
  setGradeFilter,
  setGenreFilter,
} from "../../../feature/photo_exchange/PhotoExchangeSlice";

import { Title } from "../../common/title/Title";
import SearchBar from "../../common/search_bar/SearchBar";
import { DropdownNoneBorder } from "../../common/dropdown_normal/DropdownNormal";
import styles from "./PhotoExchange.module.css";
import ImgCardMy from "../../imgcard_my/ImgCardMy";
import PhotoExchangeDetail from "./PhotoExchangeDetail";
import Filter from "../filter_modal/FilterModal";
import { useRef } from "react";
import { useMyCards } from "../../../feature/photo_exchange/usePhotoExchange";

import dragThumb from "./assets/drag_thumb.svg";
import backIcon from "./assets/back_icon.svg";
import filterIcon from "./assets/icon_filter.svg";

const PhotoExchange = ({ onClose, shopId, onSuccess }) => {
  const dispatch = useDispatch();
  const { search, gradeFilter, genreFilter, selectedCard, isFilterOpen } =
    useSelector((state) => state.photoExchange);
  const modalContentRef = useRef(null);

  const { data: imageCards, isLoading } = useMyCards(search);

  const gradeOptions = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genreOptions = ["풍경", "여행", "자연", "도시", "동물", "기타"];

  // 이미지카드 클릭시 상세 페이지 보기
  const handleCardClick = (card) => {
    dispatch(selectCard(card));
  };

  const handleCancel = () => {
    dispatch(clearSelectedCard());
  };

  const handleExchange = () => {
    console.log("교환 요청 완료");
    dispatch(clearSelectedCard());
    onClose();
  };

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  // 드롭다운 선택 시 호출되는 함수
  const handleGradeChange = (option) => {
    dispatch(setGradeFilter(option));
  };
  const handleGenreChange = (option) => {
    dispatch(setGenreFilter(option));
  };

  const toggleFilterModal = () => {
    dispatch(toggleFilter());
  };

  const handleOverlayClick = (e) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target)
    ) {
      onClose();
    }
  };

  const filteredCards = imageCards?.filter((card) => {
    const matchesGrade = gradeFilter ? card.grade === gradeFilter : true;
    const matchesGenre = genreFilter ? card.genre === genreFilter : true;
    return matchesGrade && matchesGenre;
  });

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
              shopId={shopId}
              onSuccess={onSuccess}
            />
          ) : (
            <div className={styles.mainWrapper}>
              <div className={styles.logo}>마이갤러리</div>
              <div className={styles.title}>
                <Title title={"포토카드 교환하기"} />
              </div>
              <div className={styles.filter}>
                <div className={styles.searchBarWrapper}>
                  <SearchBar value={search} onChange={handleSearchChange} />
                </div>
                <div className={styles.filterWrapper}>
                  <DropdownNoneBorder
                    title={gradeFilter || "등급"}
                    options={gradeOptions}
                    mobileWidth="52px"
                    mobileHeight="52px"
                    onSelect={handleGradeChange}
                  />
                  <DropdownNoneBorder
                    title={genreFilter || "장르"}
                    options={genreOptions}
                    mobileWidth="52px"
                    mobileHeight="52px"
                    onSelect={handleGenreChange}
                  />
                </div>
                <div
                  className={styles.filterMobile}
                  onClick={toggleFilterModal}
                >
                  <img src={filterIcon} alt="mobile filter" />
                </div>
              </div>
              <div className={styles.imageCardContainer}>
                {isLoading ? (
                  <p>로딩 중...</p>
                ) : (
                  filteredCards.map((card) => (
                    <ImgCardMy
                      key={card.id}
                      title={card.name}
                      grade={card.grade}
                      genre={card.genre}
                      nickname={card.user.nickname}
                      price={card.purchasePrice || 0}
                      remainingCount={card.remainingCount}
                      imageURL={card.imageURL}
                      onClick={() => handleCardClick(card)}
                    />
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {isFilterOpen && (
        <div
          className={styles.filterModalOverlay}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.filterModal}>
            <Filter
              onClickClose={toggleFilterModal}
              onClickRefresh={() => console.log("필터 새로고침 동작")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoExchange;
