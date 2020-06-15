import React from "react";
import auth from "../../services/Auth";
import { useHistory } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { GuestButton, GuestIcon, GuestText } from "./GuestAuth.Styles";

function GuestAuth() {
  const history = useHistory();
  const createSession = async (e) => {
    e.preventDefault();
    const { success } = await auth.createGuestSession();
    if (success) {
      history.push("/movie");
    }
  };
  return (
    <GuestButton
      onClick={createSession}
      tabIndex="0"
      type="submit"
      size="small"
    >
      <GuestIcon icon={faUser}></GuestIcon>
      <GuestText>Sign In as Guest</GuestText>
    </GuestButton>
  );
}

export default GuestAuth;
