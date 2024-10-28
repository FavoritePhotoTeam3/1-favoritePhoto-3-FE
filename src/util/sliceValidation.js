export const emailValidation = (email) => {
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  //값이 있을 경우에만 유효성 검사 실행.
  if (!emailRegEx.test(email) && email) {
    return false;
  } else {
    return true;
  }
};
export const nicknameValidation = (nickname) => {
  const length = nickname.length;
  //값이 있을 경우에만 유효성 검사 실행.
  if ((length < 2 || length >= 11) && nickname) {
    return false;
  } else {
    return true;
  }
};

export const passwordValidation = (password) => {
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  //값이 있을 경우에만 유효성 검사 실행.
  if (!passwordRegEx.test(password) && password) {
    return false;
  } else {
    return true;
  }
};

export const passwordEqualValidation = (password, passwordConfirm) => {
  //값이 있을 경우에만 유효성 검사 실행.
  if (password && passwordConfirm && !(password === passwordConfirm)) {
    return false;
  } else {
    return true;
  } // 비밀번호 일치 여부 검시.
};

export const isNotNull = (value) => {
  if (!value) {
    return false;
  } else {
    return true;
  }
};
