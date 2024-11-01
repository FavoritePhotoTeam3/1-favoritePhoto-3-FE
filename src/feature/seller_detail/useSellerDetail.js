import { useQuery } from "@tanstack/react-query";
import { fetchExchangeCards, fetchSellerCardDetails } from "./sellerDetailAPI";

export const useSellerDetail = (shopId) => {
  return useQuery({
    queryKey: ["sellerCardDetails", shopId],
    queryFn: () => fetchSellerCardDetails(shopId),
    enabled: !!shopId,
  });
};

export const useSellerExchangeCards = (shopId) => {
  return useQuery({
    queryKey: ["sellerExchangeCards", shopId],
    queryFn: () => fetchExchangeCards(shopId),
    enabled: !!shopId,
  });
};
