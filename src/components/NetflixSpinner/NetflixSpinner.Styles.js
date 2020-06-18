import styled, { keyframes } from "styled-components";

const nfLoader = keyframes`{
    to {transform: rotate(360deg);}
  }`;

export const NetflixSpinnerMain = styled.div`
  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 55px;
    height: 55px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border-top: 2px solid #e50914;
    border-right: 2px solid transparent;
    animation: ${nfLoader} 1.1s linear infinite, 1 !important;
  }
`;
