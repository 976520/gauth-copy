import React from "react";
import { ErrorMessage } from "./styledComponents";

const ErrorDisplay = ({ message }) => {
  return message ? <ErrorMessage>{message}</ErrorMessage> : null;
};

export default ErrorDisplay;
