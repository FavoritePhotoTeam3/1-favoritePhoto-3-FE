import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Dropdown.module.css";

import downArrow from "./assets/icon_arrowdown.svg";

//initOption
//options
export const Dropdown = (initOption, optionList) => {
  const MeRef = useRef(null);
  const [currentOption, setCurrentOption] = useState(initOption);
  const [isOpen, setIsOpen] = useState(false);

  // 드롭다운 외부 클릭 시 메뉴 닫기 이벤트를 리스너로 등록
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (MeRef.current && !MeRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const optionClickEvent = (option) => {
    setCurrentOption(option);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const optionModal = () => {
    return ReactDOM.createPortal(
      <ul className={styles.dropdownMenu}>
        {optionList.map((option) => (
          <li key={option} onClick={optionClickEvent(option)}>
            {option}
          </li>
        ))}
      </ul>,
      document.getElementById("modal-root")
    );
  };

  return (
    <>
      <button className={styles.normalButton} onClick={toggleOpen} ref={MeRef}>
        <p>{currentOption}</p>
        <img
          src={downArrow}
          alt="Dropdown Icon"
          className={`${styles.arrowIcon} ${isOpen ? styles.menuOpen : ""}`}
        />
      </button>
      {isOpen && optionModal()}
    </>
  );
};

export default Dropdown;

// export function DropdownBorder({
//   title = "Select",
//   options = [],
//   desktopWidth = "100%",
//   tabletWidth = "100%",
//   mobileWidth = "100%",
//   desktopHeight = "50px",
//   tabletHeight = "45px",
//   mobileHeight = "35px",
//   onSelect,
// }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(title);

//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const selectOption = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//     if (onSelect) {
//       onSelect(option);
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const customStyles = {
//     "--desktop-width": desktopWidth,
//     "--tablet-width": tabletWidth,
//     "--mobile-width": mobileWidth,
//     "--desktop-height": desktopHeight,
//     "--tablet-height": tabletHeight,
//     "--mobile-height": mobileHeight,
//   };

//   return (
//     <div
//       className={styles.borderedDropdown}
//       ref={dropdownRef}
//       style={customStyles}
//     >
//       <button className={styles.borderedButton} onClick={toggleDropdown}>
//         <span className={styles.buttonText}>{selectedOption}</span>
//         <img
//           src={downArrow}
//           alt="Dropdown Icon"
//           className={`${styles.arrowIcon} ${isOpen ? styles.menuOpen : ""}`}
//         />
//       </button>
//       {isOpen && (
//         <ul className={`${styles.dropdownMenu} ${styles.bordered}`}>
//           {options.map((option, index) => (
//             <li key={index} onClick={() => selectOption(option)}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
