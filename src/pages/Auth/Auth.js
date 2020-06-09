import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import { Redirect } from "react-router-dom";

import auth from "../../services/Auth";
function Auth() {
  return auth.isAuthenticated() ? (
    <Redirect to="/movie" />
  ) : (
    <div>
      <SignIn />
    </div>
  );
}

export default Auth;
