import style from "./inputPassword.module.css";
import invisible from "./assets/invisible.png";
import visible from "./assets/visible.png";
import { useState } from "react";
import { useSelector } from "react-redux";

export const InputPassword = ({ onChange, validation }) => {
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
        비밀번호를 입력해주세요.
      </span>
    </div>
  );
};
export const InputPasswordConfirm = ({ onChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const Signup = useSelector(
    (state) => state.signup.signupValidation.passwordConfirm
  );

  const isValid = Signup ? "" : "invalid";

  return (
    <div className={`${style.password_Wrapper} ${style.confirm}`}>
      <span className={style.input_password_title}>비밀번호 확인</span>
      <div className={style.input_password_container}>
        <input
          className={`${style.input_password} ${style[isValid]}`}
          type={isVisible ? "string" : "password"}
          placeholder="비밀번호을 한번 더 입력해 주세요"
          name="passwordConfirm"
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
