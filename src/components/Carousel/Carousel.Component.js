import React, { useState } from "react";
import {
  Carousel as BootstrapCarousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
} from "reactstrap";

import "./Carousel.Styles.css";

function Carousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem key={item.poster_path} className="another">
        <img
          src={`${process.env.REACT_APP_IMAGE_BASE_URL}${item.backdrop_path}`}
          // src="https://image.tmdb.org/t/p/w500/eZm0fWJtVftiqs5kKOOzke8nJIR.jpg"
          alt={item.original_title}
          className="image"
        />
      </CarouselItem>
    );
  });
  return (
    <BootstrapCarousel
      activeIndex={activeIndex}
      next={next}
      interval={false}
      previous={previous}
    >
      {slides}

      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </BootstrapCarousel>
  );
}

export default Carousel;
