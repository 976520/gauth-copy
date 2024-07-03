import React, { useState } from "react";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (id === "user" && password === "password") {
      alert("로그인 성공");
    } else {
      setError("아이디 또는 비밀번호가 잘못되었습니다.");
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
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default Login;
