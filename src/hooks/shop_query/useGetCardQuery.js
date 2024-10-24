import { useInfiniteQuery } from "@tanstack/react-query";
import { SHOP } from "../../api/shop";

// API
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

export const useGetCardQuery = (pageSize = 10, searchTerm = "", filterOptions = {}) => {
  const query = useInfiniteQuery({
    queryKey: ["cards", pageSize, searchTerm, filterOptions],
    queryFn: ({ pageParam = 1 }) => {
      return getShopCards({ pageParam, pageSize, searchTerm });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      console.log("◆ Query Log : 페이지 크기:", pages.length, "다음 page 여부:", lastPage.hasMore); 
      return lastPage.hasMore ? pages.length + 1 : undefined;
    },
    staleTime: 1000 * 60, // 캐시 유지 시간
    // keepPreviousData: true,  // 이전 데이터를 유지하면서 새 데이터를 요청
  });


  return query;
};

