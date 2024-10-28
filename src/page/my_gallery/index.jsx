import React from "react";
import style from "@styles/CardPageStyle.module.css";

import MyGalleryHeader from "@feature/header_action/MyGalleryHeader";
import MyCardGalleryRender from "@feature/card_render/my_gallery/MyCardGalleryRender";
import MyGalleryTotalState from "@feature/my_card_total_state/my_gallery/MyGalleryTotalState";

import MyGallerySearch from "@feature/card_filter/my_gallery/search/MyGallerySearch";
import GradeButton from "@feature/card_filter/my_gallery/option/GradeButton";
import GenreButton from "@feature/card_filter/my_gallery/option/GenreButton";

export default function MyGallery() {

  console.log("my_gallery page rendered");
  return (
    <main className={style.main}>
      <MyGalleryHeader />
      <MyGalleryTotalState />

      <section className={style.sectionFilter}>
        <div className={style.searchBarSize}>
          <MyGallerySearch />
        </div>

        <div className={style.FilterBox}>
          <div className={style.dropDownBox}>
            <GradeButton />
            <GenreButton />
          </div>
        </div>
      </section>

      <MyCardGalleryRender />
    </main>
  );
}
