import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/Auth";

function ProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return auth.isAuthenticated() ? (
          location.pathname === "/my-list" && auth.isGuest() ? (
            <Redirect
              to={{ pathname: "/", state: { from: location.pathname } }}
            />
          ) : (
            children
          )
        ) : (
          <Redirect
            to={{ pathname: "/", state: { from: location.pathname } }}
          />
        );
      }}
    ></Route>
  );
}

export default ProtectedRoute;
