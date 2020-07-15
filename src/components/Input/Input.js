import React, { forwardRef } from "react";
import { InputMain } from "./Input.Styles.js";

const Input = forwardRef(({ type, ...otherProps }, ref) => (
  <InputMain type={type || "text"} ref={ref} {...otherProps} />
));

export default Input;
