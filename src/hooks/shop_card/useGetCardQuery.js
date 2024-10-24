import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SHOP } from "../../api/shop";
import { useDispatch } from "react-redux";
import { setCards } from "../../feature/shop_card/shopCardSlice";

export const getShopCards = async ({
  pageParam,
  pageSize,
  searchTerm,
  filterOptions,
}) => {
  const params = {
    page: pageParam,
    pageSize: pageSize,
    search: searchTerm,
    ...filterOptions,
  };

  const response = await SHOP.get("/cards", { params });

  console.log(
    "◆ API Log : response.data 값 :",
    response.data,
    " Params 값: ",
    params
  );

  return response.data; // 서버로부터 받은 데이터 반환
};
const dispatch = useDispatch();
export const useGetCardQuery = (pageSize = 10, searchTerm, filterOptions) => {


  const query = useInfiniteQuery({
    queryKey: ["cards", pageSize, searchTerm, filterOptions], // 쿼리 키에 검색어 및 필터 옵션 포함
    queryFn: ({ pageParam = 1 }) => {
      return getShopCards({ pageParam, pageSize, searchTerm, filterOptions });
    },
    getNextPageParam: (lastPage, pages) => {
      console.log(
        "◆ Query Log : Current pages length:",
        pages.length,
        " lastPage.hasMore:",
        lastPage.hasMore
      ); // 중복 로드 확인용 로깅
      return lastPage.hasMore ? pages.length + 1 : undefined;
    },
    staleTime: 5000, // 캐시 유지 시간
  });

  // //redux에 동기화
  // useEffect(() => {
  //   console.log("◆ Query Log : 쿼리 훅 useEffect 실행:");
  //   if (query.data) {
  //     const lastPage = query.data.pages[query.data.pages.length - 1];
  //     dispatch(setCards(lastPage.list)); // 여기서 dispatch 실행
  //   }
  // }, [query.data]);

  return query;
};
