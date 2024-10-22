import { useQuery } from "@tanstack/react-query";
import { fetchCardDetails } from "./buyerDetailAPI.js";

export const useBuyerDetail = (shopId) => {
  return useQuery({
    queryKey: ["cardDetails", shopId],
    queryFn: () => fetchCardDetails(shopId),
    enabled: !!shopId,
  });
};
