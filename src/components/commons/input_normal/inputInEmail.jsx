import "./inputEmail.css";

export const InputEmail = ({ containrWidth, inputHeight }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: containrWidth,
        backgroundColor: "#171717",
      }}
    >
      <span className="input_email_title">이메일</span>
      <input
        className="input_email"
        type="email"
        placeholder="이메일을 입력해 주세요"
        style={{ height: inputHeight }}
      />
    </div>
  );
};
export const InputEmailInValid = ({ containrWidth, inputHeight }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: containrWidth,
        backgroundColor: "#171717",
      }}
    >
      <span className="input_email_title">이메일</span>
      <input
        className="input_email invalid"
        type="email"
        placeholder="이메일을 입력해 주세요"
        style={{ height: inputHeight }}
      />
      <span className="input_email_valid">이메일 형식이 아닙니다.</span>
    </div>
  );
};
