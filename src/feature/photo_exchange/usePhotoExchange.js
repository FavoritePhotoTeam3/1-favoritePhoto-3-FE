import { useQuery } from "@tanstack/react-query";
import { fetchMyCards } from "./PhotoExchangeAPI";

export const useMyCards = (keyword, limit = 10, cursor = null) => {
  return useQuery({
    queryKey: ["myCards", keyword, limit, cursor],
    queryFn: () => fetchMyCards(keyword, limit, cursor),
    enabled: true,
  });
};
