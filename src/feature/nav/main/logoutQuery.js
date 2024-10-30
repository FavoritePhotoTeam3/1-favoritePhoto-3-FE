import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { APIrequestPending, expireAuth } from "../../../route/auth/authSlice";
import { axiosInstance } from "../../../api/axios";

export const useLogoutQuery = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(APIrequestPending({ isPending: true }));
    try {
      const response = await axiosInstance.delete("/users/logout");
      dispatch(expireAuth(response.data));
      queryClient.removeQueries(["user"]);
      dispatch(APIrequestPending({ isPending: false }));
      alert(response.data.message);
    } catch (e) {
      alert(e.response.data.data.message);
    }
  };

  return { logout };
};
