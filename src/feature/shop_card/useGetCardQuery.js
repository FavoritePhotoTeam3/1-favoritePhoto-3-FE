import { useInfiniteQuery } from "@tanstack/react-query";
import { getShopCards } from "../../api/shopAPI/shopApi";

export const useGetCardQuery = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getShopCards,
    getNextPageParam: (lastPage, pages) => {
      // lastPage에서 다음 페이지가 있는지 여부를 반환
      return lastPage.hasNextPage ? pages.length + 1 : undefined;
    },
    staleTime: 5000, // 캐시 유지 시간
  });
};
