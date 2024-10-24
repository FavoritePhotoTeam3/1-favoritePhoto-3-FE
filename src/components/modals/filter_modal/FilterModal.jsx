import React, { useState } from "react";
import style from "./FilterModal.module.css";
import font from "../../../styles/fonts.module.css";

import icRefresh from "./assets/ic_refresh.png";
import icClose from "./assets/ic_close.png";

import PrimaryBtnAnother from "../../common/btn/PrimaryBtnAnother";

export default function Filter(props) {
  const menuList = [
    { label: "등급", key: "등급" },
    { label: "장르", key: "장르" },
    { label: "매진 여부", key: "매진 여부" },
  ];

  // 메모: 임시 데이터 > 추후 로직? 수정필요 > Count를 받아올 수 있도록
  // 메모: Count를 프론트에서 Sum 계산할지? API로 받아올 수 있을지?
  const gradeList = [
    { label: "COMMON", color: "common", count: 10 },
    { label: "RARE", color: "rare", count: 300 },
    { label: "SUPER RARE", color: "superRare", count: 150 },
    { label: "LEGENDARY", color: "legendary", count: 180 },
  ];

  const genreList = [
    { label: "여행", count: 30 },
    { label: "풍경", count: 500 },
    { label: "인물", count: 250 },
    { label: "사물", count: 340 },
  ];

  const salesStatus = [
    { label: "판매 중", count: 1000 },
    { label: "판매 완료", count: 800 },
  ];
  // 여기까지

  const [photoCount, setPhotoCount] = useState(0);
  const [activeMenu, setActiveMenu] = useState("등급");
  const [currentList, setCurrentList] = useState(gradeList);
  const [isGenre, setIsGenre] = useState(true);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);

    if (menu === "등급") {
      setCurrentList(gradeList);
      setIsGenre(true);
    } else if (menu === "장르") {
      setCurrentList(genreList);
      setIsGenre(false);
    } else if (menu === "매진 여부") {
      setCurrentList(salesStatus);
      setIsGenre(false);
    }
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
            onClick={() => setPhotoCount(item.count)}
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
        <img src={icRefresh} alt="새로고침" onClick={props.onClickRefresh} />
        <div className={style.btnSize}>
          <PrimaryBtnAnother
            text={
              photoCount ? `${photoCount}개 포토 보기` : "필터를 선택해주세요"
            }
            font={"small"}
          />
        </div>
      </section>
    </div>
  );
}
