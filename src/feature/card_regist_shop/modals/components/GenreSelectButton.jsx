import React, { useEffect, useRef, useState } from "react";
import style from "./DropdownStyle.module.css";
import downArrow from "../assets/icon_arrowdown.svg";

import { useSelector } from "react-redux";
import GenreSelectModal from "./modals/GenreSelectModal";

//initOption
//options
export const GenreSelectButton = () => {
  const { exchangeGenre } = useSelector((state) => state.registShopData);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        // event.target이 DOM 노드인지 확인하는 안전장치 추가
        if (!(event.target instanceof Node)) {
          return; // event.target이 Node가 아니면 더 이상 처리하지 않음
        }
  
        // buttonRef와 modalRef가 null일 경우를 모두 방어
        const isButtonClick =
          buttonRef.current && buttonRef.current.contains(event.target);
        const isModalClick =
          modalRef.current && modalRef.current.contains(event.target);
  
        // 버튼과 모달 외부를 클릭한 경우에만 모달 닫기
        if (!isButtonClick && !isModalClick) {
          console.log("버튼과 모달 외부를 클릭함");
          setIsOpen(false);
        }
      };
  
      const handleResize = () => {
        // 브라우저 크기 변경 시 모달 닫기
        setIsOpen(false);
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handleResize);
  
      console.log("이벤트 등록");
  
      // 클린업 함수: isOpen이 false가 되면 리스너 제거
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener("resize", handleResize);
        console.log("이벤트 제거됨");
      };
    }
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={style.borderButton}
        onClick={toggleOpen}
        ref={buttonRef}
      >
        <p>{exchangeGenre ? exchangeGenre : "등급을 선택해 주세요"}</p>
        <img
          src={downArrow}
          alt="Dropdown Icon"
          className={`${style.arrowIcon} ${isOpen ? style.menuOpen : ""}`}
        />
      </button>
      {isOpen && (
        <GenreSelectModal
          anchorRef={buttonRef} // 버튼 위치 참조
          ref={modalRef}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default GenreSelectButton;
