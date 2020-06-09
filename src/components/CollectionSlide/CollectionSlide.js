import React from "react";
import { CollectionSlideContainer } from "./CollectionSlide.Styles";
import SlideInfo from "../SlideInfo";
import LoadingSlide from "../LoadingSlide/LoadingSlide";

function CollectionSlide({ isLoading, title, ...otherProps }) {
  const children = isLoading ? (
    <LoadingSlide />
  ) : (
    title && <SlideInfo title={title} {...otherProps} />
  );

  return <CollectionSlideContainer>{children}</CollectionSlideContainer>;
}

export default CollectionSlide;
