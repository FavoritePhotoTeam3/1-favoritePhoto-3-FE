import React, { useEffect, useState } from "react";
import style from "@styles/CardDetailStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setMyCards } from "@feature/card_render/my_gallery/myGallerySlice";
import CardRegistShop from "@feature/card_state_control/regist/CardRegistShop";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [localCard, setLocalCard] = useState(null);

  const myCards = useSelector((state) =>
    state.myGallery.myCards.find((item) => item.id === parseInt(id))
  );

  useEffect(() => {
    if (myCards) {
      console.log("Redux에서 myCards를 찾았습니다:", myCards);
      localStorage.setItem("myCards", JSON.stringify(myCards));
      setLocalCard(myCards);
    } else {
      const storedCard = localStorage.getItem("myCards");
      if (storedCard) {
        const parsedCard = JSON.parse(storedCard);
        setLocalCard(parsedCard);
        console.log("sessionStorage에서 myCards를 불러왔습니다:", parsedCard);
        
        // Redux 상태 업데이트
        dispatch(setMyCards([parsedCard]));
        console.log("로컬 스토리지에서 불러온 데이터를 Redux 상태에 저장했습니다.");
      }
    }
  }, [myCards, dispatch]);
  
  // 로컬 카드가 없을 경우 데이터 없음 메시지 표시
  if (!localCard) {
    console.log("localCard가 없습니다. 데이터가 없음을 표시합니다.");
    return <p>데이터를 찾을 수 없습니다.</p>;
  }

  console.log("렌더링할 myCards 데이터:", localCard);

  return (
    <main className={style.main}>
      <header className={style.header}>
        <p className={style.headerText}>{localCard.name}</p>
      </header>
      <section className={style.cardDetail}>
        <picture className={style.imgWrapper}>
          <source
            type="image/webp"
            srcSet={localCard.imageURL}
            className={style.cardImage}
          />
          <img
            src={localCard.imageURL}
            alt="Card"
            className={style.cardImage}
          />
        </picture>

        <CardRegistShop data={localCard} />
      </section>
    </main>
  );
};

export default DetailPage;
