import React, { useState } from "react";
import SeeMore from "../SeeMore/SeeMore";
import { isContentOverflown } from "../../utils/utils";

import { MovieInfoContainer, MovieTitle, MovieInfo } from "./SlideInfo.Styles";
import Image from "../Image/Image";

function SlideInfo({ title, overview, image }) {
  const [expanded, setExpanded] = useState(false);
  const movieDescriptionRef = React.useRef();
  const [isOverflown, setIsOverflown] = useState(false);

  const onMouseEnter = () => {
    if (movieDescriptionRef.current) {
      setIsOverflown(isContentOverflown(movieDescriptionRef.current));
    }
  };
  const onSeeMoreClick = () => setExpanded((expanded) => !expanded);
  return (
    <>
      <Image
        onMouseEnter={onMouseEnter}
        className="blurimg-on-hover"
        src={image}
        alt={title}
        style={{ width: "100%", height: "200px" }}
      />
      <MovieInfoContainer className="showmovieinfo-on-hover">
        <MovieTitle>{title}</MovieTitle>
        <MovieInfo ref={movieDescriptionRef} expanded={expanded}>
          {overview}
        </MovieInfo>
        {isOverflown && (
          <SeeMore expanded={expanded} onClick={onSeeMoreClick} />
        )}
      </MovieInfoContainer>
    </>
  );
}

export default SlideInfo;
