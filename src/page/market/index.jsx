import React from "react";
import style from "./index.module.css";

import ShopCardRender from "@feature/card_render/shop/ShopCardRender";
import MyPlaceHeader from "@feature/header_action/MyPlaceHeader";

import ShopSearch from "@feature/card_filter/shop/search/ShopSearch";
import GradeButton from "@feature/card_filter/shop/option/GradeButton";
import GenreButton from "@feature/card_filter/shop/option/GenreButton";
import IsSaleButton from "@feature/card_filter/shop/option/IsSaleButton";
import SortButton from "@feature/card_filter/shop/sort/SortButton";

export default function Market() {
  return (
    <main className={style.main}>
      <MyPlaceHeader />

      <section className={style.sectionFilter}>
        <div className={style.searchBarSize}>
          <ShopSearch />
        </div>

        <div className={style.FilterBox}>
          <div className={style.dropDownBox}>
            <GradeButton />
            <GenreButton />
            <IsSaleButton />
          </div>
          <SortButton />
        </div>
      </section>

      <ShopCardRender />
    </main>
  );
}
