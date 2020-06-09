import React, { useState } from "react";
import {
  Carousel as BootstrapCarousel,
  CarouselItem,
  CarouselControl,
} from "reactstrap";

import "./Carousel.Styles.css";
import Image from "../Image/Image";

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
        <Image
          src={item.backdrop_path}
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
