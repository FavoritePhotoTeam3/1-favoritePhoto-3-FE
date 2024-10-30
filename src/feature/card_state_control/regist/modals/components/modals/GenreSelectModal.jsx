import React, { useEffect, forwardRef } from "react";
import style from "./ModalStyle.module.css"; // 모달 스타일

import { useDispatch } from "react-redux";
import { setExchangeGenre } from "../../registShopDataSlice";

export const GenreSelectModal = ({ anchorRef, closeModal }, ref) => {

  const dispatch = useDispatch();
  const option = [
    { showOption: "풍경", setOption: "풍경" },
    { showOption: "여행", setOption: "여행" },
    { showOption: "자연", setOption: "자연" },
    { showOption: "도시", setOption: "도시" },
    { showOption: "동물", setOption: "동물" },
    { showOption: "기타", setOption: "기타" },
  ];

  
  // 모달이 버튼 아래에 위치하도록
  const getModalPosition = () => {
    const buttonRect = anchorRef.current.getBoundingClientRect();
    return {
      width: buttonRect.width,
    };
  };

  const modalStyle = getModalPosition();

  useEffect(() => {
    const handleWheel = (event) => {
      closeModal();
    };

    // 모달 요소에 스크롤 이벤트 추가
    const modalElement = ref.current;
    if (modalElement) {
      modalElement.addEventListener("wheel", handleWheel);
    }

    // 컴포넌트가 언마운트되거나 리스너를 해제할 때
    return () => {
      if (modalElement) {
        modalElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, [closeModal, ref]);

  const onOptionClick = (option) => {
    dispatch(setExchangeGenre(option.setOption));
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

export default forwardRef(GenreSelectModal);
