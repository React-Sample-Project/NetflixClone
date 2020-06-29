import React, { forwardRef } from "react";

import {
  CollectionButtonsMain,
  SVGCircle,
} from "./CollectionActionButtons.Styles";

import { faThumbsUp as regularFaThumpsUp } from "@fortawesome/free-regular-svg-icons";

import { faPlus, faCheck, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import ActionIcon from "../ActionIcon";

const CollectionActionButtons = forwardRef(
  ({ accountStates, isLoading, onClick, loadingIconType }, ref) => {
    const { watchlist: watched, favorite } = accountStates;
    return (
      <CollectionButtonsMain ref={ref}>
        <SVGCircle>
          <ActionIcon
            isLoading={isLoading || loadingIconType === "favorite"}
            value={favorite}
            trueIcon={faThumbsUp}
            falseIcon={regularFaThumpsUp}
            onClick={onClick}
            name="favorite"
          />
        </SVGCircle>
        <SVGCircle>
          <ActionIcon
            isLoading={isLoading || loadingIconType === "watchlist"}
            value={watched}
            trueIcon={faCheck}
            falseIcon={faPlus}
            onClick={onClick}
            name="watchlist"
          />
        </SVGCircle>
      </CollectionButtonsMain>
    );
  }
);

export default CollectionActionButtons;
