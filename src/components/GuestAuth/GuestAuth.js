import React from "react";
import Button from "../Button/Button";
import auth from "../../services/Auth";
import { useHistory } from "react-router-dom";

function GuestAuth() {
  const history = useHistory();
  const createSession = async () => {
    const { success } = await auth.createGuestSession();
    if (success) {
      history.push("/movie");
    }
  };
  return <Button onClick={createSession}>Sign In as Guest</Button>;
}

export default GuestAuth;
