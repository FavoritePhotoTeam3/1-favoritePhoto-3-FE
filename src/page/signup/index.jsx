import React, { useState } from "react";
import style from "./index.module.css";
import mainLogo from "./assets/logo.png";

import {
  Inputpassword,
  InputpasswordConfirm,
} from "../../components/commons/input_invisible/inputPassword";
import { PrimaryBtn } from "../../components/commons/btn/primaryBtn";

import { InputEmail } from "../../components/commons/input_normal/inputEmail";
import { InputNickname } from "../../components/commons/input_normal/inputNickname";
import { useDispatch, useSelector } from "react-redux";
import { formReset, signupInputAndVaildation } from "../../store/page/signup";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const dispatch = useDispatch();
  const signupForm = useSelector((state) => state.signup.signupForm);
  const signupValidation = useSelector(
    (state) => state.signup.signupValidation
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(signupInputAndVaildation({ name, value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (signupValidation.email && signupValidation.password) {
      alert("올바른 값을 입력해주세요.");
      dispatch(formReset());
    } else {
      dispatch(formReset());
      /**Todo signup hook */
      console.log(signupForm);
    }
  };
  return (
    <div className={style.join_Wrapper}>
      <div className={style.join_Container}>
        <img className={style.join_mainLogo} src={mainLogo} alt="" />
        <form className={style.joinForm} onSubmit={onSubmit}>
          <InputEmail onChange={handleChange} />
          <InputNickname onChange={handleChange} />
          <Inputpassword onChange={handleChange} />
          <InputpasswordConfirm onChange={handleChange} />
          <PrimaryBtn text="로그인" width="100%" height="60px" />
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
