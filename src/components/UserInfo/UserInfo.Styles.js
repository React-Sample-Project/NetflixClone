import styled from "styled-components";

export const UserInfoMain = styled.div`
  display: block;
  position: relative;
  font-size: 12px;
  z-index: 0;
`;

export const UserInfoButton = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const UserNameContainer = styled.span`
  font-weight: bold;
`;

export const DropdownIcon = styled.span`
  margin-left: 10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #fff transparent transparent transparent;
`;

export const Dropdown = styled.div`
  position: absolute;
  width: 100px;
  margin: 0;
  right: 0;
  top: 100%;
  left: auto;
  padding: 5px;
  z-index: 1;
  margin: 5px;
  box-sizing: border-box;
  height: auto;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  line-height: 21px;
  text-align: right;
  border: solid 1px rgba(255, 255, 255, 0.15);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  cursor: pointer;

  display: ${({ show }) => (show ? "block" : "none")};
`;
