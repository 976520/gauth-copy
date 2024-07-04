import Title from "./title/title.jsx";
import LoginForm from "./loginForm/loginform.jsx";
import SignUp from "./signUp/signUp.jsx";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
`;

function App() {
  return (
    <Wrapper>
      <Title />
      <SignUp />
      <LoginForm />
    </Wrapper>
  );
}

export default App;
