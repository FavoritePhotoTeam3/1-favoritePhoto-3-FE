import React from "react";
import style from "./index.module.css";

import ShopCardRender from "../../feature/shop_card/ShopCardRender";
import MarketActionHeader from "../../feature/card_regist/MarketActionHeader";

export default function Market() {
  return (
    <main className={style.container}>
      <MarketActionHeader />
      <ShopCardRender />
    </main>
  );
};