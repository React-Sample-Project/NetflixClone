import styled from "styled-components";

export const Main = styled.div`
  padding: 0 0 50px;
  z-index: 0;
  overflow: hidden;
  margin-top: -70px;
`;

export const CoverImageMain = styled.span`
  display: block;
  z-index: 1;
  position: relative;
`;

export const CoverImageRow = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  user-select: none;
  margin-bottom: 20px;
  background-color: #000;
  padding-bottom: 40%;
`;

export const MovieInfo = styled.div`
  position: absolute;
  background-color: #000;
  width: 100%;
  height: 56.25vw;
  z-index: 0;
  user-select: none;
`;

export const AbsoluteMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
