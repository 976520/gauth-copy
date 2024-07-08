import React, { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
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
  font-size: 14px;
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
  background: none;
  border: none;
  top: 25px;
  right: 0px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  position: absolute;
`;

const LoginButton = styled.button`
  margin-bottom: 20px;
  background-color: rgb(84, 153, 217);
  width: 20vw;
  height: 40px;
  border-radius: 10px;
  position: relative;
  top: 60px;
  color: white;
  cursor: pointer;
  border: none;
`;

const FindPassword = styled.a`
  margin: 40px;
  position: relative;
  align-self: center;
  outline: none;
  color: rgb(146, 146, 146);
  font-size: 14px;
  font-weight: 400;
  text-decoration-line: none;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [error, setError] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [fields, setFields] = useState({
    email: {
      text: "이메일",
      labelColor: "rgb(146, 146, 146)",
    },
    password: {
      text: "비밀번호",
      labelColor: "rgb(146, 146, 146)",
    },
  });

  const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,72}$/;

  const handleLogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email) {
      setFields((prev) => ({
        ...prev,
        email: {
          ...prev.email,
          text: "*이메일 - 이메일을 입력하지 않았습니다",
          labelColor: "red",
        },
      }));
      return;
    } else {
      setFields((prev) => ({
        ...prev,
        email: {
          ...prev.email,
          text: "이메일",
          labelColor: "rgb(146, 146, 146)",
        },
      }));
    }

    if (!password) {
      setFields((prev) => ({
        ...prev,
        password: {
          ...prev.password,
          text: "*비밀번호 - 비밀번호를 입력하지 않았습니다",
          labelColor: "red",
        },
      }));
      return;
    } else if (!regex.test(password)) {
      setFields((prev) => ({
        ...prev,
        password: {
          ...prev.password,
          text: "*비밀번호 - 영어, 숫자, 특수문자를 각각 하나 이상 포함한 8자 이상 72자 이하 형식을 맞춰주세요",
          labelColor: "red",
        },
      }));
      return;
    } else {
      setFields((prev) => ({
        ...prev,
        password: {
          ...prev.password,
          text: "비밀번호",
          labelColor: "rgb(146, 146, 146)",
        },
      }));
    }

    if (email !== localStorage.getItem("email")) {
      setError("해당 유저를 찾을 수 없습니다.");
    } else if (password !== localStorage.getItem("password")) {
      setError("비밀번호가 일치하지 않습니다.");
    } else {
      alert("로그인 성공");
      init();
    }
  };

  const init = () => {
    setError("");
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setFields({
      email: {
        text: "이메일",
        labelColor: "rgb(146, 146, 146)",
      },
      password: {
        text: "비밀번호",
        labelColor: "rgb(146, 146, 146)",
      },
    });
  };

  return (
    <Wrapper>
      <EmailContainer>
        <EmailLabel htmlFor="email" style={{ color: fields.email.labelColor }}>
          {fields.email.text}
        </EmailLabel>
        <br />
        <EmailInput type="text" id="email" ref={emailRef} />
      </EmailContainer>
      <PasswordContainer>
        <PasswordLabel htmlFor="password" style={{ color: fields.password.labelColor }}>
          {fields.password.text}
        </PasswordLabel>
        <br />
        <PasswordInput type={passwordInputType} id="password" ref={passwordRef} />
        <EyeButton
          onClick={() => {
            setPasswordInputType(passwordInputType === "password" ? "text" : "password");
            setSeePassword(!seePassword);
          }}
        >
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none" id="yes">
            <path
              d="M19.1936 5.89801C17.6819 5.34421 15.9557 4.99999 14 5C4 5.00006 0 14 0 14C0 14 1.52323 17.4273 5.03968 20.0519L7.81345 17.2781C7.29417 16.3002 7 15.1844 7 14C7 10.134 10.134 7 14 7C15.1844 7 16.3002 7.29417 17.2781 7.81345L19.1936 5.89801ZM15.7695 9.32212C15.2194 9.11394 14.623 9 14 9C11.2386 9 9 11.2386 9 14C9 14.623 9.11394 15.2194 9.32212 15.7695L15.7695 9.32212ZM10.0928 17.1201L17.1201 10.0928C17.646 10.5132 18.0851 11.0377 18.4064 11.6349L11.6349 18.4064C11.0377 18.0851 10.5132 17.646 10.0928 17.1201ZM8.67227 18.5406L6.30836 20.9045C6.88931 21.2539 7.51402 21.576 8.18396 21.8574L10.1767 19.8646C9.61382 19.4969 9.10711 19.0503 8.67227 18.5406ZM11.5889 20.5737L9.75117 22.4115C11.0265 22.7811 12.4403 23 14 23C24 23 28 14 28 14C28 14 26.6799 11.0298 23.6606 8.50203L20.5737 11.5889C20.8495 12.3406 21 13.1527 21 14C21 17.866 17.866 21 14 21C13.1527 21 12.3406 20.8495 11.5889 20.5737ZM18.9399 13.2227L13.2227 18.9399C13.476 18.9795 13.7356 19 14 19C16.7614 19 19 16.7614 19 14C19 13.7356 18.9795 13.476 18.9399 13.2227ZM19.8646 10.1767C19.4969 9.61382 19.0503 9.10711 18.5406 8.67227L20.6756 6.53725C21.314 6.85586 21.9066 7.21013 22.455 7.58633L19.8646 10.1767Z"
              fill="#929292"
            ></path>
            {!seePassword && (
              <path
                d="M28 14C28 14 24 4.99994 14 5C4 5.00006 0 14 0 14C0 14 4 23 14 23C24 23 28 14 28 14ZM19 14C19 16.7614 16.7614 19 14 19C11.2386 19 9 16.7614 9 14C9 11.2386 11.2386 9 14 9C16.7614 9 19 11.2386 19 14ZM21 14C21 17.866 17.866 21 14 21C10.134 21 7 17.866 7 14C7 10.134 10.134 7 14 7C17.866 7 21 10.134 21 14Z"
                fill="#929292"
              ></path>
            )}
            {seePassword && (
              <rect x="24.2129" y="3" width="2" height="30" transform="rotate(45 24.2129 3)" fill="#929292"></rect>
            )}
          </svg>
        </EyeButton>
      </PasswordContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ButtonsContainer>
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
        <br />
        <FindPassword href="">비밀번호 찾기</FindPassword>
      </ButtonsContainer>
    </Wrapper>
  );
}

export default Login;
