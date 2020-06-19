import React from "react";

import {
  CollectionButtonsMain,
  ActionIcon,
  SVGCircle,
} from "./CollectionActionButtons.Styles";

import {
  faThumbsUp as regularFaThumpsUp,
  // faThumbsDown as regularFaThumbsDown,
} from "@fortawesome/free-regular-svg-icons";

import {
  faPlus,
  faCheck,
  // faThumbsDown,
  faSpinner,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function CollectionActionButtons({ accountStates, isLoading, onClick }) {
  const { watchlist: watched, favorite } = accountStates;
  const loadingClass = isLoading && "fa-spin";
  return (
    <CollectionButtonsMain>
      <SVGCircle>
        <ActionIcon
          icon={
            isLoading ? faSpinner : favorite ? faThumbsUp : regularFaThumpsUp
          }
          onClick={onClick}
          className={loadingClass}
          name="favorite"
        />
      </SVGCircle>
      {/* {!favorite && (
        <SVGCircle>
          <ActionIcon
            icon={isLoading ? faSpinner : regularFaThumbsDown}
            className={loadingClass}
            onClick={onClick}
            name="unfavorite"
          />
        </SVGCircle>
      )} */}
      <SVGCircle>
        <ActionIcon
          icon={isLoading ? faSpinner : watched ? faCheck : faPlus}
          className={loadingClass}
          onClick={onClick}
          name="watchlist"
        />
      </SVGCircle>
    </CollectionButtonsMain>
  );
}

export default CollectionActionButtons;
