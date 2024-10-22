import { useEffect, useRef, useState } from "react";
import styles from "./DropdownInput.module.css";

import downArrow from "./assets/icon_arrowdown.svg";

export function DropdownInput({
  label,
  placeholder,
  options = [],
  desktopWidth = "100%",
  tabletWidth = "100%",
  mobileWidth = "100%",
  desktopHeight = "60px",
  tabletHeight = "55px",
  mobileHeight = "55px",
  value,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || placeholder);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);

    if (onChange) {
      onChange(option);
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

  useEffect(() => {
    if (value) {
      setSelectedOption(value);
    }
  }, [value]);

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
