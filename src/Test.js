import React from "react";
import {
  DropdownNoneBorder,
  DropdownBorder,
} from "./components/DropdownNormal";
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

function Test() {
  return (
    <div className="test">
      <div className="testContainer">
        <DropdownNoneBorder
          title={DEFAULT_SELECT_OPTION}
          options={DEFAULT_SELECT_OPTIONS}
        />
        <DropdownBorder
          title={DEFAULT_ORDER_OPTION}
          options={DEFAULT_ORDER_OPTIONS}
        />
      </div>
    </div>
  );
}

export default Test;
