import React, { useState, useRef, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { SearchBoxMain, SearchIconWrapper } from "./SearchBox.Styles";

import SearchInput from "../SearchInput";
import SearchIcon from "../SearchIcon/SearchIcon";

function SearchBox() {
  const [inputShown, setInputShown] = useState(false);
  const [inputFocused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const pathRef = useRef(null);
  const history = useHistory();
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (!pathname.includes("search")) {
      !inputFocused && setInputShown(false);
      setSearchValue("");
    }
  }, [pathname, inputFocused]);

  const onInputChange = ({ target: { value } }) => {
    if (value.length === 1 && !pathRef.current) {
      pathRef.current = pathname;
    }

    history.push(
      value
        ? {
            pathname: `/search`,
            search: `?q=${value}`,
            state: { ...state, type: "movie" },
          }
        : {
            pathname: pathRef.current,
            state: { ...state },
          }
    );
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
        <SearchIconWrapper as="button" tabIndex="0" onClick={onButtonClick}>
          <SearchIcon />
        </SearchIconWrapper>
      )}
    </SearchBoxMain>
  );
}

export default SearchBox;
