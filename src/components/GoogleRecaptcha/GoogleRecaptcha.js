import React, { forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const GoogleRecaptcha = forwardRef((props, ref) => {
  return (
    <ReCAPTCHA
      ref={ref}
      size="invisible"
      sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY}
    />
  );
});

export default GoogleRecaptcha;
