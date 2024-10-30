import React from "react";
import style from "@styles/CardPageStyle.module.css";

import MySaleCardHeader from "@feature/header_action/MySaleCardHeader";
import MySaleCardRender from "@feature/card_render/my_shop/MySaleCardRender";
import MySaleCardTotalState from "@feature/my_card_total_state/my_shop/MySaleCardTotalState";

import MyShopSearch from "@feature/card_filter/my_shop/search/MyShopSearch";
import GradeButton from "@feature/card_filter/my_shop/option/GradeButton";
import GenreButton from "@feature/card_filter/my_shop/option/GenreButton";
import SaleTypeButton from "@feature/card_filter/my_shop/option/SaleTypeButton";
import IsSaleButton from "@feature/card_filter/my_shop/option/IsSaleButton";

import FilterButton from "@feature/card_filter/mobile_filter/my_shop/FilterButton";

export default function MyShop() {
  return (
    <main className={style.mainContainer}>
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
            <SaleTypeButton />
            <IsSaleButton />
          </div>
        </div>
      </section>

      <section className={style.mobileSectionFilter}>
        <FilterButton />
        <div className={style.searchBarMobileSize}>
          <MyShopSearch />
        </div>
      </section>

      <MySaleCardRender />
    </main>
  );
}
