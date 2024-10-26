import { useDispatch, useSelector } from "react-redux";
import { InputPassword } from "../../components/common/input_invisible/inputPassword";
import { loginInputAndValidation } from "./loginSlice";

const LoginPasswordInput = () => {
  const password = useSelector((state) => state.login?.loginForm.password);
  const passwordValidation = useSelector(
    (state) => state.login?.loginValidation.password.validation
  );
  const errorMessage = useSelector(
    (state) => state.login?.loginValidation.password.errorMessage
  );

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(loginInputAndValidation({ name, value }));
  };
  return (
    <InputPassword
      onChange={handleChange}
      validation={passwordValidation}
      value={password}
      errorMessage={errorMessage}
    />
  );
};

export default LoginPasswordInput;
