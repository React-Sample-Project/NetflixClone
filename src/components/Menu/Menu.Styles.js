import styled from "styled-components";

export const MenuMain = styled.ul`
  position: absolute;
  width: 100px;
  margin: 0;
  top: 100%;
  left: auto;
  padding: 5px;
  z-index: 1;
  margin: 5px;
  box-sizing: border-box;
  height: auto;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-weight: bold;
  text-align: left;
  border: solid 1px rgba(255, 255, 255, 0.15);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  cursor: pointer;

  display: ${({ show }) => (show ? "block" : "none")};
`;

export const MenuItem = styled.li`
  line-height: 1.5rem;
  display: block;
  box-sizing: border-box;
`;
