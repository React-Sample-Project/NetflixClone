import styled from "styled-components";
import Input from "../Input/Input";

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  border: solid 1px rgba(255, 255, 255, 0.85);
`;

export const SearchBox = styled(Input)`
  color: #fff;
  display: inline-block;
  background: transparent;
  border: none;
  padding: 7px 14px 7px 7px;
  font-size: 14px;
  width: 212px;
  outline: none;
`;
