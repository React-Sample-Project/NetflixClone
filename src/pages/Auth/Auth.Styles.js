import styled from "styled-components";
import { ReactComponent as NetflixLogo } from "../../assets/netflix.svg";
import { Link } from "react-router-dom";

export const Logo = styled(NetflixLogo)`
  height: 45px;
  width: 167px;
  vertical-align: middle;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  vertical-align: middle;
  fill: #e50914;
  display: inline-block;
  line-height: 90px;
  fill: #e50914;
  line-height: 90px;
  margin-left: 3%;
`;

export const AuthContainer = styled.div`
  background-color: #000;
  color: #fff;
`;
export const AuthMain = styled.div`
  > div {
    min-height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 0;
  }
`;

export const AuthBackground = styled.div`
  background-size: cover;
  display: block;
  height: 100%;
  opacity: 0.5;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const AuthHeader = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-bottom: transparent;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0,
    rgba(0, 0, 0, 0) 100%
  );
`;
export const AuthBody = styled.div`
  &:before {
    content: "";
    height: 91px;
    display: block;
  }
  margin: 0 auto -236px;
  min-height: 100vh;
  background-color: transparent;
  max-width: 450px;
  padding: 0 5%;
  color: #333;
  &:after {
    content: "";
    height: 236px;
    display: block;
  }
`;

export const AuthBodyWrapper = styled.div`
  min-height: 660px;
  display: flex;
  border-radius: 4px;
  min-width: 380px;
  flex-direction: column;
  padding: 60px 68px 40px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  margin: 0;
  box-sizing: border-box;
  margin-bottom: 90px;
`;
