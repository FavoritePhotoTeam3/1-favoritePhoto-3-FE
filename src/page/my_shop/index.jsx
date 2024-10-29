import React from "react";
import style from "@styles/CardPageStyle.module.css";
// import style from "./index.module.css"

import MySaleCardHeader from "@feature/header_action/MySaleCardHeader";
import MySaleCardRender from "@feature/card_render/my_shop/MySaleCardRender";
import MySaleCardTotalState from "@feature/my_card_total_state/my_shop/MySaleCardTotalState";

import MyShopSearch from "@feature/card_filter/my_shop/search/MyShopSearch";
import GradeButton from "@feature/card_filter/my_shop/option/GradeButton";
import GenreButton from "@feature/card_filter/my_shop/option/GenreButton";

export default function MyShop() {

  console.log("my_gallery page rendered");
  return (
    <main className={style.main}>
      <MySaleCardHeader />
      <MySaleCardTotalState />

      <section className={style.sectionFilter}>
        <div className={style.searchBarSize}>
          <MyShopSearch />
        </div>

        <div className={style.FilterBox}>
          <div className={style.dropDownBox}>
            <GradeButton />
            <GenreButton />
          </div>
        </div>
      </section>

      <MySaleCardRender />
    </main>
  );
}
