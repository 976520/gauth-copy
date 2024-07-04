import React from "react";
import Login from "./login.jsx";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  top: 15vh;
`;

const LoginForm = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};

export default LoginForm;
