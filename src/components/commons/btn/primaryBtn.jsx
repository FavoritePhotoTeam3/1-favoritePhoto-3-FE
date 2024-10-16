import "./primaryBtn.css";

export const PrimaryBtn = ({ text, width, height, onClick }) => {
  return (
    <button style={{ display: "flex", width, height }} onClick={onClick}>
      <div className="primary_btn_container">
        <span className="primary_btn_text">{text}</span>
      </div>
    </button>
  );
};

export const PrimaryBtnAlt = ({ text, width, height }) => {
  return (
    <div style={{ display: "flex", width, height }}>
      <div className="primary_btn_container alt">
        <span className="primary_btn_text alt">{text}</span>
      </div>
    </div>
  );
};

export const PrimaryBtnApprove = () => {
  return (
    <div style={{ display: "flex", width: "150px", height: "40px" }}>
      <div className="primary_btn_container">
        <span className="primary_btn_text approve">승인</span>
      </div>
    </div>
  );
};
