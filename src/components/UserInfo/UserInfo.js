import React, { useRef } from "react";
import Menu from "../Menu";
import {
  UserInfoMain,
  UserInfoButton,
  UserNameContainer,
} from "./UserInfo.Styles";
import auth from "../../services/Auth";
import account from "../../services/Account";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import DownArrowIcon from "../DownArrowIcon/DownArrowIcon";

function UserInfo() {
  const userInfo = account.getUserInfo();
  const history = useHistory();
  const [, setIsLoggedIn] = useAuth();
  const refNode = useRef(null);
  const logout = async (item) => {
    if (item.key === 1) {
      const success = await auth.logout();
      if (success) {
        history.push("/");
        setIsLoggedIn(false);
      }
    }
  };
  const items = [{ key: 1, value: "Sign Out" }];
  return (
    <UserInfoMain>
      <UserInfoButton ref={refNode}>
        <UserNameContainer>{`Hi, ${
          auth.getUserSession() ? userInfo.username : "Guest"
        }`}</UserNameContainer>
        <DownArrowIcon />
      </UserInfoButton>
      <Menu onSelect={logout} items={items} refNode={refNode?.current} />
    </UserInfoMain>
  );
}

export default UserInfo;
