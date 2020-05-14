import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { SearchBoxMain } from "./SearchBox.Styles";
import { NavIcon } from "../Navbar/Navbar.Styles";

import SearchInput from "../SearchInput";

function SearchBox() {
  const [inputShown, setInputShown] = useState(false);
  const [inputFocused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();
  const onInputChange = ({ target: { value } }) => {
    if (value) {
      history.push(`/search?q=${value}`);
    } else {
      history.goBack();
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
  const searchIconStyle = {
    fontSize: "1.3em",
    verticalAlign: "middle",
    marginRight: 0,
    padding: "0 6px",
    lineHeight: 1,
    width: "auto",
  };
  return (
    <SearchBoxMain>
      {inputShown ? (
        <SearchInput
          searchIconStyle={searchIconStyle}
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
          <FontAwesomeIcon icon={faSearch} style={searchIconStyle} />
        </NavIcon>
      )}
    </SearchBoxMain>
  );
}

export default SearchBox;
