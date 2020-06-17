import React from "react";
import { default as DropdownComponent } from "react-dropdown";
import "react-dropdown/style.css";
import "./Dropdown.Styles.css";
function Dropdown({ options, ...otherProps }) {
  const dropdownOpts = options.map((option) => ({
    ...option,
    className: "dropdown__option",
  }));
  return (
    <DropdownComponent
      options={dropdownOpts}
      {...otherProps}
      controlClassName="dropdown__control"
      menuClassName="dropdown__menu"
    />
  );
}

export default Dropdown;
