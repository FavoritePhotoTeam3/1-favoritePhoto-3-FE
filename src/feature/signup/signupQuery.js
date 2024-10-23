import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { APIrequestPending } from "../../route/authSlice";
import { USERS } from "../../api/users";
import { setErrorMessage } from "./signupSlice";

export const useSignupQuery = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const signup = async ({ email, password, nickname }) => {
    console.log(email, password, nickname);
    dispatch(APIrequestPending({ isPending: true }));
    try {
      await USERS.post("/signup", {
        email,
        password,
        nickname,
      });
      dispatch(APIrequestPending({ isPending: false }));
      alert("회원가입 완료");
      nav("/");
    } catch (e) {
      const {
        response: {
          status,
          data: { data: message },
        },
      } = e;
      if (status === 422) {
        dispatch(setErrorMessage(message));
      }
    }
  };

  return { signup };
};
