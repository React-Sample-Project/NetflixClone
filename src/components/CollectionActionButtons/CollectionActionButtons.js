import React from "react";

import {
  CollectionButtonsMain,
  ActionIcon,
  SVGCircle,
} from "./CollectionActionButtons.Styles";

import {
  faPlus,
  faCheck,
  faSpinner,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

function CollectionActionButtons({ accountStates, isLoading, onClick }) {
  const { watchlist: watched, favorite } = accountStates;
  return (
    <CollectionButtonsMain>
      <SVGCircle>
        <ActionIcon
          icon={isLoading ? faSpinner : faThumbsUp}
          onClick={onClick}
          className={isLoading ? "fa-spin" : favorite ? "fas" : "far"}
          name="favorite"
        />
      </SVGCircle>
      {!favorite && (
        <SVGCircle>
          <ActionIcon
            icon={isLoading ? faSpinner : faThumbsDown}
            className={isLoading && "fa-spin"}
            onClick={onClick}
            name="unfavorite"
          />
        </SVGCircle>
      )}
      <SVGCircle>
        <ActionIcon
          icon={isLoading ? faSpinner : watched ? faCheck : faPlus}
          className={isLoading && "fa-spin"}
          onClick={onClick}
          name="watchlist"
        />
      </SVGCircle>
    </CollectionButtonsMain>
  );
}

export default CollectionActionButtons;
