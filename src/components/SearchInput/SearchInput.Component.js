import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchInput as SearchInputMain, InputCSS } from "./SearchInput.Styles";

import Input from "../Input/Input.Component";

function SearchInput({
  searchIconStyle,
  onFocus,
  onBlur,
  focused,
  onChange,
  value,
}) {
  return (
    <SearchInputMain>
      <FontAwesomeIcon icon={faSearch} style={searchIconStyle} />
      <Input
        customStyle={InputCSS}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        style={focused ? { opacity: 1, transitionDuration: "300ms" } : {}}
      />
    </SearchInputMain>
  );
}

export default SearchInput;
