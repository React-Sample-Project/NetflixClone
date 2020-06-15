import styled from "styled-components";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GuestButton = styled(Button)`
  margin-top: 16px;
  min-height: 0;
  width: auto;
  border: none;
  background: 0 0;
  padding: 0;
  margin: 0;
`;

export const GuestIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  vertical-align: middle;
  height: 20px;
  width: 20px;
  color: #fff;
`;

export const GuestText = styled.span`
  color: #737373;
  font-size: 13px;
  font-weight: 500;
`;
