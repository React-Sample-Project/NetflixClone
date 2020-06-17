import React from "react";
import {
  SearchInput as SearchInputMain,
  SearchBox,
} from "./SearchInput.Styles";
import SearchIcon from "../SearchIcon/SearchIcon";

function SearchInput({ onFocus, onBlur, focused, onChange, value }) {
  return (
    <SearchInputMain>
      <SearchIcon />
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
