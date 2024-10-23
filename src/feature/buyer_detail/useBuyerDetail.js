import { useQuery } from "@tanstack/react-query";
import { fetchBuyerCardDetails } from "./buyerDetailAPI.js";

export const useBuyerDetail = (shopId) => {
  return useQuery({
    queryKey: ["cardDetails", shopId],
    queryFn: () => fetchBuyerCardDetails(shopId),
    enabled: !!shopId,
  });
};

export const useBuyerExchangeCards = (shopId) => {
  return useQuery({
    queryKey: ["buyerExchangeCards", shopId],
    queryFn: () => fetchExchangeCards(shopId),
    enabled: !!shopId,
  });
};
