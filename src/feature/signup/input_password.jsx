import { useDispatch, useSelector } from "react-redux";
import { InputPassword } from "../../components/common/input_invisible/inputPassword";
import { signupInputAndValidation } from "./signupSlice";

export const SignpuPasswordInput = () => {
  const passwordValidation = useSelector(
    (state) => state.signup.signupValidation.password
  );

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(signupInputAndValidation({ name, value }));
  };
  return (
    <InputPassword onChange={handleChange} validation={passwordValidation} />
  );
};
