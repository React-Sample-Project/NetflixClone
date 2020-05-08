import React from "react";
import Slider from "react-slick";
import CollectionSlide from "../CollectionSlide/CollectionSlide.Component";
import SliderArrow from "../SliderArrow/SliderArrow.Component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CollectionSlider.Styles.css";

function CollectionSlider({ items, doNotAddControls }) {
  const settings = {
    dots: !doNotAddControls,
    arrows: !doNotAddControls,
    infinite: true,
    speed: 500,
    adaptiveHeight: false,
    lazyLoad: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    /** To do: It is not working: Purpose was to change the height */
    className: "slider__inner",
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
  const slides = items.map(
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
  return <Slider {...settings}>{slides}</Slider>;
}

export default CollectionSlider;
