import React, { useState } from "react";
import style from "@styles/ModalMobileFilter.module.css";
import font from "@styles/fonts.module.css";
import { useDispatch, useSelector } from "react-redux";
import icRefresh from "../assets/ic_refresh.png";
import icClose from "../assets/ic_close.png";

import PrimaryBtnAnother from "@components/common/btn/PrimaryBtnAnother";

export default function Filter(props) {
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState("등급");

  const menuList = [
    { label: "등급", key: "등급" },
    { label: "장르", key: "장르" },
  ];

  const genreOptions = [
    { showOption: "ALL", param: undefined },
    { showOption: "풍경", param: "풍경" },
    { showOption: "여행", param: "여행" },
    { showOption: "자연", param: "자연" },
    { showOption: "도시", param: "도시" },
    { showOption: "동물", param: "동물" },
    { showOption: "기타", param: "기타" },
  ];

  const gradeOptions = [
    { showOption: "ALL", param: undefined },
    { showOption: "COMMON", param: "COMMON" },
    { showOption: "RARE", param: "RARE" },
    { showOption: "SUPER RARE", param: "SUPER RARE" },
    { showOption: "LEGENDARY", param: "LEGENDARY" },
  ];

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);

    if (menu === "등급") {
      setCurrentList(gradeList);
      setIsGenre(true);
    } else if (menu === "장르") {
      setCurrentList(genreList);
      setIsGenre(false);
    }
  };

  // 옵션 클릭 핸들러
  const handleOptionClick = (item) => {
    if (activeMenu === "등급") {
      dispatch(setGradeFilter(item.label));
    } else if (activeMenu === "장르") {
      dispatch(setGenreFilter(item.label));
    }
    updateFilteredCount(item.label, activeMenu === "등급");
  };

  const updateFilteredCount = (filterValue, isGrade) => {
    const count = isGrade ? gradeCounts[filterValue] : genreCounts[filterValue];
    dispatch(setFilteredCount(count || 0));
  };

  // 필터 초기화 핸들러
  const handleResetFilters = () => {
    dispatch(setGradeFilter(""));
    dispatch(setGenreFilter(""));
    dispatch(setFilteredCount(totalCount));
  };

  // 필터 적용 핸들러
  const handleApplyFilters = () => {
    props.onClickClose(); // 모달 닫기
  };

  return (
    <div className={style.container}>
      <section className={style.header}>
        <p>필터</p>
        <img
          className={style.closeIcon}
          src={icClose}
          alt="닫기"
          onClick={props.onClickClose}
        />
      </section>

      <ul className={style.menu}>
        {menuList.map((item) => (
          <li
            key={item.key}
            className={`${style.menuItem} ${
              activeMenu === item.key ? style.menuActive : ""
            }`}
            onClick={() => handleMenuClick(item.key)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <ul className={style.selectorBox}>
        {currentList.map((item) => (
          <li
            key={item.label}
            className={style.list}
            onClick={() => handleOptionClick(item)}
          >
            <p
              className={`${style.listText} ${isGenre ? font[item.color] : ""}`}
            >
              {item.label}
            </p>
            <p className={style.listText}>{`${item.count}개`}</p>
          </li>
        ))}
      </ul>

      <section className={style.btnBox}>
        <img src={icRefresh} alt="새로고침" onClick={handleResetFilters} />
        <div className={style.btnSize}>
          <PrimaryBtnAnother
            text={
              filteredCount === totalCount
                ? `${totalCount}개 포토 보기` // 전체 개수
                : `${filteredCount}개 포토 보기` // 필터링된 개수
            }
            font={"small"}
            onClick={handleApplyFilters}
          />
        </div>
      </section>
    </div>
  );
}
