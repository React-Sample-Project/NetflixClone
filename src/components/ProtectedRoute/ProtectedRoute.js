import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/Auth";
import NetflixSpinner from "../NetflixSpinner";
import useAuth from "../../hooks/useAuth/useAuth";

const ProtectedRoute = ({ children, ...rest }) => {
  const [isAuthenticated] = useAuth();
  return (
    <Route
      {...rest}
      render={({ location: { pathname } }) => {
        const RedirectComponent = (
          <Redirect to={{ pathname: "/", state: { from: pathname } }} />
        );
        return isAuthenticated === true ? (
          pathname === "/my-list" && auth.getGuestSession() ? (
            RedirectComponent
          ) : (
            children
          )
        ) : isAuthenticated === false ? (
          RedirectComponent
        ) : (
          <NetflixSpinner />
        );
      }}
    ></Route>
  );
};

export default ProtectedRoute;
