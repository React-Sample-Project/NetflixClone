import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import UserInfo from "../UserInfo";
import SearchBox from "../SearchBox";

import auth from "../../services/Auth";
import Menu from "../Menu";

import useWindowScrollPosition from "@rehooks/window-scroll-position";
import {
  NavContainer,
  NavInner,
  MainNav,
  LeftNav,
  LeftNavMenu,
  LeftNavMenuTrigger,
  LeftNavItem,
  RightNav,
  RightNavItem,
  NavIcon,
  LogoContainer,
  LogoIcon,
} from "./Navbar.Styles.js";
import useAuth from "../../hooks/useAuth/useAuth";
import DownArrowIcon from "../DownArrowIcon/DownArrowIcon";

function Navbar() {
  const scrollOptions = {
    passive: true,
  };
  const changePosition = 1;
  const [scroll, setScroll] = useState(false);
  const history = useHistory();
  const { y } = useWindowScrollPosition(scrollOptions);
  const browseRef = useRef(null);
  if (y > changePosition && !scroll) {
    setScroll(true);
  }
  if (y <= changePosition && scroll) {
    setScroll(false);
  }
  const items = [
    {
      key: 1,
      value: "Movies",
      to: "/movie",
    },
    {
      key: 2,
      value: "TV Shows",
      to: "/tv",
    },
  ];
  if (auth.getUserSession()) {
    items.push(
      ...[
        {
          key: 3,
          value: "My List",
          to: "/watchlist/movies",
        },
        {
          key: 4,
          value: "My Favorites",
          to: "/favorite/movies",
        },
      ]
    );
  }
  const [isAuthenticated] = useAuth();
  const switchToRoute = ({ to }) => {
    history.push(to);
  };
  return (
    <NavContainer>
      <NavInner scroll={scroll}>
        <MainNav scroll={scroll}>
          <LogoContainer to="/movie">
            <LogoIcon />
          </LogoContainer>
          <LeftNav>
            <LeftNavMenu ref={browseRef}>
              <LeftNavMenuTrigger role="button" tabIndex="0">
                Browse
                <DownArrowIcon />
              </LeftNavMenuTrigger>
              <Menu
                items={items}
                refNode={browseRef?.current}
                onSelect={switchToRoute}
              />
            </LeftNavMenu>
            {items.map(({ key, value, to }) => (
              <LeftNavItem key={key}>
                <Link to={to}> {value} </Link>
              </LeftNavItem>
            ))}
          </LeftNav>
          <RightNav>
            <RightNavItem>
              <SearchBox />
            </RightNavItem>
            <RightNavItem>
              <NavIcon>
                <FontAwesomeIcon icon={faBell} />
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
