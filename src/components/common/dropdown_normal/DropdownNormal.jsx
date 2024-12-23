// 테두리 없는 dropdown: DropdownNoneBorder
// 테두리 있는 dropdown: DropdownBorder
import React, { useEffect, useRef, useState } from "react";
import styles from "./DropdownNormal.module.css";

import downArrow from "./assets/icon_arrowdown.svg";
import filterIcon from "./assets/icon_filter.svg";

export function DropdownNoneBorder({
  title = "Select",
  options = [],
  desktopWidth = "100%",
  tabletWidth = "100%",
  mobileWidth = "35px",
  desktopHeight = "60px",
  tabletHeight = "55px",
  mobileHeight = "35px",
  onSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
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

  const customStyles = {
    "--desktop-width": desktopWidth,
    "--tablet-width": tabletWidth,
    "--mobile-width": mobileWidth,
    "--desktop-height": desktopHeight,
    "--tablet-height": tabletHeight,
    "--mobile-height": mobileHeight,
  };

  return (
    <div
      className={styles.dropdownNormal}
      ref={dropdownRef}
      style={customStyles}
    >
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

export function DropdownBorder({
  title = "Select",
  options = [],
  desktopWidth = "100%",
  tabletWidth = "100%",
  mobileWidth = "100%",
  desktopHeight = "50px",
  tabletHeight = "45px",
  mobileHeight = "35px",
  onSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
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

  const customStyles = {
    "--desktop-width": desktopWidth,
    "--tablet-width": tabletWidth,
    "--mobile-width": mobileWidth,
    "--desktop-height": desktopHeight,
    "--tablet-height": tabletHeight,
    "--mobile-height": mobileHeight,
  };

  return (
    <div
      className={styles.borderedDropdown}
      ref={dropdownRef}
      style={customStyles}
    >
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
