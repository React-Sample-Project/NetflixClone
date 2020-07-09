import styled from "styled-components";
import { NavIcon } from "../Navbar/Navbar.Styles";

export const SearchBoxMain = styled.div`
  display: inline-block;
  vertical-align: middle;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const SearchIconWrapper = styled(NavIcon).attrs(() => ({
  as: "button",
  tabIndex: "0",
}))`
  border: none;
  outline: none;
  font-size: 1em;
`;
