import { SHOP } from "../axios";

const removeEmptyParams = (params) => {
  return Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value)
  );
};

export const getShopCards = async ({
  pageParam = 1,
  searchTerm = "",
  filterOptions = { grade: "", soldOut: "", genre: "" },
}) => {
  try {
    const params = removeEmptyParams({
      page: pageParam,
      search: searchTerm,
      grade: filterOptions.grade,
      soldOut: filterOptions.soldOut,
      genre: filterOptions.genre,
    });
    const queryString = new URLSearchParams(params).toString();

    const response = await SHOP.get(`/cards?${queryString}`);

    // 응답 전체 로깅
    console.log("API Response Data:", response.data); // 응답 데이터 구조 확인

    // API 서버 오류 코드
    if (!response.data) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    return response.data; // 데이터 반환

  } catch (error) {
    console.error("Error in getShopCards function:", error);
    throw error; // 에러를 상위로 전달
  }
};
