import style from "./inputEmail.module.css";

export const InputEmail = ({ onChange, validation, value, errorMessage }) => {
  const isValid = validation ? "" : "invalid";

  return (
    <div className={style.inputEmail_Container}>
      <span className={style.input_email_title}>이메일</span>
      <input
        className={`${style.input_email} ${style[isValid]}`}
        type="text"
        placeholder="이메일을 입력해 주세요"
        name="email"
        value={value ?? ""}
        onChange={onChange}
      />
      <span className={`${style.input_email_valid} ${style[isValid]}`}>
        {errorMessage ? errorMessage : "이메일 형식이 아닙니다."}
      </span>
    </div>
  );
};
