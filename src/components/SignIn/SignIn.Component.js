import React, { useState } from "react";
import Input from "../Input/Input.Component";
import Button from "../Button/Button.Component";
import auth from "../../services/Auth";
import { SignInContainer } from "./SignIn.Styles";
import { useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { username, password } = credentials;

  const onChange = ({ target: { name, value } }) => {
    setCredentials((old) => ({
      ...old,
      [name]: value,
    }));
  };
  const signIn = async (evObj) => {
    evObj.preventDefault();
    const { success } = await auth.authenticateUser({
      name: username,
      password: password,
    });
    setCredentials({
      username: "",
      password: "",
    });
    if (success) {
      history.push("/movie");
    }
  };
  return (
    <SignInContainer>
      <form onSubmit={signIn}>
        <Input
          placeholder="username"
          name="username"
          value={username}
          onChange={onChange}
        />
        <Input
          placeholder="password"
          name="password"
          type="password"
          value={password}
          onChange={onChange}
        />
        <Button type="submit">Sign In</Button>
      </form>
    </SignInContainer>
  );
}

export default SignIn;
