import React, { useState } from "react";
// import styles from "./SearchBar.module.css";
// import icSearch from "./assets/ic_search.png";

import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../shop_card/shopCardSlice";

import SearchBar from "../../../components/common/search_bar/SearchBar";

export const ShopSearch = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(
        "♣ 컴포넌트 로그 : onKeyDown 이벤트 실행 > inputValue:",
        inputValue
      );
      dispatch(setSearchTerm(inputValue));
    }
  };

  const handleOnClick = () => {
    console.log(
      "♣ 컴포넌트 로그 : onClick 이벤트 실행 > inputValue:",
      inputValue
    );
    dispatch(setSearchTerm(inputValue));
  };

  return (
    <SearchBar
      inputValue={inputValue}
      setInputValue={setInputValue}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
    />
  );

};

export default ShopSearch;
