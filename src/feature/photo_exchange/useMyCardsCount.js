import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../api/axios";

const fetchMyCardsCount = async () => {
  const response = await axiosInstance.get("/users/my-cards-count");
  return response.data;
};

export const useMyCardsCount = () => {
  return useQuery({
    queryKey: ["myCardsCount"],
    queryFn: fetchMyCardsCount,
    enabled: true,
  });
};
