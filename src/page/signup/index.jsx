import React from "react";
import style from "./index.module.css";
import mainLogo from "./assets/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignupEmailInput from "../../feature/signup/Input_email";
import { PrimaryBtn } from "../../components/common/btn/primaryBtn";
import {
  SignpuPasswordConfirmInput,
  SignpuPasswordInput,
} from "../../feature/signup/input_password";

import { SignpuNicknameInput } from "../../feature/signup/input_nickname";
import { useSignupQuery } from "../../feature/signup/signupQuery";

const SignupPage = () => {
  const { signup } = useSignupQuery();

  const signupValidation = useSelector(
    (state) => state.signup?.signupValidation
  );
  const loginForm = useSelector((state) => state.signup?.signupForm);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !signupValidation.email.validation ||
      !signupValidation.password.validation ||
      !signupValidation.nickname.validation
    ) {
      alert("올바른 값을 입력해주세요.");
    } else if (
      !signupValidation.email.isNotNull ||
      !signupValidation.password.isNotNull ||
      !signupValidation.nickname.isNotNull
    ) {
      alert("값을 입력해주세요");
    } else {
      const { email, password, nickname } = loginForm;
      signup({ email, password, nickname });
    }
  };
  return (
    <div className={style.join_Wrapper}>
      <div className={style.join_Container}>
        <img className={style.join_mainLogo} src={mainLogo} alt="" />
        <form className={style.joinForm} onSubmit={onSubmit}>
          <SignupEmailInput />
          <SignpuNicknameInput />
          <SignpuPasswordInput />
          <SignpuPasswordConfirmInput />
          <PrimaryBtn text="가입하기" width="100%" height="60px" />
        </form>
        <p className={style.join_textArea}>
          이미 최애의 포토가 회원이신가요?{" "}
          <Link to="/login" className={style.join}>
            로그인하기
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignupPage;
