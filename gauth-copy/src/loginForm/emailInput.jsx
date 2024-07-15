import React from "react";
import { EmailContainer, EmailInput, EmailLabel } from "./style";

const EmailInputField = ({ register, errors }) => {
  return (
    <EmailContainer>
      <EmailLabel htmlFor="email" style={{ color: errors.email ? "red" : "rgb(146, 146, 146)" }}>
        {errors.email ? errors.email.message : "이메일"}
      </EmailLabel>
      <br />
      <EmailInput
        type="text"
        id="email"
        {...register("email", { required: "*이메일 - 이메일을 입력하지 않았습니다" })}
      />
    </EmailContainer>
  );
};

export default EmailInputField;
