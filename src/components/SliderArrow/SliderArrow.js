import React from "react";
import { Main } from "./SlideArrow.Styles";

function SliderArrow({ className, style, onClick, children, isLeft }) {
  return (
    <Main
      className={className}
      style={{ ...style }}
      onClick={onClick}
      isLeft={isLeft}
    >
      {children}
    </Main>
  );
}

export default SliderArrow;
