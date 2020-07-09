import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import OtherAuth from "../../components/OtherAuth/OtherAuth";

import Cover from "../../assets/cover.jpg";

import "./Auth.Styles.css";

import {
  AuthContainer,
  AuthBodyWrapper,
  AuthBody,
  AuthBackground,
  AuthHeader,
  Logo,
  LogoLink,
} from "./Auth.Styles";
import { Redirect } from "react-router-dom";
import Footer from "../../components/Footer";
import useAuth from "../../hooks/useAuth/useAuth";

function Auth() {
  const [isLogged] = useAuth();
  return isLogged === true ? (
    <Redirect to="/movie" />
  ) : isLogged === false ? (
    // return (
    <AuthContainer>
      <AuthBackground>
        <img
          src={Cover}
          alt="loginCover"
          style={{ minHeight: "100%", minWidth: "100%" }}
        />
      </AuthBackground>
      <AuthHeader>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
      </AuthHeader>
      <AuthBody>
        <div>
          <AuthBodyWrapper>
            <SignIn />
            <OtherAuth />
          </AuthBodyWrapper>
        </div>
      </AuthBody>
      <Footer style={{ position: "fixed", bottom: "0px" }} />
    </AuthContainer>
  ) : null;
  // );
}

export default Auth;
