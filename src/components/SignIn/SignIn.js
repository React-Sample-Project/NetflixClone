import React, { useState } from "react";
import auth from "../../services/Auth";
import {
  SignInHeader,
  SignInLabel,
  InputWrapper,
  SignInInput,
  SignInButton,
  SignInInner,
  InputMainWrapper,
} from "./SignIn.Styles";
import { useHistory } from "react-router-dom";
import Label from "../Label/Label";

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
    <SignInInner>
      <SignInHeader>Sign In</SignInHeader>
      <form method="post" onSubmit={signIn}>
        <InputMainWrapper>
          <InputWrapper>
            <Label>
              <SignInInput
                name="username"
                value={username}
                tabIndex="0"
                id="userName"
                autoComplete="email"
                onChange={onChange}
              />
              <SignInLabel htmlFor="userName">
                Email or phone number
              </SignInLabel>
            </Label>
          </InputWrapper>
        </InputMainWrapper>
        <InputMainWrapper>
          <InputWrapper>
            <Label>
              <SignInInput
                name="password"
                type="password"
                id="password"
                tabIndex="0"
                autoComplete="password"
                value={password}
                onChange={onChange}
              />
              <SignInLabel htmlFor="password">Password</SignInLabel>
            </Label>
          </InputWrapper>
        </InputMainWrapper>
        <SignInButton type="submit" size="small" bgColor="#e50914" color="#fff">
          Sign In
        </SignInButton>
      </form>
    </SignInInner>
  );
}

export default SignIn;
