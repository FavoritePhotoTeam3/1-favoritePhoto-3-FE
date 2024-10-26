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
  try {
    const response = await SHOP.get("/cards", { params });

    // 서버에서 조건에 맞는 카드가 없는 경우 빈 배열과 서버 상태 정보 반환
    if (response.data?.message === '입력하신 조건에 맞는 카드를 찾을 수 없습니다.') {
      console.warn("◆ API Warning: 조건에 맞는 카드를 찾을 수 없습니다.");
      return { list: [], hasMore: false, serverMessage: response.data.message };
    }

    console.log("◆ API Log: response.data:", response.data, "Params:", params);
    return response.data; // 서버로부터 받은 데이터 반환

  } catch (error) {
    // 에러 세부 정보 로깅
    console.error(
      "◆ API Error Log:",
      error.message,
      "Params:",
      params,
      "Response Data:",
      error.response ? error.response.data : "No response data"
    );

    // 에러 던지기
    throw new Error(
      `Error fetching shop cards: ${error.response?.data?.message || error.message}`
    );
  }
};

export const useGetCardQuery = (
  pageSize = 10,
  searchTerm = "",
  filterOptions = {}
) => {
  const query = useInfiniteQuery({
    queryKey: ["cards", pageSize, searchTerm, filterOptions],
    queryFn: ({ pageParam = 1 }) => {
      return getShopCards({ pageParam, pageSize, searchTerm, filterOptions });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      console.log(
        "◆ Query Log : 페이지 크기:",
        pages.length,
        "다음 page 여부:",
        lastPage.hasMore
      );
      return lastPage.hasMore ? pages.length + 1 : undefined;
    },
    staleTime: 1000 * 60, // 캐시 유지 시간
    retry: false,
    // keepPreviousData: true,  // 이전 데이터를 유지하면서 새 데이터를 요청
  });

  return query;
};

// 현재 grade 필터가 단독으로만 처리되고 다른 옵션들과 중첩으로 처리되지 않음
// 검색어도 마찬가지로 단독으로만 처리됨