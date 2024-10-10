import React, { useState } from "react";
import styles from "../styles/DropdownNormal.module.css";

const DEFAULT_SELECT_OPTION = "등급";

export function DropdownGrade() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(DEFAULT_SELECT_OPTION);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownNormal}>
      <button className={styles.normalButton} onClick={toggleDropdown}>
        {selectedOption} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li onClick={() => selectOption("COMMON")}>COMMON</li>
          <li onClick={() => selectOption("RARE")}>RARE</li>
          <li onClick={() => selectOption("SUPER RARE")}>SUPER RARE</li>
          <li onClick={() => selectOption("LEGENDARY")}>LEGENDARY</li>
        </ul>
      )}
    </div>
  );
}
