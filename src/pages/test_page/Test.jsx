import React from "react";
import styles from "./Test.module.css";

import TextArea from "../../components/commons/text_area/TextArea";
import SearchBar from "../../components/commons/search_bar/SearchBar";

export default function Test() {
  return (
    <div className={styles.page}>
      <TextArea label="테스트" placeholder="테스트2" />
      <SearchBar />
    </div>
  );
}
