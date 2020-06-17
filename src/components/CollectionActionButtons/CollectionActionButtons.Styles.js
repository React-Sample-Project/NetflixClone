import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CollectionButtonsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.35rem;
`;
export const SVGButton = styled.a`
  pointer-events: auto;
  display: flex;
  width: 0.6em;
  height: 0.6em;
  justify-content: center;
  align-items: center;
`;

export const SVGCircle = styled(SVGButton)`
  border: 0.05em solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  padding: 0.3em;
  margin: 0.25em;
  background: rgba(0, 0, 0, 0.5);
`;

export const ActionIcon = styled(FontAwesomeIcon)`
  color: #fff;
  fill: #fff;
  width: 1rem !important;
  height: 1rem;
  overflow: hidden !important;
`;
