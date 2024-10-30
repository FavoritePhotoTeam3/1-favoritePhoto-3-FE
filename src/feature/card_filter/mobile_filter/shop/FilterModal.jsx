import React, { useState } from "react";
import style from "@styles/ModalMobileFilter.module.css";
import font from "@styles/fonts.module.css";

import icRefresh from "../assets/ic_refresh.png";
import icClose from "../assets/ic_close.png";
import PrimaryBtnAnother from "@components/common/btn/PrimaryBtnAnother";

import { useDispatch } from "react-redux";
import { setFilterOptions, clearFilterOptionOnly } from "@feature/card_render/shop/shopCardSlice";



export default function Filter({ onClickClose, data}) {
  const dispatch = useDispatch();
  const totalCount = data?.totalCount || 0;
  const soldOutCount = data?.soldOutCount || 0;
  const notSoldOutCount = totalCount - soldOutCount;
  
  const menuList = [
    { label: "등급", key: "등급" },
    { label: "장르", key: "장르" },
    { label: "매진여부", key: "매진여부" },
  ];
  
  const genreOptions = [
    { key: "genre", showOption: "풍경", param: "풍경", count: data?.genreCount["풍경"] || 0  },
    { key: "genre", showOption: "여행", param: "여행", count: data?.genreCount["여행"] || 0  },
    { key: "genre", showOption: "자연", param: "자연", count: data?.genreCount["자연"] || 0  },
    { key: "genre", showOption: "도시", param: "도시", count: data?.genreCount["도시"] || 0  },
    { key: "genre", showOption: "동물", param: "동물", count: data?.genreCount["동물"] || 0  },
    { key: "genre", showOption: "기타", param: "기타", count: data?.genreCount["기타"] || 0  },
  ];
  
  const gradeOptions = [
    { key: "grade", showOption: "COMMON", param: "COMMON", colorStyle: "common", count: data?.gradeCount["COMMON"] || 0  },
    { key: "grade", showOption: "RARE", param: "RARE", colorStyle: "rare", count: data?.gradeCount["RARE"] || 0  },
    { key: "grade", showOption: "SUPER RARE", param: "SUPER RARE", colorStyle: "superrare", count: data?.gradeCount["SUPER RARE"] || 0  },
    { key: "grade", showOption: "LEGENDARY", param: "LEGENDARY", colorStyle: "legendary", count: data?.gradeCount["LEGENDARY"] || 0  },
  ];

  const soldOutOptions = [
    { key: "isSoldOut", showOption: "판매 중", param: "false", count: notSoldOutCount },
    { key: "isSoldOut", showOption: "매진", param: "true", count: soldOutCount },
  ];

  const [activeMenu, setActiveMenu] = useState("등급");
  const [activeOptionList, setActiveOptionList] = useState(genreOptions);
  const [curruntSelectOption, setCurrentSelectOption] = useState(null);



  const onMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === "등급") {
      setActiveOptionList(genreOptions);
    } else if (menu === "장르") {
      setActiveOptionList(gradeOptions);
    } else if (menu === "매진여부") {
      setActiveOptionList(soldOutOptions);
    }
  };

  const onOptionClick = (option) => {
    setCurrentSelectOption(option);
  };

  const handleResetFilters = () => {
    setActiveMenu("등급")
    setActiveOptionList(genreOptions);
  };

  const handleApplyFilters = () => {
    dispatch(clearFilterOptionOnly());
    if (!curruntSelectOption) {
      onClickClose();
    } else {
      const dispatchOption = { key: curruntSelectOption.key, value: curruntSelectOption.param };
      dispatch(setFilterOptions(dispatchOption));
      onClickClose();
    }
  };

  return (
    <div className={style.container}>
      <section className={style.header}>
        <p>필터</p>
        <img
          className={style.closeIcon}
          src={icClose}
          alt="닫기"
          onClick={onClickClose}
        />
      </section>

      <ul className={style.menu}>
        {menuList.map((item) => (
          <li
            key={item.key}
            className={`${style.menuItem} ${
              activeMenu === item.key ? style.menuActive : ""
            }`}
            onClick={() => onMenuClick(item.key)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <ul className={style.selectorBox}>
        {activeOptionList.map((option) => (
          <li
            key={option.showOption}
            className={style.list}
            onClick={() => onOptionClick(option)}
          >
            <p
              className={`${style.listText} ${option.key === "grade" ? font[option.colorStyle] : ""}`}
            >
              {option.showOption}
            </p>
            <p className={style.listText}>{`${option.count}개`}</p>
          </li>
        ))}
      </ul>

      <section className={style.btnBox}>
        <img src={icRefresh} alt="새로고침" onClick={() => handleResetFilters()} />
        <div className={style.btnSize}>
          <PrimaryBtnAnother
            text={
              curruntSelectOption
                ? `${curruntSelectOption.count}개 포토 보기` // 전체 개수
                : `${totalCount}개 포토 보기` // 필터링된 개수
            }
            font={"small"}
            onClick={() => handleApplyFilters()}
          />
        </div>
      </section>
    </div>
  );
}
