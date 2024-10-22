import { useQuery } from "@tanstack/react-query";
import { fetchSellerCardDetails } from "../sellerDetailAPI";

export const useSellerDetail = (shopId) => {
  return useQuery(
    ["sellerCardDetails", shopId],
    () => fetchSellerCardDetails(shopId),
    {
      enabled: !!shopId,
    }
  );
};
