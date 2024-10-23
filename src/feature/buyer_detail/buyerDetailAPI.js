import { axiosInstance } from "../../api/axios";

export const fetchBuyerCardDetails = async (shopId) => {
  const response = await axiosInstance.get(`/shop/cards/${shopId}`);
  return response.data;
};

export const fetchExchangeCards = async (shopId) => {
  const response = await axiosInstance.get(`/users/cards/${shopId}/exchange`);
  return response.data;
};
