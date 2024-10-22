import { useQuery } from "@tanstack/react-query";
import { fetchCardDetails } from "./buyerDetailAPI.js";

export const useBuyerDetail = (shopId) => {
  return useQuery(["cardDetails", shopId], () => fetchCardDetails(shopId), {
    enabled: !!shopId,
  });
};
