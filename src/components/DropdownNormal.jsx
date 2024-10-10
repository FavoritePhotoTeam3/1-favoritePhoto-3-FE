import React, { useState } from "react";
import styles from "../styles/DropdownNormal.module.css";

import downArrow from "../images/icon_arrowdown.svg";
import filterIcon from "../images/icon_filter.svg";

export function DropdownNormal({ title = "Select", options = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownNormal}>
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
