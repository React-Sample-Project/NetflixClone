import styled from "styled-components";


export const AuthContainer = styled.div`
  background-color: #000;
  color: #fff;
`;
export const AuthMain = styled.div`
  @media only screen and (min-width: 740px) {
    > div {
      min-height: 100%;
      margin: 0;
      padding: 0;
      position: relative;
      z-index: 0;
    }
  }
  display: none;
`;

export const AuthBackground = styled.div`
  @media only screen and (min-width: 740px) {
    background-size: cover;
    display: block;
    height: 100%;
    opacity: 0.5;
    min-height: 100vh;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
  display: none;
`;

export const AuthHeader = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-bottom: transparent;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0,
    rgba(0, 0, 0, 0) 100%
  );
`;
export const AuthBody = styled.div`
  &:before {
    content: "";
    height: 91px;
    display: block;
  }
  margin: 0 auto -236px;
  min-height: 100vh;
  background-color: transparent;
  max-width: 450px;
  padding: 0 5%;
  color: #333;
  &:after {
    content: "";
    height: 236px;
    display: block;
  }
`;

export const AuthBodyWrapper = styled.div`
  min-height: 460px;
  display: flex;
  border-radius: 4px;
  min-width: 380px;
  flex-direction: column;
  padding: 60px 68px 40px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  margin: 0;
  box-sizing: border-box;
  margin-bottom: 90px;
`;
