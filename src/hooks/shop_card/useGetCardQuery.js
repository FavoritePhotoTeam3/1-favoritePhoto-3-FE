import { useDispatch } from 'react-redux';
import { setCards } from '../../feature/shop_card/shopCardSlice';

import { useInfiniteQuery } from "@tanstack/react-query";
import { SHOP } from "../../api/axios";

export const getShopCards = async ({ pageParam = 1, pageSize = 10, searchTerm = "", filterOptions = {} }) => {
  const params = {
    page: pageParam,
    pageSize: pageSize,
    search: searchTerm,
    ...filterOptions, 
  };

  const response = await SHOP.get("/cards", { params });

  console.log("◆ API Log : response.data 값 >", response.data);

  return response.data;  // 서버로부터 받은 데이터 반환
};

export const useGetCardQuery = (pageSize = 10, searchTerm = "", filterOptions = {}) => {
  const dispatch = useDispatch();

  return useInfiniteQuery({
    queryKey: ["cards", pageSize, searchTerm, filterOptions], // 쿼리 키에 검색어 및 필터 옵션 포함
    queryFn: ({ pageParam = 1 }) => {
      console.log("◆ Query Log : QueryFn > Fetching page:", pageParam); // 페이지 번호 확인
      return getShopCards({ pageParam, searchTerm, filterOptions })
    },
    getNextPageParam: (lastPage, pages) => {
      console.log("◆ Query Log : lastPage.hasMore:", lastPage.hasMore); // 로깅 추가
      console.log("◆ Query Log : Current pages length:", pages.length); // 중복 로드 확인용 로깅
      return lastPage.hasMore ? pages.length + 1 : undefined;
    },
    onSuccess: (data) => {
      const lastPage = data.pages[data.pages.length - 1];
      dispatch(setCards(lastPage.list))
      console.log(`★ ${lastPage.list} 디스패치`);
    },
    staleTime: 5000, // 캐시 유지 시간
  });
};
