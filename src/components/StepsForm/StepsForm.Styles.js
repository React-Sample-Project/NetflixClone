import styled from "styled-components";
import { PasswordTogglerContainer } from "../PasswordToggler/PasswordToggler.Styles";
import { SignInInput } from "../SignIn/SignIn.Styles";

export const CustomButton = styled(PasswordTogglerContainer)`
  background: grey;
  margin-top: 10px;
  border-radius: 0px 4px 4px 0px;
  height: 60px;
`;

export const StepFormsMain = styled.div`
  position: relative;
  display: flex;
  margin-right: 10px;
  width: 400px;
`;

export const CustomInput = styled(SignInInput)`
  margin-top: 10px;
  background-color: #fff;
  flex-grow: 1;
  color: black;
  border-radius: 4px 0px 0px 4px;
  padding-left: 20px;
  height: 60px;
  &:focus {
    background: #fff;
  }
`;

export const MessageText = styled.span`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-right: 210px;
`;

export const StepFormsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  flex-direction: column;
`;
