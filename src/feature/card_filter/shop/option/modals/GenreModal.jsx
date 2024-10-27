import React, { forwardRef } from "react";
import ReactDOM from "react-dom";
import style from "./ModalStyle.module.css"; // 모달 스타일

import { useDispatch } from "react-redux";
import { setFilterOptions } from "../../../../card_render/shop/shopCardSlice";

export const GenreModal = ({ anchorRef, onOptionSelect }, ref) => {
  const dispatch = useDispatch();
  const option = [
    { showOption: "ALL", param: undefined },
    { showOption: "풍경", param: "풍경" },
    { showOption: "여행", param: "여행" },
    { showOption: "자연", param: "자연" },
    { showOption: "도시", param: "도시" },
    { showOption: "우주", param: "우주" },
    { showOption: "기타", param: "기타" },
  ];

  // 모달이 버튼 아래에 위치하도록
  const getModalPosition = () => {
    const buttonRect = anchorRef.current.getBoundingClientRect();
    const modalwidth = 130
    return {
      top: buttonRect.bottom + window.scrollY + 5,
      left: buttonRect.right + window.scrollX - modalwidth,
      width: modalwidth
    };
  };

  const modalStyle = getModalPosition();

  const onOptionClick = (option) => {
    const dispatchOption = { key: "genre", value: option.param };
    dispatch(setFilterOptions(dispatchOption));
    onOptionSelect(option.showOption);
  };

  return ReactDOM.createPortal(
    <ul className={style.dropdownMenu} style={modalStyle} ref={ref}>
      {option.map((option, index) => (
        <li
          className={style.option}
          key={index}
          onClick={() => {
            console.log("Clicked option:", option);
            onOptionClick(option);
          }}
        >
          {option.showOption}
        </li>
      ))}
    </ul>,
    document.getElementById("root")
  );
};

export default forwardRef(GenreModal);
