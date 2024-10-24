import style from "./inputNickname.module.css";

export const InputNickname = ({
  onChange,
  validation,
  value,
  errorMessage,
}) => {
  const isValid = validation ? "" : "invalid";
  return (
    <div className={style.inputNickname_Container}>
      <span className={style.input_nickname_title}>닉네임</span>
      <input
        className={style.input_nickname}
        type="text"
        placeholder="닉네임을 입력해 주세요"
        name="nickname"
        value={value ?? ""}
        onChange={onChange}
      />
      <span className={`${style.input_nickname_valid} ${style[isValid]}`}>
        {errorMessage}
      </span>
    </div>
  );
};
