import React from "react";
import GuestAuth from "../GuestAuth/GuestAuth";
import { analytics } from "../../analytics";
import {
  OtherAuthContainer,
  SignUpContainer,
  RecaptchaContainer,
  DisclosureContainer,
} from "./OtherAuth.Styles";

function OtherAuth() {
  const signUpClick = () => {
    analytics.addEvent({
      category: "Sign up",
      action: "User pressed Sign up button",
    });
  };
  return (
    <OtherAuthContainer>
      <GuestAuth />
      <SignUpContainer>
        New to Movieflix?{" "}
        <a
          href="https://www.themoviedb.org/account/signup"
          onClick={signUpClick}
        >
          Sign up now
        </a>
      </SignUpContainer>
      <RecaptchaContainer style={{ display: "none" }}>
        <p>
          <span>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </span>
          &nbsp;
          <button>Learn more.</button>
        </p>
        <DisclosureContainer style={{ display: "none" }}>
          <span>
            The information collected by Google reCAPTCHA is subject to the
            Google{" "}
            <a
              href="https://policies.google.com/privacy"
              data-uia="recaptcha-privacy-link"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              data-uia="recaptcha-tos-link"
            >
              Terms of Service
            </a>
            , and is used for providing, maintaining, and improving the
            reCAPTCHA service and for general security purposes (it is not used
            for personalized advertising by Google).
          </span>
        </DisclosureContainer>
      </RecaptchaContainer>
    </OtherAuthContainer>
  );
}

export default OtherAuth;
