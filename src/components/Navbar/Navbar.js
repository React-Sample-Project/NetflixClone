import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/netflixLogo.png";

import UserInfo from "../UserInfo";
import SearchBox from "../SearchBox";

import auth from "../../services/Auth";

import useWindowScrollPosition from "@rehooks/window-scroll-position";
import {
  NavContainer,
  NavInner,
  MainNav,
  LogoContainer,
  LeftNav,
  LeftNavMenu,
  LeftNavMenuTrigger,
  LeftNavItem,
  RightNav,
  RightNavItem,
  NavIcon,
} from "./Navbar.Styles.js";
import useAuth from "../../hooks/useAuth/useAuth";

function Navbar() {
  const scrollOptions = {
    passive: true,
  };
  const changePosition = 1;
  const [scroll, setScroll] = useState(false);
  const { y } = useWindowScrollPosition(scrollOptions);
  if (y > changePosition && !scroll) {
    setScroll(true);
  }
  if (y <= changePosition && scroll) {
    setScroll(false);
  }
  const [isAuthenticated] = useAuth();
  return (
    <NavContainer>
      <NavInner scroll={scroll}>
        <MainNav scroll={scroll}>
          <Link to="/">
            <LogoContainer src={Logo} alt="logo" />
          </Link>
          <LeftNav>
            <LeftNavMenu>
              <LeftNavMenuTrigger role="button" tabIndex="0">
                Browse
              </LeftNavMenuTrigger>
            </LeftNavMenu>
            {/* <LeftNavItem>
              <Link to="/">Home</Link>
            </LeftNavItem> */}
            <LeftNavItem>
              <Link to="/movie">Movies</Link>
            </LeftNavItem>
            <LeftNavItem>
              <Link to="/tv">TV Shows</Link>
            </LeftNavItem>
            {auth.getUserSession() && (
              <>
                <LeftNavItem>
                  <Link to="/watchlist/movies">My List</Link>
                </LeftNavItem>
                <LeftNavItem>
                  <Link to="/favorite/movies">My Favorites</Link>
                </LeftNavItem>
              </>
            )}
          </LeftNav>
          <RightNav>
            <RightNavItem>
              <SearchBox />
            </RightNavItem>
            <RightNavItem>
              <NavIcon>
                <FontAwesomeIcon icon={faBell} style={{ width: "auto" }} />
              </NavIcon>
            </RightNavItem>
            <RightNavItem>{isAuthenticated && <UserInfo />} </RightNavItem>
          </RightNav>
        </MainNav>
      </NavInner>
    </NavContainer>
    // <NavBarComponent
    //   style={{
    //     backgroundColor: "rgb(20, 20, 20)",
    //     padding: "0 60px",
    //     top: 0,
    //     position: "fixed",
    //   }}
    //   light
    //   expand="md"
    // >
    //   <NavbarBrand href="/">
    //     <img src={Logo} alt="logo" className="logo__container" />
    //   </NavbarBrand>
    //   <Nav className="mr-auto nav" navbar>
    //     <NavItem>
    //       <NavLink to="/" tag={Link} className="navitem__inactive">
    //         Home
    //       </NavLink>
    //     </NavItem>
    //     <NavItem>
    //       <NavLink
    //         href="/tvshows"
    //         className="navitem__inactive"
    //         // activeClassName="navitem__active"
    //       >
    //         TV Shows
    //       </NavLink>
    //     </NavItem>
    //     <NavItem>
    //       <NavLink
    //         href="/movies"
    //         className="navitem__inactive"
    //         // activeClassName="navitem__active"
    //       >
    //         Movies
    //       </NavLink>
    //     </NavItem>
    //     <NavItem>
    //       <NavLink
    //         href="/latest"
    //         className="navitem__inactive"
    //         // activeClassName="navitem__active"
    //       >
    //         Latest
    //       </NavLink>
    //     </NavItem>
    //     <NavItem>
    //       <NavLink
    //         href="/mylist"
    //         className="navitem__inactive"
    //         // activeClassName="navitem__active"
    //       >
    //         My List
    //       </NavLink>
    //     </NavItem>
    //   </Nav>
    //   <Nav className=" nav" navbar>
    //     <NavItem style={{ marginRight: "20px" }}>
    //       <FontAwesomeIcon icon={faSearch} className="nav__icons" />
    //     </NavItem>
    //     <NavItem>
    //       <FontAwesomeIcon icon={faBell} className="nav__icons" />
    //     </NavItem>
    //   </Nav>
    // </NavBarComponent>
  );
}

export default Navbar;
