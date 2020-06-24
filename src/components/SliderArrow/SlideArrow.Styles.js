import styled from "styled-components";

export const ArrowMain = styled.div`
  /** To insert the style at the top. To overwrite thirdparty styles */
  && {
    z-index: 1;
    ${({ isLeft }) => (isLeft ? "left: 25px" : "right: 25px")}
  }
`;
