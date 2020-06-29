import React from "react";
import SlideInfo from "../SlideInfo";
import LoadingSlide from "../LoadingSlide/LoadingSlide";

function CollectionSlide({ isLoading, title, id, ...otherProps }) {
  const Component = isLoading ? (
    <LoadingSlide />
  ) : title ? (
    <SlideInfo title={title} id={id} {...otherProps} />
  ) : null;
  return Component;
}

export default CollectionSlide;
