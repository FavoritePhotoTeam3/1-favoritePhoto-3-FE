import { SHOP } from "../axios";

// 검색어와 필터 옵션을 받아 페이지네이션된 카드 데이터를 요청하는 함수
export const getShopCards = async ({ pageParam = 1, searchTerm = "", filterOptions = {} }) => {
  const params = {
    page: pageParam,
    search: searchTerm,
    ...filterOptions,  // grade, soldOut, genre 등 필터 옵션
  };

  const response = await SHOP.get("/cards", { params });
  return response.data;  // 서버로부터 받은 데이터 반환
};


export const createQueryKey = (searchTerm = "", filterOptions = {}) => {
  return ["shopCards", searchTerm, filterOptions];
};