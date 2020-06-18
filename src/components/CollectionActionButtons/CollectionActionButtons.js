import React from "react";

import {
  CollectionButtonsMain,
  ActionIcon,
  SVGCircle,
} from "./CollectionActionButtons.Styles";

import {
  faPlus,
  faSpinner,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import account from "../../services/Account";

function CollectionActionButtons({ mediaId, mediaType }) {
  const addToWatchList = async () => {
    await account.addToWatchList(mediaId, mediaType);
  };
  return (
    <CollectionButtonsMain>
      <SVGCircle>
        <ActionIcon icon={faThumbsUp} />
      </SVGCircle>
      <SVGCircle>
        <ActionIcon icon={faThumbsDown} />
      </SVGCircle>
      <SVGCircle>
        <ActionIcon
          icon={faSpinner}
          className="fa-spin"
          onClick={addToWatchList}
        />
      </SVGCircle>
    </CollectionButtonsMain>
  );
}

export default CollectionActionButtons;
