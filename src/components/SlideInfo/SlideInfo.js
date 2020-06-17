import React from "react";
// import SeeMore from "../SeeMore/SeeMore";
// import { isContentOverflown } from "../../utils";
import { useParams } from "react-router-dom";
import {
  MovieInfoContainer,
  MovieTitle,
  // MovieInfo,
  // MovieActionsWrapper,
} from "./SlideInfo.Styles";

import Image from "../Image/Image";
import CollectionActionButtons from "../CollectionActionButtons/CollectionActionButtons";

function SlideInfo({ title, overview, image, id }) {
  const { type } = useParams();
  // const [expanded, setExpanded] = useState(false);
  // const movieDescriptionRef = React.useRef();
  // const [isOverflown, setIsOverflown] = useState(false);

  // const onMouseEnter = () => {
  //   if (movieDescriptionRef.current) {
  //     setIsOverflown(isContentOverflown(movieDescriptionRef.current));
  //   }
  // };
  // const onSeeMoreClick = () => setExpanded((expanded) => !expanded);
  return (
    <>
      <Image
        // onMouseEnter={onMouseEnter}
        className="blurimg-on-hover"
        src={image}
        alt={title}
        style={{ width: "100%", height: "200px" }}
      />
      <MovieInfoContainer className="showmovieinfo-on-hover">
        <MovieTitle>{title}</MovieTitle>
        <CollectionActionButtons mediaId={id} mediaType={type} />
        {/* <MovieInfo ref={movieDescriptionRef} expanded={expanded}>
          {overview}
        </MovieInfo>
        {isOverflown && (
          <SeeMore expanded={expanded} onClick={onSeeMoreClick} />
        )} */}
      </MovieInfoContainer>
    </>
  );
}

export default SlideInfo;
