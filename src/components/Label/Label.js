import React from "react";
import { LabelContainer } from "./Label.Styles";

function Label({ children, ...rest }) {
  return <LabelContainer {...rest}>{children}</LabelContainer>;
}

export default Label;
