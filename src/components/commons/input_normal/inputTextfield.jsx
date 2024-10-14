import "./inputTextfield.css";
export const Textfield = ({ containrWidth, inputHeight }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: containrWidth,
        backgroundColor: "#171717",
      }}
    >
      <span className="input_textfield_title">포토카드 이름</span>
      <input
        className="input_textfield"
        type="email"
        placeholder="포토카드 이름을 입력해 주세요"
        style={{ height: inputHeight }}
      />
    </div>
  );
};
export const TextfieldInValid = ({ containrWidth, inputHeight }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: containrWidth,
        backgroundColor: "#171717",
      }}
    >
      <span className="input_textfield_title">포토카드 이름</span>
      <input
        className="input_textfield invalid"
        type="email"
        placeholder="이메일을 입력해 주세요"
        style={{ height: inputHeight }}
      />
      <span className="input_textfield_valid">
        포토카드 이름은 최대 30자까지 입력 가능합니다
      </span>
    </div>
  );
};
