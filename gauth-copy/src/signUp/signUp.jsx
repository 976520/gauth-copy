import React from "react";
import Text from "./text.jsx";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 25vw;
  left: 40px;
  position: relative;
`;

const signUp = () => {
  return (
    <Wrapper>
      <Text />
    </Wrapper>
  );
};

export default signUp;
