import styled from "styled-components";
import mediaQuery from "../../styles/mediaQueries";
console.log(mediaQuery.xs);
export const MovieInfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 2%;
  right: 1%;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  display: flex;
  font-weight: bold;
  align-items: flex-end;
  overflow: visible;
  padding: 0 2% 2% 2.5%;
`;
export const MovieTitle = styled.h1`
  ${mediaQuery.xs`
  font-size:2.5vw;
`}
  ${mediaQuery.s`
  font-size:2vw;
  `}
  ${mediaQuery.m`
  font-size:1.6vw;
  `}
  ${mediaQuery.l`
  font-size:1.4vw;
  `}
    ${mediaQuery.xl`
  font-size:1vw;
  `}
  line-height: 1.4;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 0.3em;
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

export const MovieActionsWrapper = styled.div`
  flex: 0 0 10%;
`;

export const MovieTitleWrapper = styled.div`
  flex: 0 1 90%;
  max-width: 88%;
`;

export const MetaWrapper = styled.div`
  margin-bottom: 0.2em;
  ${mediaQuery.xs`
  font-size:2vw;
`}
  ${mediaQuery.s`
  font-size:1.6vw;
  `}
  ${mediaQuery.m`
  font-size:1.24vw;
  `}
  ${mediaQuery.l`
  font-size:1.06vw;
  `}
    ${mediaQuery.xl`
  font-size:0.8vw;
  `}
  font-size: .7vw;
`;

export const MetaInfo = styled.div`
  font-size: 0.4vw;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ReleasedYear = styled.span`
  text-transform: uppercase;
  border: solid 1px rgba(255, 255, 255, 0.4);
  padding: 0 0.4em;
  unicode-bidi: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
`;

export const Duration = styled.span`
  margin-right: 0.5em;
  margin-left: 0.2em;
`;

export const CollectionSlideContainer = styled.div`
  cursor: pointer;
  display: flex;
  width: inherit;
  height: inherit;
`;
