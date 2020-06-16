import React from "react";
import GuestAuth from "../GuestAuth/GuestAuth";

import { OtherAuthContainer, SignUpContainer } from "./OtherAuth.Styles";

function OtherAuth() {
  return (
    <OtherAuthContainer>
      <GuestAuth />
      <SignUpContainer>
        New to Movieflix?{" "}
        <a href="https://www.themoviedb.org/account/signup">Sign up now</a>
      </SignUpContainer>
    </OtherAuthContainer>
  );
}

export default OtherAuth;
