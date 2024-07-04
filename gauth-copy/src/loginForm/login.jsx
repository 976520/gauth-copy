import React, { useState } from "react";
import styled from "styled-components";

const LoginButton = styled.div`
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
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (id === "user" && password === "password") {
      alert("로그인 성공");
    } else {
      setError("잘못됨ㅋ");
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="id">아이디</label>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <button onClick={handleLogin}>로그인</button>
        <a href="">비밀번호 찾기</a>
      </div>
    </div>
  );
}

export default Login;
