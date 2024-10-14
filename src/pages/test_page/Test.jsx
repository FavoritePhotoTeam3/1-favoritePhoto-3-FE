import React from "react";
import {
  DropdownNoneBorder,
  DropdownBorder,
} from "../../components/commons/dropdown_normal/DropdownNormal";
import { DropdownInput } from "../../components/commons/dropdown_input/DropdownInput";
import "./Test.css";
import ImgCardOriginal from "../../components/imgcard_original/ImgCardOriginal";
import ImgCardMy from "../../components/imgcard_my/ImgCardMy";
import ImgCardExchange from "../../components/imgcard_exchange/ImgCardExchange";

import defaultImg from "./assets/image1.svg";
import { Title } from "../../components/commons/title/Title";

const DEFAULT_SELECT_OPTION = "등급";
const DEFAULT_SELECT_OPTIONS = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
const DEFAULT_ORDER_OPTION = "낮은 가격순";
const DEFAULT_ORDER_OPTIONS = [
  "최신 순",
  "오래된 순",
  "높은 가격순",
  "낮은 가격순",
];
const testCardData = {
  title: "How Far I'll Go",
  grade: "SUPER RARE",
  genre: "풍경",
  nickname: "랍스타",
  price: 4,
  description:
    "스페인 여행 사진도 좋은데.. 우리집 앞마당 포토카드와 교환하고 싶습니다! 스페인 여행 사진도 좋은데.. 우리집 앞마당 포토카드와 교환하고 싶습니다!",
  counts: 1,
  maxCounts: 5,
  imageUrl: defaultImg,
};

function Test() {
  return (
    <div className="test">
      <Title title={"포토카드 생성하기"} />
      <div className="testContainer1"></div>
    </div>
  );
}

export default Test;
