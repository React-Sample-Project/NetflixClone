import styled from "styled-components";


export const CollectionButtonsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.35rem;
`;
export const SVGButton = styled.span`
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
  cursor: pointer;
  margin: 0.25em;
  background: rgba(0, 0, 0, 0.5);
`;

