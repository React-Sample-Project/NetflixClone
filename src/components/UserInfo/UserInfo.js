import React, { useState } from "react";

import {
  UserInfoMain,
  UserInfoButton,
  DropdownIcon,
  UserNameContainer,
  Dropdown,
} from "./UserInfo.Styles";
import auth from "../../services/Auth";
import account from "../../services/Account";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";

function UserInfo() {
  const { username } = account.getUserInfo();
  const history = useHistory();
  const [showDropdown, setShowDropdown] = useState(false);
  const [, setIsLoggedIn] = useAuth();
  const logout = async (e) => {
    e.preventDefault();
    const success = await auth.logout();
    if (success) {
      history.push("/");
      setIsLoggedIn(false);
    }
    setShowDropdown(false);
  };
  return (
    <UserInfoMain>
      <UserInfoButton
        onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
      >
        <UserNameContainer>{`Hi, ${
          auth.getUserSession() ? username : "Guest"
        }`}</UserNameContainer>
        <DropdownIcon />
        <Dropdown show={showDropdown} onClick={logout}>
          Sign Out
        </Dropdown>
      </UserInfoButton>
    </UserInfoMain>
  );
}

export default UserInfo;
