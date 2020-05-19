import React from "react";
import { CollectionSlideContainer } from "./CollectionSlide.Styles";
import SlideInfo from "../SlideInfo";
import LoadingSlide from "../LoadingSlide/LoadingSlide.Component";

function CollectionSlide({ isLoading, title, ...otherProps }) {
  console.log(isLoading);
  const children = isLoading ? (
    <LoadingSlide />
  ) : (
    title && <SlideInfo title={title} {...otherProps} />
  );

  return <CollectionSlideContainer>{children}</CollectionSlideContainer>;
}

export default CollectionSlide;
