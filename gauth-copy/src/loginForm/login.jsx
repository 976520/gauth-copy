import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Wrapper, LoginButton, FindPassword, ButtonsContainer } from "./styledComponents";
import EmailInputField from "./emailInput";
import PasswordInputField from "./passwordInput";
import ErrorDisplay from "./errorMessage";

function Login() {
  localStorage.setItem("email", "asdf");
  localStorage.setItem("password", "asdf1234!");

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,72}$/;

  const onSubmit = ({ email, password }) => {
    clearErrors();
    setErrorMessage("");

    if (email !== localStorage.getItem("email")) {
      setErrorMessage("해당 유저를 찾을 수 없습니다.");
    } else if (password !== localStorage.getItem("password")) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      alert("로그인 성공");
      init();
    }
  };

  const init = () => {
    clearErrors();
    setErrorMessage("");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <EmailInputField register={register} errors={errors} />
        <PasswordInputField register={register} errors={errors} regex={regex} />
        <ErrorDisplay message={errorMessage} />
        <ButtonsContainer>
          <LoginButton type="submit">로그인</LoginButton>
          <br />
          <FindPassword href="">비밀번호 찾기</FindPassword>
        </ButtonsContainer>
      </form>
    </Wrapper>
  );
}

export default Login;
