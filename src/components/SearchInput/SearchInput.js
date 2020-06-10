import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  SearchInput as SearchInputMain,
  SearchBox,
} from "./SearchInput.Styles";

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
      <SearchBox
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        autoFocus={true}
        placeholder="Search movies"
        onChange={onChange}
        style={focused ? { opacity: 1, transitionDuration: "300ms" } : {}}
      />
    </SearchInputMain>
  );
}

export default SearchInput;
