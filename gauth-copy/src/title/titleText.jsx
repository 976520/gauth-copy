import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: rgb(28, 28, 28);
`;

const TitleText = () => {
  return (
    <div>
      <Text>뭐든 단 한번으로</Text>
    </div>
  );
};

export default TitleText;
