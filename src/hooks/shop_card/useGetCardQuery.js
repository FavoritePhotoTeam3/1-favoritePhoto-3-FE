import { useInfiniteQuery } from "@tanstack/react-query";
import { getShopCards } from "../../api/shopAPI/shopApi";

export const useGetCardQuery = (searchTerm = "", filterOptions = {}) => {
  return useInfiniteQuery({
    queryKey: ["cards", searchTerm, filterOptions], // 쿼리 키에 검색어 및 필터 옵션 포함
    queryFn: ({ pageParam = 1 }) => {
      console.log("QueryFn > Fetching page:", pageParam); // 페이지 번호 확인
      return getShopCards({ pageParam, searchTerm, filterOptions })
    }, // getShopCards 함수 호출
    getNextPageParam: (lastPage, pages) => {
      // lastPage에서 다음 페이지가 있는지 여부를 반환
      console.log("lastPage.hasMore:", lastPage.hasMore); // 로깅 추가
      console.log("Current pages length:", pages.length); // 중복 로드 확인용 로깅

      return lastPage.hasMore ? pages.length + 1 : undefined;
    },
    staleTime: 5000, // 캐시 유지 시간
    cacheTime: 300000, // 캐시 데이터 유지 시간
  });
};
