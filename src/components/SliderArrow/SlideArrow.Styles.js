import styled from "styled-components";

export const ArrowMain = styled.div`
  z-index: 1;
  ${({ isLeft }) => (isLeft ? "left: 25px" : "right: 25px")}
`;
