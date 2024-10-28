import { NOTICE } from "../../api/notifications";

export const getNotice = async () => {
  const response = await NOTICE.get();
  return response.data;
};
