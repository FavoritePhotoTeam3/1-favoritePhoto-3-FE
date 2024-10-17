import React from "react";
import style from "./index.module.css";

//임시 이미지
import tempImg from "./assets/img.png";

// 컴포넌트
import { Nav } from "../../components/nav/nav.jsx";
import CardGradeByUser from "../../components/card_held_by_user_state/CardGradeByUser.jsx";
import SearchBar from "../../components/commons/search_bar/SearchBar.jsx";
import { DropdownNoneBorder } from "../../components/commons/dropdown_normal/DropdownNormal.jsx";
import ImgCardMy from "../../components/imgcard_my/ImgCardMy.jsx";

export default function MyMarket() {
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
      counts: 9,
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
            <p className={style.headerText}>나의 판매 포토카드</p>
          </header>

          <section className={style.sectionUserState}>
            <header className={style.SaleState}>
              <p>{`${userData.nickname}님이 판매 중인 포토카드`}</p>
              <p
                className={style.totalPhotoCount}
              >{`(${userData.totalPhotoCount}장)`}</p>
            </header>
            <section className={style.gradeContainer}>
              {userData.cardGrade.map((item) => {
                return <CardGradeByUser key={item.grade} data={item} />; // key 추가
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
