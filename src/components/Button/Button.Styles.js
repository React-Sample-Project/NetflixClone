import styled, { css } from "styled-components";

const SmallButton = css`
  display: inline-block;
  font-size: 13px;
  padding: 16px;
  min-width: 98px;
  min-height: 37px;
  margin-right: 0.5em;
  width: auto;
  line-height: 1em;
`;

const getSize = (size) => {
  switch (size) {
    case "small":
      return SmallButton;
    default:
      return;
  }
};

const getButtonStyles = ({ size }) => {
  return css`
    ${getSize(size)}
  `;
};

export const ButtonContainer = styled.button`
  position: relative;
  font-size: 1em;
  padding: 24.5px 2em;
  min-width: 74px;
  min-height: 50px;
  margin: 0.5em 0.5em 0.5em 0;
  color: #fff;
  border: 0;
  user-select: none;
  text-align: center;
  vertical-align: middle;
  letter-spacing: 0.1px;
  background: ${({ bgColor }) => bgColor};
  ${(props) => getButtonStyles(props)}
`;
