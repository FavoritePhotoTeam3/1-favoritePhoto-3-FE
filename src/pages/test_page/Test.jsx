import React, { useState } from "react";
import {
  DropdownNoneBorder,
  DropdownBorder,
} from "../../components/commons/dropdown_normal/DropdownNormal";
import { DropdownInput } from "../../components/commons/dropdown_input/DropdownInput";
import "./Test.css";
import ImgCardOriginal from "../../components/imgcard_original/ImgCardOriginal";
import ImgCardMy from "../../components/imgcard_my/ImgCardMy";
import ImgCardExchange from "../../components/imgcard_exchange/ImgCardExchange";

import defaultImg1 from "./assets/image1.svg";
import defaultImg2 from "./assets/image2.svg";
import { Title } from "../../components/commons/title/Title";
import PhotoExchange from "../../components/modals/photo_exchange/PhotoExchange";

const DEFAULT_SELECT_OPTION = "등급";
const DEFAULT_SELECT_OPTIONS = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
const DEFAULT_ORDER_OPTION = "낮은 가격순";
const DEFAULT_ORDER_OPTIONS = [
  "최신 순",
  "오래된 순",
  "높은 가격순",
  "낮은 가격순",
];
const imageCards = [
  {
    title: "스페인 여행",
    grade: "RARE",
    genre: "풍경",
    nickname: "프로여행러",
    price: 4,
    counts: 2,
    imageUrl: defaultImg1,
  },
  {
    title: "우리집 앞마당",
    grade: "COMMON",
    genre: "풍경",
    nickname: "미쓰쏘",
    price: 5,
    counts: 5,
    imageUrl: defaultImg2,
  },
];

function Test() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="test">
      {isModalOpen && (
        <PhotoExchange onClose={closeModal} imageCards={imageCards} />
      )}
      <div className="testContainer1"></div>
    </div>
  );
}

export default Test;
