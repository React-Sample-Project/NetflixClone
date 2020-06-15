import React from "react";
import { InputErrorContainer } from "./InputError.Styles";

function InputError({ children }) {
  return children && <InputErrorContainer>{children}</InputErrorContainer>;
}

export default InputError;
