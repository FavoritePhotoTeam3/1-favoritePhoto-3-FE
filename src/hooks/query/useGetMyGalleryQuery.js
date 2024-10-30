import { useInfiniteQuery } from "@tanstack/react-query";
import { USERS } from "../../api/users";

// API
export const getMyGalleryCards = async ({
  pageParam,
  limit,
  keyword,
  filterOptions,
}) => {
  const params = {
    cursor: pageParam,
    limit: limit,
    keyword: keyword,
    ...filterOptions,
  };
  try {
    // URL과 파라미터를 포함한 전체 요청 URI 생성
    const requestUrl = USERS.getUri({
      url: "/my-cards",
      params,
    });

    console.log("◆◆◆ API Full Request URL mycards:", requestUrl);

    const response = await USERS.get("/my-cards", { params });
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
      `Error fetching shop cards: ${
        error.response?.data?.message || error.message
      }`
    );
  }
};

export const useGetMyGalleryQuery = (
  limit = 10,
  keyword = "",
  filterOptions = {}
) => {
  const query = useInfiniteQuery({
    queryKey: ["myCards", limit, keyword, filterOptions],
    queryFn: ({ pageParam = null }) => {
      return getMyGalleryCards({ pageParam, limit, keyword, filterOptions });
    },
    getNextPageParam: (lastPage, pages) => {
      console.log(
        "◆ Query Log : 페이지 크기:",
        pages.length,
        "다음 page 여부:",
        lastPage.nextCursor
      );
      return lastPage.nextCursor ? lastPage.nextCursor : undefined;
    },
    staleTime: 1000 * 60, // 캐시 유지 시간
    retry: false,
    // keepPreviousData: true,  // 이전 데이터를 유지하면서 새 데이터를 요청
  });

  return query;
};

// 현재 grade 필터가 단독으로만 처리되고 다른 옵션들과 중첩으로 처리되지 않음
// 검색어도 마찬가지로 단독으로만 처리됨
