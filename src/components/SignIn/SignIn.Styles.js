import styled from "styled-components";

import Label from "../Label";

import Button from "../Button";

import Input from "../Input";

export const SignInInner = styled.div`
  flex-grow: 1;
`;

export const SignInHeader = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
`;

export const SignInInput = styled(Input)`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 16px 20px 0;
  font-size: 16px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
    background: #454545;
  }
`;

export const SignInLabel = styled(Label)`
  left: 20px;
  font-size: 16px;
  position: absolute;
  top: 50%;
  color: #8c8c8c;
  transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
  transform: translateY(-50%);
  ${({ htmlFor }) => (htmlFor === "password" ? "flex-grow: 1;" : "")}
  ${({ floatUp }) =>
    floatUp &&
    `
      top: 4px;
      font-size: 11px;
      transform: translateY(0);
      top: 7px;
    `}
`;

export const SignInButton = styled(Button)`
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 12px;
  width: 100%;
  max-width: 100%;
  padding: 16px;
`;

export const PasswordLabel = styled(Label)`
  flex-grow: 1;
`;

export const SignInLabelWrapper = styled(Label)`
  box-sizing: border-box;
`;

export const InputWrapper = styled.div`
  position: relative;
  border: 0;
  border-radius: 4px;
  background: #454545;
  ${({ isPassword }) => isPassword && "display:flex"}
`;

export const InputMainWrapper = styled.div`
  max-width: 100%;
  padding-bottom: 16px;
`;
