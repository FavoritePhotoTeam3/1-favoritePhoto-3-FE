import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { APIrequestPending } from "../../route/authSlice";
import { setErrorMessage } from "./signupSlice";
import { USERS } from "../../api/users";

export const useSignupQuery = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const signup = async ({ email, password, nickname }) => {
    dispatch(APIrequestPending({ isPending: true }));
    try {
      await USERS.post("/signup", {
        email,
        password,
        nickname,
      });
      dispatch(APIrequestPending({ isPending: false }));
      alert("회원가입이 완료되었습니다!");
      nav("/");
    } catch (e) {
      const {
        response: {
          status,
          data: {
            data: { message, column },
          },
        },
      } = e;
      if (status === 422) {
        dispatch(setErrorMessage({ message, column }));
        dispatch(APIrequestPending({ isPending: false }));
        return;
      } else {
        dispatch(APIrequestPending({ isPending: false }));
        alert("오류!");
        window.location.href = "/";
      }
    }
  };

  return { signup };
};
