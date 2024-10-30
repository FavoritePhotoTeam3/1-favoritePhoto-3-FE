import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setKeyword } from "@feature/card_render/my_gallery/myGallerySlice";

import SearchBar from "@components/common/search_bar/SearchBar";

export const ShopSearch = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleOnKeyDown = (e) => {
      dispatch(setKeyword(inputValue));
  };

  const handleOnClick = () => {
    dispatch(setKeyword(inputValue));
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
