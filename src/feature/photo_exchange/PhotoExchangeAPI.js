import { axiosInstance } from "../../api/axios";

export const fetchMyCards = async (keyword = "", limit = 10, cursor = null) => {
  const response = await axiosInstance.get("/users/my-cards", {
    params: { keyword, limit, cursor },
  });
  return response.data.list;
};

export const requestCardExchange = async (
  shopId,
  myCardId,
  description,
  count
) => {
  try {
    const response = await axiosInstance.post(`/exchange/${shopId}/request`, {
      myCardId,
      description,
      count,
    });

    if (response.status === 201) {
      return { success: true, data: response.data };
    }
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      const errorMessage = error.response.data.message;

      if (status === 400) {
        return { success: false, error: errorMessage };
      } else {
        return {
          success: false,
          error: "교환 요청 처리 중 오류가 발생했습니다.",
        };
      }
    } else {
      return { success: false, error: "서버와 통신 중 문제가 발생했습니다." };
    }
  }
};
