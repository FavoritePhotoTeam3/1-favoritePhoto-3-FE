import { useQuery } from "@tanstack/react-query";
import { fetchSellerCardDetails } from "./sellerDetailAPI";

export const useSellerDetail = (shopId) => {
  return useQuery({
    queryKey: ["sellerCardDetails", shopId],
    queryFn: () => fetchSellerCardDetails(shopId),
    enabled: !!shopId,
  });
};
