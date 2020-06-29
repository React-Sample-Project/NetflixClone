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
  onClick,
  ...otherProps
}) {
  const loadingClass = isLoading && "fa-spin";

  return (
    <ActionIconMain
      {...otherProps}
      className={`${className || ""} ${loadingClass || ""}`}
      icon={icon || (isLoading ? faSpinner : value ? trueIcon : falseIcon)}
      onClick={onClick}
    />
  );
}

export default ActionIcon;
