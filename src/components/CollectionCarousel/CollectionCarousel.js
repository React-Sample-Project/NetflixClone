import React from "react";
import { useRouteMatch } from "react-router-dom";
import {
  CarouselTitleCard,
  CardHeading,
  CardTitle,
  CarouselContainer,
} from "./CollectionCarousel.Styles";
import CollectionSlider from "../CollectionSlider/CollectionSlider";

function CollectionCarousel({ isLoading, genreName, movie, tv, genreId }) {
  const match = useRouteMatch();
  return (
    <CarouselTitleCard>
      <CardHeading isLoading={isLoading}>
        {isLoading ? (
          "\u00A0"
        ) : (
          <CardTitle to={`${match.url}/genre/${genreId}`}>
            {genreName}
          </CardTitle>
        )}
      </CardHeading>
      <CarouselContainer>
        <CollectionSlider isLoading={isLoading} items={movie || tv} />
      </CarouselContainer>
    </CarouselTitleCard>
  );
}

export default CollectionCarousel;
