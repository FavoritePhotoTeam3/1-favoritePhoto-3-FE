import React, { useState } from "react";
import style from "./index.module.css";
import mainLogo from "./assets/logo.png";

import { Inputpassword } from "../../components/commons/input_invisible/inputPassword";
import { PrimaryBtn } from "../../components/commons/btn/primaryBtn";
import { useNavigate } from "react-router-dom";
import { InputEmail } from "../../components/commons/input_normal/inputEmail";

const LoginPage = () => {
  const nav = useNavigate();
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [emailValied, setEmailValied] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (name === "email" && !emailRegEx.test(value)) {
      setEmailValied(false);
    }
    if (name === "email" && emailRegEx.test(value)) {
      setEmailValied(true);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password || !emailValied) {
      alert("올바른 값을 입력해주세요.");
      setValues((prev) => ({
        ...prev,
        email: "",
        password: "",
      }));
    } else {
      console.log(values);
      /**TODO API -> values */
    }
  };
  return (
    <div className={style.login_Wrapper}>
      <div className={style.login_Container}>
        <img className={style.login_mainLogo} src={mainLogo} alt="" />
        <form className={style.loginForm} onSubmit={onSubmit}>
          <InputEmail
            onChange={handleChange}
            valid={emailValied}
            value={values.email}
          />
          <Inputpassword onChange={handleChange} value={values.password} />
          <PrimaryBtn text="로그인" width="100%" height="60px" />
        </form>
        <p className={style.login_textArea}>
          최애의 포토가 처음이신가요?{" "}
          <span
            className={style.join}
            onClick={() => {
              nav("/join");
            }}
          >
            회원가입하기
          </span>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
