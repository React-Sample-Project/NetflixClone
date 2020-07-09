import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as NetflixLogo } from "../../assets/netflix.svg";

const NavOnScroll = css`
  position: fixed;
  background-color: rgb(20, 20, 20);
  top: 0;
`;

const getNavStyles = (props) => {
  if (props.scroll) {
    return NavOnScroll;
  }
};
export const NavContainer = styled.div`
  height: 70px;
`;

export const NavInner = styled.div`
  left: 0;
  right: 0;
  top: 0;
  position: relative;
  z-index: 1;
  ${getNavStyles}
`;

export const MainNav = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  z-index: 2;
  position: relative;
  display: flex;
  transition: background-color 400ms;
  align-items: center;
  height: 41px;
  @media screen and (min-width: 950px) {
    height: 68px;
  }
  padding: 0 4%;
  @media screen and (min-width: 1500px) {
    padding: 0 60px;
  }
  font-size: 1.2rem;
  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
  background-color: ${({ scroll }) =>
    scroll ? "rgb(20, 20, 20)" : "transparent"};
`;

export const LogoContainer = styled(Link)`
  margin-right: 5px;
  text-decoration: none;
  vertical-align: middle;
  fill: #e50914;
  display: inline-block;
  fill: #e50914;
  @media screen and (min-width: 1150px) {
    margin-right: 25px;
  }
`;

export const LogoIcon = styled(NetflixLogo)`
  vertical-align: middle;
  height: 2vh;
`;

export const LeftNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const LeftNavMenu = styled.li`
  @media screen and (min-width: 885px) {
    display: none;
  }
  display: block;
  margin-left: 18px;
  list-style-type: none;
`;

export const LeftNavMenuTrigger = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 100%;
`;

export const LeftNavItem = styled.li`
  display: none;
  list-style-type: none;
  margin-left: 18px;
  @media screen and (min-width: 1330px) {
    margin-left: 20px;
  }
  @media screen and (min-width: 885px) {
    display: block;
  }
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  position: absolute;
  top: 0;
  height: 100%;
  right: 4%;
  @media screen and (min-width: 1500px) {
    right: 60px;
  }
`;

export const RightNavItem = styled.div`
  &:not(:last-child) {
    margin-right: 15px;
  }
  @media screen and (min-width: 1330px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const NavIcon = styled.div`
  vertical-align: middle;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  line-height: 1;
  background: transparent;
  cursor: pointer;
`;
