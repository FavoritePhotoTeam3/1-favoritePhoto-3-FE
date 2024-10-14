import "./secondary.css";

export const SecondaryBtn = ({ text, width, height }) => {
  return (
    <div style={{ display: "flex", width, height }}>
      <div className="secondary_btn_container">
        <span className="secondary_btn_text">{text}</span>
      </div>
    </div>
  );
};

export const SecondaryBtnRefuse = () => {
  return (
    <div style={{ display: "flex", width: "150px", height: "40px" }}>
      <div className="secondary_btn_container">
        <span className="secondary_btn_text refuse">거절</span>
      </div>
    </div>
  );
};
