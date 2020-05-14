import styled, { keyframes } from "styled-components";

const pulsateAnimation = keyframes`
  from {
    background-color: #1a1a1a;
  }
  25% {
    background-color: #333;
  }
  50% {
    background-color: #1a1a1a;
  }
  to {
    background-color: #1a1a1a;
  }
`;

export const LoadingSlideMain = styled.div`
  animation-delay: 0s;
  padding: 27.25% 0;
  animation-duration: 3.6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-name: ${pulsateAnimation};
`;
