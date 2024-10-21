import { axiosInstance } from "../../api/axios";

export const CreatePhotoCard = async (formData) => {
  const response = await axiosInstance.post("/cards", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
