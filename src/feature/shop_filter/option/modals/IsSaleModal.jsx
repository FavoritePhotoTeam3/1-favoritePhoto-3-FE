import React, { forwardRef } from "react";
import ReactDOM from "react-dom";
import style from "./ModalStyle.module.css"; // 모달 스타일

import { useDispatch } from "react-redux";
import { setFilterOptions } from "../../../shop_card/shopCardSlice";

export const IsSaleModal = ({ anchorRef, onOptionSelect }, ref) => {
  const dispatch = useDispatch();
  const option = [
    { showOption: "ALL", param: undefined },
    { showOption: "판매 중", param: "false" },
    { showOption: "매진", param: "true" },
  ];

  // 모달이 버튼 아래에 위치하도록
  const getModalPosition = () => {
    const buttonRect = anchorRef.current.getBoundingClientRect();
    return {
      top: buttonRect.bottom + window.scrollY,
      left: buttonRect.left + window.scrollX,
    };
  };

  const modalStyle = getModalPosition();

  const onOptionClick = (option) => {
    const dispatchOption = { key: "isSoldOut", value: option.param };
    dispatch(setFilterOptions(dispatchOption));
    onOptionSelect(option.showOption);
  };

  // 모달 jsx
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
    document.getElementById("modal-root")
  );
};

export default forwardRef(IsSaleModal);
