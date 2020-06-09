import React from "react";
import { SeeMore as SeeMoreContainer } from "./SeeMore.Styles";
function SeeMore({ expanded, onClick }) {
  return (
    <SeeMoreContainer onClick={onClick}>{`See ${
      expanded ? "less" : "more"
    }`}</SeeMoreContainer>
  );
}

export default SeeMore;
