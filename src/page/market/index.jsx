import React from "react";
import style from "./index.module.css";

import ShopCardRender from "../../feature/shop_card/ShopCardRender";
import MarketActionHeader from "../../feature/card_regist/MarketActionHeader";

export default function Market() {
  return (
    <main className={style.main}>
      <MarketActionHeader />

      <section className={style.sectionFilter}>
        <div className={style.searchBarSize}>
          <span> 서치바</span>
        </div>

        <div className={style.FilterBox}>
          <div className={style.dropDownBox}>
            <span> 등급</span>
            <span> 장르</span>
            <span> 뭐시깽이</span>
          </div>
          <span> 낮은 가격순</span>
        </div>
      </section>

      <ShopCardRender />
    </main>
  );
}
