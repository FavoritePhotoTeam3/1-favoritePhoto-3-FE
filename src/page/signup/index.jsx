import React from "react";
import style from "./index.module.css";
import mainLogo from "./assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignupEmailInput from "../../feature/signup/Input_email";
import { PrimaryBtn } from "../../components/common/btn/primaryBtn";
import { SignpuPasswordInput } from "../../feature/signup/input_password";
import { formReset } from "../../feature/signup/signupSlice";

const SignupPage = () => {
  const dispatch = useDispatch();

  const signupValidation = useSelector(
    (state) => state.signup.signupValidation
  );
  const { email, password, nickname } = useSelector(
    (state) => state.signup.signupForm
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (signupValidation.email && signupValidation.password) {
      alert("올바른 값을 입력해주세요.");
      dispatch(formReset());
    } else {
      dispatch(formReset());
      /**Todo signup hook */
      console.log(email, password, nickname);
    }
  };
  return (
    <div className={style.join_Wrapper}>
      <div className={style.join_Container}>
        <img className={style.join_mainLogo} src={mainLogo} alt="" />
        <form className={style.joinForm} onSubmit={onSubmit}>
          <SignupEmailInput />
          {/* <InputNickname onChange={handleChange} /> */}
          <SignpuPasswordInput />
          {/* <InputpasswordConfirm onChange={handleChange} /> */}
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
