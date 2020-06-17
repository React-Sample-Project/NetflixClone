import React, { useState, useRef, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { SearchBoxMain } from "./SearchBox.Styles";
import { NavIcon } from "../Navbar/Navbar.Styles";

import SearchInput from "../SearchInput";
import SearchIcon from "../SearchIcon/SearchIcon";

function SearchBox() {
  const [inputShown, setInputShown] = useState(false);
  const [inputFocused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const pathRef = useRef(null);
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (!pathname.includes("search")) {
      !inputFocused && setInputShown(false);
      setSearchValue("");
    }
  }, [pathname, inputFocused]);

  const onInputChange = ({ target: { value } }) => {
    if (value.length === 1 && !pathRef.current) {
      pathRef.current = location.pathname;
    }

    history.push(value ? `/search?q=${value}` : pathRef.current);
    if (!value) {
      pathRef.current = null;
    }
    setSearchValue(value);
  };

  const onInputFocus = () => setFocused(true);

  const onInputBlur = () => {
    setFocused(false);
    if (!searchValue) {
      setInputShown(false);
    }
  };

  const onButtonClick = () => setInputShown(true);

  return (
    <SearchBoxMain>
      {inputShown ? (
        <SearchInput
          onFocus={onInputFocus}
          onChange={onInputChange}
          value={searchValue}
          onBlur={onInputBlur}
          focused={inputFocused}
        />
      ) : (
        <NavIcon
          as="button"
          style={{ border: "none", outline: "none" }}
          tabIndex="0"
          onClick={onButtonClick}
        >
          <SearchIcon />
        </NavIcon>
      )}
    </SearchBoxMain>
  );
}

export default SearchBox;
