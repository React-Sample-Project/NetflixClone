import React from "react";
import {
  ErrorBannerContainer,
  ErrorIcon,
  ErrorMessage,
} from "./ErrorBanner.Styles";
function ErrorBanner({ icon, children }) {
  return (
    <ErrorBannerContainer>
      {icon && <ErrorIcon></ErrorIcon>}
      <ErrorMessage>{children}</ErrorMessage>
    </ErrorBannerContainer>
  );
}

export default ErrorBanner;
