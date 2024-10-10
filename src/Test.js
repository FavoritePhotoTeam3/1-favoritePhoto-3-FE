import React from "react";
import { DropdownNormal } from "./components/DropdownNormal";
import "./Test.css";

const DEFAULT_SELECT_OPTION = "등급";
const DEFAULT_SELECT_OPTIONS = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];

function Test() {
  return (
    <div className="test">
      <div className="testContainer">
        <DropdownNormal
          title={DEFAULT_SELECT_OPTION}
          options={DEFAULT_SELECT_OPTIONS}
        />
      </div>
    </div>
  );
}

export default Test;
