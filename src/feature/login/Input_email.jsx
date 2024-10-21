import { useDispatch, useSelector } from "react-redux";
import { InputEmail } from "../../components/common/input_normal/inputEmail";
import { loginInputAndValidation } from "./loginSlice";

const LoginEmailInput = () => {
  const emailValidation = useSelector(
    (state) => state.login.loginValidation.email
  );

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(loginInputAndValidation({ name, value }));
  };
  return <InputEmail onChange={handleChange} validation={emailValidation} />;
};

export default LoginEmailInput;
