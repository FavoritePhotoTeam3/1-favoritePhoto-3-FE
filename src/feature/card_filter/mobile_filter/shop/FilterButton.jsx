import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import style from "@styles/PageFilterOptionButton.module.css";
import icFillter from "../assets/icon_filter.svg";

import FilterModal from "./FilterModal";
import { useGetOptionCountQuery } from "./useGetOptionCountQuery";

export const FilterButton = () => {
  const { data } = useGetOptionCountQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // 모달이 열리면 body 스크롤 비활성화
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 활성화
    };
  }, [isModalOpen]);

  const OpenFilterModal = () => {
    return ReactDOM.createPortal(
      <section className={style.outSideMobileFilter}>
        <FilterModal onClickClose={toggleModal} data={data}/>
      </section>,
      document.getElementById("root")
    );
  };

  return (
    <>
      {isModalOpen && <OpenFilterModal />}
      <button className={style.maketFilterButton} onClick={toggleModal}>
        <img src={icFillter} alt="" />
      </button>
    </>
  );
};

export default FilterButton;
