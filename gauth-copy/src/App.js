import Title from "./title/title.jsx";
import LoginForm from "./loginForm/loginform.jsx";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  width: 25vw;
  position: absolute;
  top: 15vh;
`;

function App() {
  return (
    <div id="wrapper">
      <Title />
      <LoginForm />
    </div>
  );
}

export default App;
