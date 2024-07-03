import React from "react";
import ReactDOM from "react-dom";
import IdInput from "./idInput.jsx";
import PasswordInput from "./passwordInput.jsx";

const LoginForm = () => {
  return (
    <div>
      <IdInput />
      <PasswordInput />
    </div>
  );
};

ReactDOM.render(<LoginForm />, document.getElementById("loginForm"));
