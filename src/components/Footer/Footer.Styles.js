import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterMain = styled.div`
  background: rgba(0, 0, 0, 0.75);
  margin-top: 0;
  margin: 0;
  padding: 0;
  vertical-align: bottom;
  min-width: 190px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 1em;
  color: #757575;
  > div {
    flex-grow: 1;
  }
`;

export const FooterLeft = styled.div`
  align-items: left;
  margin: 20px;
  flex-grow: 1;
  font-size: 20px;
  @media screen and (max-width: 440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const FooterConnection = styled.div`
  margin-top: 10px;
`;

export const FooterIcon = styled(FontAwesomeIcon)`
  height: 30px;
  width: 30px;
  font-size: 25px;
  display: inline-block;
`;

export const ConnectionLink = styled.a`
  padding-left: 10px;
`;

export const ConnectionIcons = styled.div`
  margin-top: 5px;
  margin-left: 5px;
`;

export const FooterCenter = styled.div`
  @media screen and (max-width: 440px) {
    display: none;
  }
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  font-weight: bold;
`;

export const FooterRight = styled.div`
  @media screen and (max-width: 440px) {
    display: none;
  }
  align-items: flex-start;
`;
