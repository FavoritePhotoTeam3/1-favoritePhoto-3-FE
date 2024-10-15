import React from "react";
import style from "./PhotoMarket.module.css";

import tempImg from "./mockImg/img.png";

// 컴포넌트
import { Nav } from "../components/nav/nav.jsx";
import SearchBar from "../components/commons/search_bar/SearchBar";
import { DropdownNoneBorder } from "../components/commons/dropdown_normal/DropdownNormal";
import ImgCardOriginal from "../components/imgcard_original/ImgCardOriginal.jsx";
import ImgCardMy from "../components/imgcard_my/ImgCardMy";

export default function PhotoMarket() {
  //목업
  const nickname = "유디";
  const totalPhotoCount = 100;
  const userGradeData = [
    {
      grade: "COMMON",
      count: 10,
    },
    {
      grade: "RARE",
      count: 10,
    },
    {
      grade: "SUPER RARE",
      count: 10,
    },
    {
      grade: "LEGENDARY",
      count: 10,
    },
  ];

  const gradeOption = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genreOption = ["여행", "풍경", "인물", "사물"];
  const saleOption = ["교환", "판매"];
  const soldStateOption = ["판매 중", "매진"];

  const cardData = () => {
    const data = [];
    const temp = {
      title: "임시",
      grade: "legendary",
      genre: "여행",
      nickname: "유디",
      price: 4,
      counts: 10,
      imageUrl: tempImg,
    };

    for (let i = 0; i < 20; i++) {
      data.push({ ...temp, id: i });
    }
    return data;
  };

  // 컴포넌트
  const FilterGrade = ({ data }) => {
    const gradeStyle = data.grade.toLowerCase().replace(/\s+/g, "");
    return (
      <div className={`${style.gradeBox} ${style[gradeStyle]}`}>
        <p className={style.gradeBoxText}>
          {`${data.grade.toUpperCase()} ${data.count}장`}
        </p>
      </div>
    );
  };

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main className={style.main}>
        <div className={style.container}>
          <header className={style.header}>
            <p className={style.headerText}>나의 판매 포토카드</p>
          </header>
          <section className={style.sectionUserState}>
            <header className={style.SaleState}>
              <p>{`${nickname}님이 판매 중인 포토카드`}</p>
              <p
                className={style.totalPhotoCount}
              >{`(${totalPhotoCount}장)`}</p>
            </header>
            <section className={style.gradeContainer}>
              {userGradeData.map((item) => {
                return <FilterGrade key={item.grade} data={item} />; // key 추가
              })}
            </section>
          </section>
          <section className={style.sectionFilter}>
            <div className={style.searchBarSize}>
              <SearchBar />
            </div>
            <div className={style.dropDownBox}>
              <DropdownNoneBorder title={"등급"} options={gradeOption} />
              <DropdownNoneBorder title={"장르"} options={genreOption} />
              <DropdownNoneBorder title={"판매방법"} options={saleOption} />
              <DropdownNoneBorder
                title={"매진여부"}
                options={soldStateOption}
              />
            </div>
          </section>
          <section className={style.sectionPhotoList}>
            {cardData().map((item) => {
              return (
                <div className={style.boxSize}>
                  <ImgCardMy
                    key={item.id}
                    title={item.title}
                    grade={item.grade}
                    genre={item.genre}
                    nickname={item.nickname}
                    price={item.price}
                    counts={item.counts}
                    imageUrl={item.imageUrl}
                  />
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
