import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  display: flex;
  width: 20vw;
  height: 40px;
  left: 0;
  position: relative;
`;

const EmailContainer = styled(Container)``;

const PasswordContainer = styled(Container)``;

const Input = styled.input`
  position: absolute;
  top: 20px;
  height: 30px;
  width: 20vw;
  border: none;
  border-bottom: 1px solid rgb(146, 146, 146);
`;

const EmailInput = styled(Input)``;

const PasswordInput = styled(Input)``;

const Label = styled.label`
  font-size: 13px;
`;

const EmailLabel = styled(Label)``;

const PasswordLabel = styled(Label)``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  top: 15vh;
`;

const EyeButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2vw;
  position: absolute;
  top: 25px;
  left: 18vw;
`;

const LoginButton = styled.button`
  background-color: rgb(84, 153, 217);
  width: 20vw;
  height: 6.5vh;
  border-radius: 10px;
  position: relative;
  top: 20px;
  color: white;
  cursor: pointer;
  border: none;
`;

const FindPassword = styled.a`
  position: relative;
  top: 5vh;
  align-self: center;
  outline: none;
  color: rgb(146, 146, 146);
  font-size: 17px;
  font-weight: 400;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordInputType, setPasswordInputType] = useState("password");

  const [emailText, setEmailText] = useState("이메일");
  const [emailLabelColor, setEmailLabelColor] = useState("rgb(146, 146, 146)");
  const [passwordText, setPasswordText] = useState("비밀번호");
  const [passwordLabelColor, setPasswordLabelColor] = useState("rgb(146, 146, 146)");

  localStorage.setItem("email", "test");
  localStorage.setItem("password", "test1234");

  const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,72}$/;

  const handleLogin = () => {
    if (!email) {
      setEmailText("*이메일 - 이메일을 입력하지 않았습니다");
    } else if (!password) {
      setPasswordLabelColor("red");
      setPasswordText("*비밀번호 - 비밀번호를 입력하지 않았습니다");
    } else if (regex.test(password)) {
      setPasswordLabelColor("red");
      setPasswordText("*비밀번호 - 영어,숫자,특수문자를 각각 하나 이상 포함한 8자 이상 72자 이하 형식을 맞춰주세요");
    } else {
      if (email !== localStorage.getItem("email")) {
        setError("해당 유저를 찾을 수 없습니다.");
      } else if (password !== localStorage.getItem("password")) {
        setError("비밀번호가 일치하지 않습니다..");
      } else {
        alert("로그인 성공");
        init();
      }
    }
  };

  const init = () => {
    setPasswordLabelColor("rgb(146, 146, 146)");
    setEmailLabelColor("rgb(146, 146, 146)");
    setEmail("");
    setPassword("");
    setError("");
    setPasswordText("비밀번호");
    setEmailText("이메일");
  };

  return (
    <Wrapper>
      <EmailContainer>
        <EmailLabel htmlFor="email" style={{ color: { emailLabelColor } }}>
          {emailText}
        </EmailLabel>
        <br />
        <EmailInput type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </EmailContainer>
      <PasswordContainer>
        <PasswordLabel htmlFor="password" style={{ color: { passwordLabelColor } }}>
          {passwordText}
        </PasswordLabel>
        <br />
        <PasswordInput
          type={passwordInputType}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <EyeButton
          onClick={(e) => {
            if (passwordInputType === "password") {
              setPasswordInputType("text");
            } else {
              setPasswordInputType("password");
            }
          }}
        >
          (눈)
        </EyeButton>
      </PasswordContainer>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ButtonsContainer>
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
        <br />
        <FindPassword href="">비밀번호 찾기</FindPassword>
      </ButtonsContainer>
    </Wrapper>
  );
}

export default Login;
