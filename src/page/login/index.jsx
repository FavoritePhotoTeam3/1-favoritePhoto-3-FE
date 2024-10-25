import React from "react";
import style from "./index.module.css";
import mainLogo from "./assets/logo.png";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LoginEmailInput from "../../feature/login/Input_email";
import LoginPasswordInput from "../../feature/login/input_password";
import { formReset } from "../../feature/login/loginSlice";
import { useLoginQuery } from "../../feature/login/loginQuery";
import { PrimaryBtn } from "../../components/common/btn/primaryBtn";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { login } = useLoginQuery();

  const loginValidation = useSelector((state) => state.login?.loginValidation);
  const loginForm = useSelector((state) => state.login?.loginForm);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !loginValidation?.email.validation ||
      !loginValidation?.password.validation
    ) {
      alert("올바른 값을 입력해주세요.");
      dispatch(formReset());
    } else if (
      !loginValidation?.email.isNotNull ||
      !loginValidation?.password.isNotNull
    ) {
      alert("값을 입력해주세요");
      dispatch(formReset());
    } else {
      login({ ...loginForm });
      dispatch(formReset());
    }
  };
  return (
    <div className={style.login_Container}>
      <img className={style.login_mainLogo} src={mainLogo} alt="" />
      <form className={style.loginForm} onSubmit={onSubmit}>
        <LoginEmailInput />
        <LoginPasswordInput />
        <PrimaryBtn text="로그인" width="100%" height="60px" />
      </form>
      <p className={style.login_textArea}>
        최애의 포토가 처음이신가요?{" "}
        <Link to="/signup" className={style.join}>
          회원가입하기
        </Link>
      </p>
    </div>
  );
};
export default LoginPage;
