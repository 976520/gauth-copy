import React from "react";
import { ErrorMessage } from "./style";

const ErrorDisplay = ({ message }) => {
  return message ? <ErrorMessage>{message}</ErrorMessage> : null;
};

export default ErrorDisplay;
