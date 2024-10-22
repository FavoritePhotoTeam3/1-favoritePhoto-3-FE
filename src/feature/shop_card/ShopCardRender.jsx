import React, { useMemo, useEffect } from "react";
import style from "./ShopCardRender.module.css";
import SaleCard from "./components/card/SaleCard";

import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setCards } from '../../feature/shop_card/shopCardSlice';

import { useGetCardQuery } from "../../hooks/shop_card/useGetCardQuery";

import { useInfiniteScroll } from "../../hooks/shop_card/useInfiniteScroll";


const ShopCardRender = () => {
  const cards = useSelector((state) => state.shop.cards); 

  const { data, fetchNextPage, hasNextPage } = useGetCardQuery();

  const loadMoreRef = useInfiniteScroll(hasNextPage, fetchNextPage, { log: true });

  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      const lastPage = data.pages[data.pages.length - 1];
      dispatch(setCards(lastPage.list));  // 여기서 dispatch 실행
      console.log(`★ ${lastPage.list[0][0]} 디스패치`);
    }
  }, [data, dispatch]);

  const renderCards = useMemo(() => {
    return cards.map((data, index) => {
      // 마지막 카드에만 ref를 적용
      const isLastCard = index === cards.length - 2;
      return (
        <SaleCard
          key={data.id}
          data={data}
          ref={isLastCard ? loadMoreRef : null} // 특정 번째에만 ref 전달
        />
      );
    });
  }, [cards, loadMoreRef]);

  return (
    <>
      <section className={style.listRenderContainer}>
        {renderCards}
      </section>
    </>
  );
};

export default ShopCardRender;
