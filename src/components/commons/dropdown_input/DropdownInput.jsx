import { useEffect, useRef, useState } from "react";
import styles from "./DropdownInput.module.css";

import downArrow from "./assets/icon_arrowdown.svg";

export function DropdownInput({
  label,
  placeholder,
  options = [],
  desktopWidth,
  tabletWidth,
  mobileWidth,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
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

  const customStyles = {
    "--desktop-width": desktopWidth || "100%",
    "--tablet-width": tabletWidth || "100%",
    "--mobile-width": mobileWidth || "100%",
  };

  return (
    <div
      className={styles.dropdownContainer}
      ref={dropdownRef}
      style={customStyles}
    >
      <label className={styles.dropdownLabel}>{label}</label>

      <button className={styles.dropdownButton} onClick={toggleDropdown}>
        <span className={styles.selectedOption}>{selectedOption}</span>
        <img
          src={downArrow}
          alt="Dropdown Icon"
          className={`${styles.arrowIcon} ${isOpen ? styles.menuOpen : ""}`}
        />
      </button>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.dropdownItem}
              onClick={() => selectOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
