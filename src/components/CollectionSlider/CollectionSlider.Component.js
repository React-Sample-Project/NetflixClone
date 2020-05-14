import React from "react";
import Slider from "react-slick";
import CollectionSlide from "../CollectionSlide/CollectionSlide.Component";
import SliderArrow from "../SliderArrow/SliderArrow.Component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CollectionSlider.Styles.css";

function CollectionSlider({
  items,
  isLoading,
  doNotAddControls,
  length = 6,
  className,
}) {
  const controls = !isLoading && !doNotAddControls;
  const settings = {
    dots: controls,
    arrows: controls,
    infinite: true,
    speed: 500,
    adaptiveHeight: false,
    lazyLoad: true,
    slidesToShow: length,
    slidesToScroll: length,
    /** To do: It is not working: Purpose was to change the height */
    className: `slider__inner ${className}`,
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          zIndex: 2,
          bottom: 0,
          top: "-25px",
          right: "4%",
          width: "auto",
        }}
      >
        {dots}{" "}
      </ul>
    ),
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow isLeft={true} />,
  };
  let slides;
  if (isLoading) {
    slides = Array(6)
      .fill(0)
      .map((val, index) => (
        <CollectionSlide key={index} isLoading={isLoading} />
      ));
  } else {
    slides = items.map(
      ({ backdrop_path, poster_path, original_title, id, ...otherProps }) => (
        <CollectionSlide
          image={poster_path}
          title={original_title}
          key={poster_path}
          id={id}
          {...otherProps}
        ></CollectionSlide>
      )
    );
  }

  return <Slider {...settings}>{slides}</Slider>;
}

export default CollectionSlider;
