import React, { useState } from "react";
import style from "./index.module.css";
import mainLogo from "./assets/logo.png";

import {
  Inputpassword,
  InputpasswordConfirm,
} from "../../components/commons/input_invisible/inputPassword";
import { PrimaryBtn } from "../../components/commons/btn/primaryBtn";
import { useNavigate } from "react-router-dom";
import { InputEmail } from "../../components/commons/input_normal/inputEmail";
import { InputNickname } from "../../components/commons/input_normal/inputNickname";
import { useAuth } from "../../context/authProvider";

const SignupPage = () => {
  const { signup } = useAuth();
  const nav = useNavigate();
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const [values, setValues] = useState({
    email: "",
    password: "",
    nickname: "",
    passwordConfirm: "",
  });
  const [emailValied, setEmailValied] = useState(true);
  const [passwordValied, setPasswordValied] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email" && !emailRegEx.test(value)) {
      setEmailValied(false);
    }
    if (name === "email" && emailRegEx.test(value)) {
      setEmailValied(true);
    }
    if (name === "passwordConfirm" && !(values.password === value)) {
      setPasswordValied(false);
    }
    if (name === "passwordConfirm" && values.password === value) {
      setPasswordValied(true);
    }

    setValues((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password || !emailValied) {
      alert("올바른 값을 입력해주세요.");
      setValues((prev) => ({
        ...prev,
        email: "",
        password: "",
        nickname: "",

        passwordConfirm: "",
      }));
    } else {
      const { email, password, nickname } = values;
      setValues((prev) => ({
        ...prev,
        email: "",
        password: "",
        nickname: "",

        passwordConfirm: "",
      }));
      signup({ email, password, nickname });
    }
  };
  return (
    <div className={style.join_Wrapper}>
      <div className={style.join_Container}>
        <img className={style.join_mainLogo} src={mainLogo} alt="" />
        <form className={style.joinForm} onSubmit={onSubmit}>
          <InputEmail
            onChange={handleChange}
            valid={emailValied}
            value={values.email}
          />
          <InputNickname onChange={handleChange} value={values.nickname} />
          <Inputpassword onChange={handleChange} value={values.password} />
          <InputpasswordConfirm
            onChange={handleChange}
            value={values.passwordConfirm}
            valid={passwordValied}
          />
          <PrimaryBtn text="로그인" width="100%" height="60px" />
        </form>
        <p className={style.join_textArea}>
          이미 최애의 포토가 회원이신가요?{" "}
          <span
            className={style.join}
            onClick={() => {
              nav("/login");
            }}
          >
            로그인하기
          </span>
        </p>
      </div>
    </div>
  );
};
export default SignupPage;
