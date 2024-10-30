import React from "react";
import style from "@styles/CardPageStyle.module.css";

import ShopCardRender from "@feature/card_render/shop/ShopCardRender";
import MyPlaceHeader from "@feature/header_action/MarketHeader";

import ShopSearch from "@feature/card_filter/shop/search/ShopSearch";
import GradeButton from "@feature/card_filter/shop/option/GradeButton";
import GenreButton from "@feature/card_filter/shop/option/GenreButton";
import IsSaleButton from "@feature/card_filter/shop/option/IsSaleButton";
import SortButton from "@feature/card_filter/shop/sort/SortButton";

import FilterButton from "@feature/card_filter/mobile_filter/shop/FilterButton";

export default function Market() {
  return (
    <main className={style.mainContainer}>
      <MyPlaceHeader />

      <section className={style.sectionMarketFilter}>
        <div className={style.searchBarSize}>
          <ShopSearch />
        </div>

        <div className={style.FilterBox}>
          <div className={style.marketDropDownBox}>
            <GradeButton />
            <GenreButton />
            <IsSaleButton />
          </div>
          <div className={style.marketFilterButton}>
            <FilterButton />
          </div>
          <SortButton />
        </div>
      </section>

      <section className={style.mobileMarketSectionFilter}>
        <div className={style.mobileSearchBarSection}>
          <ShopSearch />
        </div>

        <div className={style.mobileFilterSection}>
          <FilterButton />
          <SortButton />
        </div>
      </section>

      <ShopCardRender />
    </main>
  );
}
