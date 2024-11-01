import { useDispatch, useSelector } from "react-redux";
import { InputNickname } from "../../components/common/input_normal/inputNickname";
import { signupInputAndValidation } from "./signupSlice";

export const SignpuNicknameInput = () => {
  const nicknameValidation = useSelector(
    (state) => state.signup?.signupValidation.nickname.validation
  );
  const errorMessage = useSelector(
    (state) => state.signup?.signupValidation.nickname.errorMessage
  );

  const nickname = useSelector((state) => state.signup?.signupForm.nickname);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(signupInputAndValidation({ name, value }));
  };
  return (
    <InputNickname
      onChange={handleChange}
      value={nickname}
      validation={nicknameValidation}
      errorMessage={errorMessage}
    />
  );
};
