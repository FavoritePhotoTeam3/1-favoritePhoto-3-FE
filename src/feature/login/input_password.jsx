import { useDispatch, useSelector } from "react-redux";
import { InputPassword } from "../../components/common/input_invisible/inputPassword";
import { loginInputAndValidation } from "./loginSlice";

const LoginPasswordInput = () => {
  const passwordValidation = useSelector(
    (state) => state.login.loginValidation.password
  );

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(loginInputAndValidation({ name, value }));
  };
  return (
    <InputPassword onChange={handleChange} validation={passwordValidation} />
  );
};

export default LoginPasswordInput;
