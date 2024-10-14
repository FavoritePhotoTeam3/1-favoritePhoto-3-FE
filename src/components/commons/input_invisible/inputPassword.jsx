import "./inputPassword.css";
import invisible from "./assets/invisible.png";
import visible from "./assets/visible.png";
import { useState } from "react";

export const Inputpassword = ({ containrWidth, inputHeight }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: containrWidth,
        backgroundColor: "#171717",
      }}
    >
      <span className="input_password_title">비밀번호</span>
      <div className="input_password_container">
        <input
          className="input_password"
          type={isVisible ? "string" : "password"}
          placeholder="비밀번호을 입력해 주세요"
          style={{ height: inputHeight }}
        />
        <img
          onClick={() => {
            setIsVisible((prev) => !prev);
          }}
          className="password_invisible_img"
          src={isVisible ? visible : invisible}
          alt=""
        />
      </div>
    </div>
  );
};
export const InputpasswordInValid = ({ containrWidth, inputHeight }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: containrWidth,
        backgroundColor: "#171717",
      }}
    >
      <span className="input_password_title">비밀번호</span>
      <div className="input_password_container">
        <input
          className="input_password invalid"
          type={isVisible ? "string" : "password"}
          placeholder="비밀번호을 입력해 주세요"
          style={{ height: inputHeight }}
        />
        <img
          onClick={() => {
            setIsVisible((prev) => !prev);
          }}
          className="password_invisible_img"
          src={isVisible ? visible : invisible}
          alt=""
        />
      </div>
      <span className="input_password_valid">
        비밀번호가 일치하지 않습니다.
      </span>
    </div>
  );
};
