import React, { useState } from "react";
import styled from "styled-components";

const LoginButton = styled.button`
  background-color: rgb(84, 153, 217);
  width: 25vw;
  height: 6vh;
  border-radius: 10px;
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
  const [emailText, setEmailText] = useState("이메일");
  const [passwordText, setPasswordText] = useState("비밀번호");

  localStorage.setItem("email", "test");
  localStorage.setItem("password", "test1234");

  const handleLogin = () => {
    if (!email) {
      setEmailText("*이메일 - 이메일을 입력하지 않았습니다");
    } else if (!password) {
      setPasswordText("*비밀번호 - 비밀번호를 입력하지 않았습니다");
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
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div>
      <div>
        <label htmlFor="email">{emailText}</label>
        <br />
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">{passwordText}</label>
        <br />
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <button onClick={handleLogin}>로그인</button>
        <br />
        <a href="">비밀번호 찾기</a>
      </div>
    </div>
  );
}

export default Login;
