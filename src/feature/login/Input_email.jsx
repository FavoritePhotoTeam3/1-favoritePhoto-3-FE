import { useDispatch, useSelector } from "react-redux";
import { InputEmail } from "../../components/common/input_normal/inputEmail";
import { loginInputAndValidation } from "./loginSlice";

const LoginEmailInput = () => {
  const email = useSelector((state) => state.login?.loginForm.email);
  const emailValidation = useSelector(
    (state) => state.login?.loginValidation.email.validation
  );
  const errorMessage = useSelector(
    (state) => state.login?.loginValidation.email.errorMessage
  );

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(loginInputAndValidation({ name, value }));
  };
  return (
    <InputEmail
      onChange={handleChange}
      validation={emailValidation}
      value={email}
      errorMessage={errorMessage}
    />
  );
};

export default LoginEmailInput;
