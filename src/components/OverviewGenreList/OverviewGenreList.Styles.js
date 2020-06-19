import styled from "styled-components";

export const GenreList = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-items: flex-start;
  margin: 0;
  padding: 0;
`;

export const GenreItem = styled.div`
  display: flex;
  padding-right: 0.5vw;
`;

export const GenreText = styled.span`
  color: #fff;
  line-height: 1.3;
  position: relative;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
  font-size: 0.6vw;
`;

export const GenreSeparator = styled.span`
  display: inline-block;
  &::before {
    font-size: 0.9vw;
    color: #646464;
    content: "\\2022";
    display: inline-block;
    padding-right: 0.5vw;
  }
`;
