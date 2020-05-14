import React from "react";
import { CollectionSlideContainer } from "./CollectionSlide.Styles";
import SlideInfo from "../SlideInfo";
import LoadingSlide from "../LoadingSlide/LoadingSlide.Component";

function CollectionSlide({ isLoading, ...otherProps }) {
  return (
    <CollectionSlideContainer>
      {isLoading ? <LoadingSlide /> : <SlideInfo {...otherProps} />}
    </CollectionSlideContainer>
  );
}

export default CollectionSlide;
