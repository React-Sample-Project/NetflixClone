import React from "react";
import { ArrowMain } from "./SlideArrow.Styles";

function SliderArrow({ className, style, onClick, children, isLeft }) {
  return (
    <ArrowMain
      className={className}
      style={{ ...style }}
      onClick={onClick}
      isLeft={isLeft}
    >
      {children}
    </ArrowMain>
  );
}

export default SliderArrow;
