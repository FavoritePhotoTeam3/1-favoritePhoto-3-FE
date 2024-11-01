import { useQuery } from "@tanstack/react-query";
import { SHOP } from "@api/shop";

// API
export const getMyCardTotalState = async () => {
  try {
    const response = await SHOP.get("/counts");
    console.log("◆ API Log: response.data:", response.data);
    return response.data; // 서버로부터 받은 데이터 반환
  } catch (error) {
    // 에러 세부 정보 로깅
    console.error(
      "◆ API Error Log:",
      error.message,
      "Response Data:",
      error.response ? error.response.data : "No response data"
    );

    // 에러 던지기
    throw new Error(
      `Error fetching : ${error.response?.data?.message || error.message}`
    );
  }
};

export const useGetOptionCountQuery = () => {
  const query = useQuery({
    queryKey: ["ShopTotalCount"],
    queryFn: getMyCardTotalState,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  return query;
};
