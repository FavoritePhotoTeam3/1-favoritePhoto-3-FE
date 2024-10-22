import { axiosInstance } from "../../api/axios";

export const fetchCardDetails = async (shopId) => {
  const response = await axiosInstance.get(`/shop/cards/${shopId}`);
  return response.data;
};
