import React from "react";
import { useRouteMatch } from "react-router-dom";
import {
  CarouselTitleCard,
  CardHeading,
  CardTitle,
  CarouselContainer,
} from "./CollectionCarousel.Styles";
import CollectionSlider from "../CollectionSlider/CollectionSlider.Component";

function CollectionCarousel({ genreName, movie, tv, genreId }) {
  const match = useRouteMatch();
  return (
    <CarouselTitleCard>
      <CardHeading>
        <CardTitle to={`${match.url}/genre/${genreId}`}>{genreName}</CardTitle>
      </CardHeading>
      <CarouselContainer>
        <CollectionSlider items={movie || tv} />
      </CarouselContainer>
    </CarouselTitleCard>
  );
}

export default CollectionCarousel;
