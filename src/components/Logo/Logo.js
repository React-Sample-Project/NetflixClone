import React from "react";
import { LogoIcon, LogoLink } from "./Logo.Styles";

function Logo({ path, className }) {
  return (
    <LogoLink to={path} className={className}>
      <LogoIcon />
    </LogoLink>
  );
}

export default Logo;
