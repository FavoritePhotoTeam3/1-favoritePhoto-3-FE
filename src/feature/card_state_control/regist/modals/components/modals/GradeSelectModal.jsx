import React, { forwardRef } from "react";
import style from "./ModalStyle.module.css"; // 모달 스타일

import { useDispatch } from "react-redux";
import { setExchangeGrade } from "../../registShopDataSlice";

export const GradeSelectModal = ({ anchorRef, closeModal }, ref) => {
  const dispatch = useDispatch();
  const option = [
    { showOption: "COMMON", setOption: "COMMON" },
    { showOption: "RARE", setOption: "RARE" },
    { showOption: "SUPER RARE", setOption: "SUPER RARE" },
    { showOption: "LEGENDARY", setOption: "LEGENDARY" },
  ];

  // 모달이 버튼 아래에 위치하도록
  const getModalPosition = () => {
    const buttonRect = anchorRef.current.getBoundingClientRect();
    return {
      width: buttonRect.width,
    };
  };

  const modalStyle = getModalPosition();

  const onOptionClick = (option) => {
    dispatch(setExchangeGrade(option.setOption));
    closeModal();
  };

  // 모달 jsx
  return (
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
    </ul>
  );
};

export default forwardRef(GradeSelectModal);
