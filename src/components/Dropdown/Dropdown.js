import React from "react";
import { default as DropdownComponent } from "react-dropdown";
import "react-dropdown/style.css";
import "./Dropdown.Styles.css";
function Dropdown({
  options,
  className,
  controlClassName,
  menuClassName,
  arrowClassName,
  ...otherProps
}) {
  const dropdownOpts = options.map((option) => ({
    ...option,
    className: "dropdown__option",
  }));
  return (
    <DropdownComponent
      className={className}
      options={dropdownOpts}
      {...otherProps}
      arrowClassName={arrowClassName || ""}
      controlClassName={`dropdown__control ${controlClassName || ""}`}
      menuClassName={`dropdown__menu ${menuClassName || ""}`}
    />
  );
}

export default Dropdown;
