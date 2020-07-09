import React from "react";
import { ButtonContainer } from "./Button.Styles";

function Button({ children, type, ...otherProps }) {
  return (
    <ButtonContainer type={type || "button"} {...otherProps}>
      {children}
    </ButtonContainer>
  );
}

export default Button;
