import React from "react";
import style from "./index.module.css";

import ShopCardRender from "../../feature/shop_card/ShopCardRender";
import MarketActionHeader from "../../feature/card_regist/MarketActionHeader";

import ShopSearch from "../../feature/shop_filter/search/ShopSearch";
import GradeButton from "../../feature/shop_filter/option/GradeButton";
import GenreButton from "../../feature/shop_filter/option/GenreButton";
import IsSaleButton from "../../feature/shop_filter/option/IsSaleButton";

export default function Market() {
  return (
    <main className={style.main} id="modal-root">
      <MarketActionHeader />

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
          <span> 낮은 가격순</span>
        </div>
      </section>

      <ShopCardRender />
    </main>
  );
}
