import styled from "styled-components";

export const MovieInfoContainer = styled.div`
  position: absolute;
  bottom: 24%;
  left: 2%;
  right: 1%;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.62s, 1s ease;
  font-size: 10px;
`;
export const MovieTitle = styled.h1`
  color: #fff;
  font-size: 1vw;
`;

export const MovieInfo = styled.span`
  color: #fff;
  font-weight: bold;
  line-height: 1.4em;
  display: inline-block;
  height: 5vh;
  overflow: ${({ expanded }) => (expanded ? "visible" : "hidden")};
`;
