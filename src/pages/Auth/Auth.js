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

import auth from "../../services/Auth";
function Auth() {
  return auth.isAuthenticated() ? (
    <Redirect to="/movie" />
  ) : (
    <AuthContainer>
      <AuthBackground>
        <img src={Cover} alt="loginCover" />
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
    </AuthContainer>
  );
}

export default Auth;
