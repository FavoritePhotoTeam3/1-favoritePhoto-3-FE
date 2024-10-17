import React from "react";
import style from "./CardGradeByUser.module.css";

const CardGradeByUser = ({ data }) => {
  const gradeStyle = data.grade.toLowerCase().replace(/\s+/g, "");
  return (
    <div className={`${style.gradeBox} ${style[gradeStyle]}`}>
      <p className={style.gradeBoxText}>
        {`${data.grade.toUpperCase()} ${data.count}장`}
      </p>
    </div>
  );
};

export default CardGradeByUser;