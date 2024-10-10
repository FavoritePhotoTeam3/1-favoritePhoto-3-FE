// 테두리 없는 dropdown: DropdownNoneBorder
// 테두리 있는 dropdown: DropdownBorder
import React, { useEffect, useRef, useState } from "react";
import styles from "./DropdownNormal.module.css";

import downArrow from "../../images/icon_arrowdown.svg";
import filterIcon from "../../images/icon_filter.svg";

export function DropdownNoneBorder({ title = "Select", options = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setIsOpen(false);
  };

  // 드롭다운 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdownNormal} ref={dropdownRef}>
      <button className={styles.normalButton} onClick={toggleDropdown}>
        {/* 텍스트 (데스크탑, 태블릿) */}
        <span className={styles.buttonText}>{selectedOption}</span>
        {/* 아이콘 (모바일) */}
        <div className={styles.buttonIcon}>
          <img src={filterIcon} alt="Dropdown Icon" />
        </div>

        <img
          src={downArrow}
          alt="Dropdown Icon"
          className={`${styles.arrowIcon} ${isOpen ? styles.menuOpen : ""}`}
        />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option, index) => (
            <li key={index} onClick={() => selectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function DropdownBorder({ title = "Select", options = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.borderedDropdown} ref={dropdownRef}>
      <button className={styles.borderedButton} onClick={toggleDropdown}>
        <span className={styles.buttonText}>{selectedOption}</span>
        <img
          src={downArrow}
          alt="Dropdown Icon"
          className={`${styles.arrowIcon} ${isOpen ? styles.menuOpen : ""}`}
        />
      </button>
      {isOpen && (
        <ul className={`${styles.dropdownMenu} ${styles.bordered}`}>
          {options.map((option, index) => (
            <li key={index} onClick={() => selectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
