import React from "react";
import { CollectionSlideContainer } from "./CollectionSlide.Styles";
import SlideInfo from "../SlideInfo";
import LoadingSlide from "../LoadingSlide/LoadingSlide";
import { useParams, Link, useLocation } from "react-router-dom";
import { getCorrectedMediaType } from "../../utils";

function CollectionSlide({ isLoading, title, id, ...otherProps }) {
  const { type, mediaType: infoType } = useParams();
  const { state } = useLocation();
  const mediaType = type || infoType || state.type;
  const children = isLoading ? (
    <LoadingSlide />
  ) : (
    title && (
      <SlideInfo title={title} id={id} mediaType={mediaType} {...otherProps} />
    )
  );
  const correctedType = getCorrectedMediaType(mediaType);
  return (
    <CollectionSlideContainer as={Link} to={`/${correctedType}/${id}`}>
      {children}
    </CollectionSlideContainer>
  );
}

export default CollectionSlide;
