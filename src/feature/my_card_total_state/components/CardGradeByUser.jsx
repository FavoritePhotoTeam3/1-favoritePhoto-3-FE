import React from "react";
import style from "./CardGradeByUser.module.css";

const CardGradeByUser = ({ grade, count }) => {
  const gradeStyle = grade.toLowerCase().replace(/\s+/g, "");
  return (
    <div className={`${style.gradeBox} ${style[gradeStyle]}`}>
      <p className={style.gradeBoxText}>
        {`${grade.toUpperCase()} ${count}장`}
      </p>
    </div>
  );
};

export default CardGradeByUser;