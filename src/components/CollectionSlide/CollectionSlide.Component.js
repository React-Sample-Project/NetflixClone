import React, { useState } from "react";
// import { fetchYoutubeTrailerId } from "../../services/Movies";
import {
  MovieInfoContainer,
  MovieTitle,
  MovieInfo,
  CollectionSlideContainer,
} from "./CollectionSlide.Styles";
import SeeMore from "../SeeMore/SeeMore.Component";
import { isContentOverflown } from "../../utils/utils";

function CollectionSlide({ image, title, id, overview }) {
  // const [showVideo, setShowVideo] = useState(false);
  // const [youtubeId, setYoutubeId] = useState(null);
  const movieDescriptionRef = React.useRef();
  const [isOverflown, setIsOverflown] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const onSeeMoreClick = () => {
    return setExpanded((expanded) => !expanded);
  };
  const onMouseEnter = () => {
    // if (!showVideo) {
    //   setShowVideo(true);
    // }
    if (movieDescriptionRef.current) {
      setIsOverflown(isContentOverflown(movieDescriptionRef.current));
    }
  };
  // const onMouseLeave = () => {
  //   if (showVideo) {
  //     setShowVideo(false);
  //   }
  // };
  // useEffect(() => {
  //   // async function fetchTrailerId() {
  //   //   const trailedId = await fetchYoutubeTrailerId(id);
  //   //   if (trailedId) {
  //   //     setYoutubeId(trailedId);
  //   //   }
  //   // }
  //   // if (showVideo) {
  //   //   fetchTrailerId();
  //   // }
  // }, [showVideo, id]);
  return (
    <CollectionSlideContainer
      onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
    >
      {/* {showVideo && youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?controls=0&autoplay=1`}
          style={{ width: "100%" }}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title={title}
        ></iframe>
      ) : ( */}
      <img
        className="blurimg-on-hover"
        src={`${process.env.REACT_APP_IMAGE_BASE_URL}${image}`}
        alt={title}
        style={{ width: "100%", height: "225px" }}
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
    </CollectionSlideContainer>
  );
}

export default CollectionSlide;
