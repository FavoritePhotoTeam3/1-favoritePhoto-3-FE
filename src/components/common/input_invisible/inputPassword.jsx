import style from "./inputPassword.module.css";
import invisible from "./assets/invisible.png";
import visible from "./assets/visible.png";
import { useState } from "react";

export const InputPassword = ({
  onChange,
  validation,
  value,
  errorMessage = null,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const isValid = validation ? "" : "invalid";

  return (
    <div className={style.password_Wrapper}>
      <span className={style.input_password_title}>비밀번호</span>
      <div className={style.input_password_container}>
        <input
          className={`${style.input_password} ${style[isValid]}`}
          type={isVisible ? "string" : "password"}
          placeholder="비밀번호을 입력해 주세요"
          name="password"
          value={value ?? ""}
          onChange={onChange}
        />
        <img
          onClick={() => {
            setIsVisible((prev) => !prev);
          }}
          className={style.password_invisible_img}
          src={isVisible ? visible : invisible}
          alt=""
        />
      </div>
      <span className={`${style.input_password_valid} ${style[isValid]}`}>
        {errorMessage
          ? errorMessage
          : "영문, 숫자, 특수기호, 조합 8자리 이상을 입력해주세요"}
      </span>
    </div>
  );
};
export const InputPasswordConfirm = ({ onChange, validation, value }) => {
  const [isVisible, setIsVisible] = useState(false);

  const isValid = validation ? "" : "invalid";

  return (
    <div className={`${style.password_Wrapper} ${style.confirm}`}>
      <span className={style.input_password_title}>비밀번호 확인</span>
      <div className={style.input_password_container}>
        <input
          className={`${style.input_password} ${style[isValid]}`}
          type={isVisible ? "string" : "password"}
          placeholder="비밀번호을 한번 더 입력해 주세요"
          name="passwordConfirm"
          value={value ?? ""}
          onChange={onChange}
        />
        <img
          onClick={() => {
            setIsVisible((prev) => !prev);
          }}
          className={style.password_invisible_img}
          src={isVisible ? visible : invisible}
          alt=""
        />
      </div>
      <span className={`${style.input_password_valid} ${style[isValid]}`}>
        비밀번호가 일치하지 않습니다.
      </span>
    </div>
  );
};
