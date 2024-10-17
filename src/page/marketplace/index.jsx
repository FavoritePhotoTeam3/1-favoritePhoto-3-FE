import React from "react";
import style from "./index.module.css";

//임시 이미지
import tempImg from "./assets/img.png";

// 컴포넌트
import { Nav } from "../../components/nav/nav.jsx";
import PrimaryBtnAnother from "../../components/commons/btn/PrimaryBtnAnother.jsx";
import SearchBar from "../../components/commons/search_bar/SearchBar.jsx";
import {
  DropdownNoneBorder,
  DropdownBorder,
} from "../../components/commons/dropdown_normal/DropdownNormal.jsx";
import ImgCardOriginal from "../../components/imgcard_original/ImgCardOriginal.jsx";

export default function PhotoMarket() {
  //목업
  const userData = {
    nickname: "유디",
    totalPhotoCount: 40,
    cardGrade: [
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
    ],
  };

  const gradeOption = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genreOption = ["여행", "풍경", "인물", "사물"];
  const soldStateOption = ["판매 중", "매진"];
  const priceOption = ["높은 가격 순", "낮은 가격 순"]

  const cardData = () => {
    const data = [];
    const temp = {
      title: "임시",
      grade: "legendary",
      genre: "여행",
      nickname: "유디",
      price: 4,
      counts: 9,
      maxCounts: 10,
      imageUrl: tempImg,
    };

    for (let i = 0; i < 20; i++) {
      data.push({ ...temp, id: i });
    }
    return data;
  };

  return (
    <>
      <nav>
        <Nav />
      </nav>

      <main className={style.main}>
        <div className={style.container}>
          <header className={style.header}>
            <p className={style.headerText}>마켓플레이스</p>
            <div className={style.headerBtnSize}>
              <PrimaryBtnAnother
                text={"나의 포토카드 판매하기"}
                font={"medium"}
                onclick={() => {}}
              />
            </div>
          </header>

          <section className={style.sectionFilter}>
            <div className={style.searchBarSize}>
              <SearchBar />
            </div>

            <div className={style.FilterBox}>
              <div className={style.dropDownBox}>
                <DropdownNoneBorder title={"등급"} options={gradeOption} />
                <DropdownNoneBorder title={"장르"} options={genreOption} />
                <DropdownNoneBorder
                  title={"매진여부"}
                  options={soldStateOption}
                />
              </div>
              <DropdownBorder title={"낮은 가격 순"} options={priceOption} />
            </div>
          </section>

          <section className={style.sectionPhotoList}>
            {cardData().map((item) => {
              return (
                  <ImgCardOriginal
                    key={item.id}
                    title={item.title}
                    grade={item.grade}
                    genre={item.genre}
                    nickname={item.nickname}
                    price={item.price}
                    counts={item.counts}
                    maxCounts={item.maxCounts}
                    imageUrl={item.imageUrl}
                  />
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
