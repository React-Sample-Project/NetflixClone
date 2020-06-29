import styled from "styled-components";
import Button from "../../components/Button";
import { default as ActionButton } from "../../components/ActionIcon";
import { SVGCircle } from "../../components/CollectionActionButtons/CollectionActionButtons.Styles";

export const BackgroundCover = styled.div`
  background-size: cover;
  display: block;
  height: 100%;
  opacity: 0.5;
  min-height: 100vh;
  position: absolute;
  width: 100%;
  z-index: -1;
  overflow: hidden;
`;

export const MediaInfoContainer = styled.div`
  min-height: 100vh;
  background-color: transparent;
  max-width: 1000px;
  color: rgb(51, 51, 51);
  padding: 20px 5%;
  margin: 0 auto;
`;

export const MainContainer = styled.div`
  min-height: 800px;
  display: flex;
  min-width: 680px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  border-radius: 4px;
  flex-direction: column;
  padding: 60px 68px 40px;
  color: rgb(255, 255, 255);
  margin: 0px 0px 90px;
  > div {
    margin-top: 20px;
  }
`;

export const MediaTitle = styled.h1`
  margin-bottom: 12px;
  font-size: 35px;
  line-height: 36px;
  height: fit-content;
  padding-right: 10px;
`;

export const ExtraInfo = styled.div`
  display: flex;
  font-size: 15px;
  line-height: 20px;
  padding-right: 5px;
  flex-flow: row wrap;
  order: 0;
`;

export const Info = styled.span`
  display: flex;
  align-items: center;
  padding-right: 5px;
`;

export const Description = styled.div``;

export const CrewWrapper = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
`;

export const ButtonsWrapper = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  && {
    margin-top: 30px;
  }
`;

export const Crew = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CrewRow = styled.div`
  padding-bottom: 5px;
`;
export const CrewLabel = styled.span`
  padding-right: 30px;
`;

export const MediaButton = styled(Button)`
  color: rgb(24, 24, 24);
  border-radius: 0.3rem;
  font-weight: bold;
  padding: 18px;
  height: 40px;
  font-size: 1.2rem;
`;

export const CustomActionIcon = styled(ActionButton)`
  && {
    padding-right: 10px;
    color: #333;
    fill: #333;
  }
`;

export const CustomSVGCircle = styled(SVGCircle)`
  width: 1.6em;
  height: 1.6em;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 10px;
`;

export const ActionIcon = styled(ActionButton)`
  padding-bottom: 4px;
`;
