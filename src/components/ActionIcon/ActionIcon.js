import React from "react";
import { ActionIconMain } from "./ActionIcon.Styles";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function ActionIcon({
  isLoading,
  value,
  trueIcon,
  falseIcon,
  icon,
  className,
  ...otherProps
}) {
  // console.log(otherProps);
  const loadingClass = isLoading && "fa-spin";

  return (
    <ActionIconMain
      {...otherProps}
      className={`${className || ""} ${loadingClass || ""}`}
      icon={icon || (isLoading ? faSpinner : value ? trueIcon : falseIcon)}
    />
  );
}

export default ActionIcon;
