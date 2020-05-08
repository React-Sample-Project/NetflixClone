import styled from "styled-components";
import { Link } from "react-router-dom";
export const CarouselTitleCard = styled.div`
  margin: 3vw 0;
  padding: 0;
  position: relative;
  transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  z-index: 1;
`;

export const CardHeading = styled.h2`
  line-height: 1.3;
  margin: 0;
`;

export const CardTitle = styled(Link)`
  font-size: 1.4vw;
  color: #e5e5e5;
  font-weight: bold;
  text-decoration: none;
  line-height: 1.25vw;
  margin-left: 60px;
  display: inline-block;
  min-width: 6em;
`;

export const CarouselContainer = styled.div`
  transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  position: relative;
  z-index: 0;
`;
