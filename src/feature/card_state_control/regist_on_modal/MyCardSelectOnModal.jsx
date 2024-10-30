import React from "react";
import style from "@styles/ModalCardStateControlStyle.module.css";
import icClose from "./assets/ic_close.png";

import MyGallerySearch from "@feature/card_filter/my_gallery/search/MyGallerySearch";
import GradeButton from "@feature/card_filter/my_gallery/option/GradeButton";
import GenreButton from "@feature/card_filter/my_gallery/option/GenreButton";
import MyCardListOnModalRender from "@feature/card_render/my_gallery_on_modal/MyCardListOnModalRender";
import FilterButton from "@feature/card_filter/mobile_filter/my_gallery/FilterButton";

import { useDispatch, useSelector } from "react-redux";
import { clearState } from "@feature/card_state_control/regist_on_modal/MarketModalStateSlice";
import { clearFilter } from "@feature/card_render/my_gallery/myGallerySlice";
import { CardRegistModal } from "@feature/card_state_control/regist/modals/CardRegistModal";

export const MyCardSelectOnModal = ({ onClickClose }) => {
  const dispatch = useDispatch();
  const { giveId } = useSelector((state) => state.marketModalState);

  const handleOnClickClose = () => {
    onClickClose();
    dispatch(clearState());
    dispatch(clearFilter());
  };

  const SelectMyCard = () => {
    return (
      <div className={style.modalContainer}>
        <img
          src={icClose}
          alt="닫기"
          className={style.closeIcon}
          onClick={handleOnClickClose}
        />
        <section className={style.insideScrollSection}>
          <header className={style.modalHeaderText}>마이갤러리</header>
          <section className={style.cardContainer}>
            <header className={style.cardHeader}>
              <p>나의 포토카드 판매하기</p>
            </header>
            <section className={style.sectionFilter}>
              <div className={style.searchBarSize}>
                <MyGallerySearch />
              </div>
              <div className={style.FilterBox}>
                <div className={style.dropDownBox}>
                  <GradeButton />
                  <GenreButton />
                </div>
              </div>
            </section>

            <section className={style.mobileSectionFilter}>
              <FilterButton />
              <div className={style.searchBarMobileSize}>
                <MyGallerySearch />
              </div>
            </section>

            <MyCardListOnModalRender />
          </section>
        </section>
      </div>
    );
  };

  return giveId ? (
    <CardRegistModal dataId={giveId} onClickClose={handleOnClickClose} />
  ) : (
    <SelectMyCard />
  );
};

export default MyCardSelectOnModal;
