import React from "react";
import { ButtonContainer } from "./Button.Styles";

function Button({ children, ...otherProps }) {
  return <ButtonContainer {...otherProps}>{children}</ButtonContainer>;
}

export default Button;
