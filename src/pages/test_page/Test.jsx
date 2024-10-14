import React from "react";
import {
  DropdownNoneBorder,
  DropdownBorder,
} from "../../components/commons/dropdown_normal/DropdownNormal";
import { DropdownInput } from "../../components/commons/dropdown_input/DropdownInput";
import "./Test.css";

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
};

function Test() {
  return (
    <div className="test">
      <DropdownInput
        label={DEFAULT_SELECT_OPTION}
        placeholder={`${DEFAULT_SELECT_OPTION}을 선택해주세요`}
        options={DEFAULT_SELECT_OPTIONS}
        desktopWidth="400px"
        tabletWidth="300px"
        mobileWidth="200px"
        desktopHeight="70px"
        tabletHeight="60px"
        mobileHeight="50px"
      />
      <div className="testContainer1"></div>
    </div>
  );
}

export default Test;
