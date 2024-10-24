import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { APIrequestPending, completeAuth } from "../../route/authSlice";
import { axiosInstance } from "../../api/axios";

export const useLoginQuery = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const login = async ({ email, password }) => {
    dispatch(APIrequestPending({ isPending: true }));
    try {
      const response = await axiosInstance.post("/users/login", {
        email,
        password,
      });
      dispatch(completeAuth(response.data));
      queryClient.setQueryData(["user"], response.data);
      dispatch(APIrequestPending({ isPending: false }));
      nav("/");
    } catch (e) {
      dispatch(APIrequestPending({ isPending: false }));
      alert(e.response.data.data.message);
      console.log(e.status, "/context/authProvider/login");
    }
  };

  return { login };
};
