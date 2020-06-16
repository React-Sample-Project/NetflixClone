import React, { useState, useRef } from "react";
import auth from "../../services/Auth";
import InputError from "../InputError";
import ErrorBanner from "../ErrorBanner";
import PasswordToggler from "../PasswordToggler";

import {
  SignInHeader,
  SignInLabel,
  InputWrapper,
  SignInInput,
  SignInButton,
  SignInInner,
  InputMainWrapper,
  PasswordLabel,
  SignInLabelWrapper,
} from "./SignIn.Styles";
import { useHistory } from "react-router-dom";
import GoogleRecaptcha from "../GoogleRecaptcha/GoogleRecaptcha";

function SignIn() {
  const history = useHistory();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    general: "",
  });

  const [isFocused, setFocused] = useState({
    username: false,
    password: false,
  });

  const recapchaRef = useRef();

  const passwordRef = useRef(null);

  const { username, password } = credentials;

  const {
    username: isUserNameFocused,
    password: isPasswordFocused,
  } = isFocused;

  const {
    username: usernameError,
    password: passwordError,
    general: generalError,
  } = errors;

  const [passwordType, setPasswordType] = useState("password");

  const checkError = (name, value) => {
    const fieldValue = value || credentials[name];
    const newErrorValue =
      fieldValue.length === 0 ? `Please enter a valid ${name}` : "";
    if (newErrorValue !== fieldValue) {
      setErrors((oldState) => ({
        ...oldState,
        [name]: newErrorValue,
      }));
    }
    return !!newErrorValue;
  };

  const handleFocus = ({ type, target: { name }, relatedTarget }) => {
    const newValue = type === "focus" ? true : false;
    if (newValue !== isFocused[name]) {
      setFocused((old) => ({
        ...old,
        [name]: newValue,
      }));
    }
    if (type === "blur") {
      checkError(name);
    }
  };

  const onChange = ({ target: { name, value } }) => {
    setCredentials((old) => ({
      ...old,
      [name]: value,
    }));
    checkError(name, value);
  };

  const hasErrors = () => {
    const keys = Object.keys(credentials);
    return keys.map((name) => checkError(name)).some((val) => val === true);
  };

  const passwordTogglerCallback = (isShown) => {
    setPasswordType(isShown ? "text" : "password");
    passwordRef && passwordRef.current.focus();
  };

  const signIn = async (evObj) => {
    evObj.preventDefault();
    try {
      const token = await recapchaRef.current.executeAsync();
      auth.verifyGoogleCaptcha(token);
      if (!hasErrors()) {
        const { success, statusMessage } = await auth.authenticateUser({
          username,
          password,
        });
        setCredentials({
          username: "",
          password: "",
        });
        if (success) {
          history.push("/movie");
        } else {
          setErrors({
            general: statusMessage,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const passwordLength = password.length;
  return (
    <SignInInner>
      <SignInHeader>Sign In</SignInHeader>
      {generalError && <ErrorBanner>{generalError}</ErrorBanner>}
      <form method="post" onSubmit={signIn}>
        <GoogleRecaptcha ref={recapchaRef} />
        <InputMainWrapper>
          <InputWrapper>
            <SignInLabelWrapper>
              <SignInInput
                name="username"
                value={username}
                tabIndex="0"
                id="userName"
                autoComplete="email"
                onFocus={handleFocus}
                onBlur={handleFocus}
                onChange={onChange}
              />
              <SignInLabel
                floatUp={!!username.length || isUserNameFocused}
                htmlFor="userName"
              >
                Email or phone number
              </SignInLabel>
            </SignInLabelWrapper>
          </InputWrapper>
          {usernameError && <InputError>{usernameError}</InputError>}
        </InputMainWrapper>
        <InputMainWrapper>
          <InputWrapper isPassword={true}>
            <PasswordLabel>
              <SignInInput
                ref={passwordRef}
                name="password"
                type={passwordType}
                id="password"
                tabIndex="0"
                onFocus={handleFocus}
                onBlur={handleFocus}
                autoComplete="password"
                value={password}
                onChange={onChange}
              />
              <SignInLabel
                floatUp={!!passwordLength || isPasswordFocused}
                htmlFor="password"
              >
                Password
              </SignInLabel>
            </PasswordLabel>

            {passwordLength > 0 && isPasswordFocused && (
              <PasswordToggler togglerCallback={passwordTogglerCallback} />
            )}
          </InputWrapper>
          {passwordError && <InputError>{passwordError}</InputError>}
        </InputMainWrapper>
        <SignInButton type="submit" size="small" bgColor="#e50914" color="#fff">
          Sign In
        </SignInButton>
      </form>
    </SignInInner>
  );
}

export default SignIn;
