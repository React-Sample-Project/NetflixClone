import styled from "styled-components";
import { ReactComponent as NetflixLogo } from "../../assets/netflix.svg";
import { Link } from "react-router-dom";

export const LogoIcon = styled(NetflixLogo)`
  @media screen and (max-width: 440px) {
    height: 20px;
    width: 75px;
    padding-top: 12px;
  }
  height: 45px;
  width: 167px;
  vertical-align: middle;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  vertical-align: middle;
  fill: #e50914;
  display: inline-block;
  fill: #e50914;
  margin-left: 3%;
  line-height: 90px;
  @media screen and (max-width: 700px) {
    line-height: 75px;
  }
  @media screen and (max-width: 440px),
    screen and (orientation: landscape) and (max-width: 700px) {
    line-height: 45px;
  }
`;
