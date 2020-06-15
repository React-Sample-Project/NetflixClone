import React, { forwardRef } from "react";
import { InputMain } from "./Input.Styles.js";

const Input = forwardRef((props, ref) => <InputMain ref={ref} {...props} />);

export default Input;
