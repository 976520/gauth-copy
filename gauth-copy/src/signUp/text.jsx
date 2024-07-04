import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgb(81, 81, 81);
`;

const Text = () => {
  return (
    <div>
      <P>
        저희 gauth가 처음이신가요?<a href="">회원가입</a>
      </P>
    </div>
  );
};

export default Text;
