import React, { useState } from "react";
import styles from "../styles/DropdownNormal.module.css";

import downArrow from "../images/icon_arrowdown.svg";

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
        {selectedOption}
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
