import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/Auth";

function ProtectedRoute({ children, ...rest }) {
  //   console.log(
  //     auth.isAuthenticated,
  //     localStorage.getItem("userSession"),
  //     children
  //   );
  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log(location, localStorage.getItem("userSession"));
        return auth.isAuthenticated() ? (
          children
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
