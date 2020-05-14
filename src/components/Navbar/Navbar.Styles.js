import styled, { css } from "styled-components";

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
  /**  should be changed with media queries */
  height: 65px;
  /**  should be changed with media queries */
  padding: 0 60px;
  /** should be changed with media queries */
  font-size: 14px;
  background-color: ${({ scroll }) =>
    scroll ? "rgb(20, 20, 20)" : "transparent"};
`;

export const LogoContainer = styled.img`
  margin-right: 25px;
  width: 93px;
  height: 100%;
`;

export const LeftNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const LeftNavMenu = styled.li`
  display: none;
  /** should be changed with media queries */
  margin-left: 20px;
  list-style-type: none;
`;

export const LeftNavMenuTrigger = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 100%;
`;

export const LeftNavItem = styled.li`
  /** should be changed with media queries */
  display: block;
  list-style-type: none;
  /** should be changed with media queries */
  margin-left: 20px;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  position: absolute;
  top: 0;
  height: 100%;
  /** should be changed with media queries */
  right: 60px;
`;

export const RightNavItem = styled.div`
  /** should be changed with media queries */
  margin-right: 20px;
`;

export const NavIcon = styled.div`
  vertical-align: middle;
  font-size: 1.3em;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  line-height: 1;
  background: transparent;
  cursor: pointer;
`;
