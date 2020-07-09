import React, { useState, useEffect, useRef } from "react";
import { MenuMain, MenuItem } from "./Menu.Styles";

function Menu({ items, onSelect, refNode }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const menuRef = useRef(null);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const onClick = (e, item) => {
    e.preventDefault();
    if (onSelect) {
      onSelect(item);
    }
  };
  const handleOutsideClick = ({ target }) => {
    if (
      !refNode?.contains(target) &&
      !menuRef?.current?.contains(target) &&
      showDropdown
    ) {
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    if (refNode) {
      refNode.addEventListener("mousedown", toggleDropdown);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      if (refNode) {
        refNode.removeEventListener("mousedown", toggleDropdown);
      }
    };
  });
  return (
    <MenuMain show={showDropdown} ref={menuRef}>
      {items.map((item) => (
        <MenuItem key={item.key} onMouseDown={(e) => onClick(e, item)}>
          {item.value}
        </MenuItem>
      ))}
    </MenuMain>
  );
}

export default Menu;
