import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  display: flex;
  width: 20vw;
  height: 40px;
  left: 0;
  position: relative;
`;

export const EmailContainer = styled(Container)``;

export const PasswordContainer = styled(Container)``;

const Input = styled.input`
  position: absolute;
  top: 20px;
  height: 30px;
  width: 20vw;
  border: none;
  border-bottom: 1px solid rgb(146, 146, 146);
`;

export const EmailInput = styled(Input)``;

export const PasswordInput = styled(Input)``;

const Label = styled.label`
  font-size: 14px;
`;

export const EmailLabel = styled(Label)``;

export const PasswordLabel = styled(Label)``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  top: 15vh;
`;

export const EyeButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2vw;
  position: absolute;
  background: none;
  border: none;
  top: 25px;
  right: 0px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  position: absolute;
`;

export const LoginButton = styled.button`
  margin-bottom: 20px;
  background-color: rgb(84, 153, 217);
  width: 20vw;
  height: 40px;
  border-radius: 10px;
  position: relative;
  top: 60px;
  color: white;
  cursor: pointer;
  border: none;
`;

export const FindPassword = styled.a`
  margin: 40px;
  position: relative;
  align-self: center;
  outline: none;
  color: rgb(146, 146, 146);
  font-size: 14px;
  font-weight: 400;
  text-decoration-line: none;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
