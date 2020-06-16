import styled from "styled-components";
import { Link } from "react-router-dom";
export const CarouselTitleCard = styled.div`
  margin: 3vw 0;
  padding: 0;
  position: relative;
  transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  z-index: 1;
  box-sizing: border-box;
`;

export const CardHeading = styled.h2`
  line-height: 1.3;
  background-color: ${({ isLoading }) =>
    isLoading ? "#1a1a1a" : "transparent"};
  min-width: 6em;
  font-size: 1.4vw;
  color: #e5e5e5;
  margin: 0 4% 0.5em 4%;
  font-weight: bold;
  margin-left: 60px;
  display: inline-block;
`;

export const CardTitle = styled(Link)`
  text-decoration: none;
  line-height: 1.25vw;
`;

export const CarouselContainer = styled.div`
  transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  position: relative;
  z-index: 0;
`;
