import React, { useState, useEffect } from "react";
import { PasswordTogglerContainer } from "./PasswordToggler.Styles";

function PasswordVisibilityToggler({ togglerCallback, ...otherProps }) {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    togglerCallback && togglerCallback(isShown);
  }, [isShown, togglerCallback]);
  const onClick = (e) => {
    e.preventDefault();
    setIsShown(!isShown);
  };
  return (
    <PasswordTogglerContainer
      type="button"
      tabIndex="-1"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      {...otherProps}
      title={`${isShown ? "Hide" : "Show"} Password`}
    >
      {isShown ? "Hide" : "Show"}
    </PasswordTogglerContainer>
  );
}

export default PasswordVisibilityToggler;
