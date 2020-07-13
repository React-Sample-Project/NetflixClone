import React, { useCallback, useState } from "react";
import Slider from "react-slick";
import CollectionSlide from "../CollectionSlide/CollectionSlide";
import SliderArrow from "../SliderArrow/SliderArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getNumArray } from "../../utils";
import "./CollectionSlider.Styles.css";
import useWindow from "../../hooks/useWindow/useWindow";

function CollectionSlider({ items, isLoading, doNotAddControls, className }) {
  const calculatedLen = Math.ceil(window.innerWidth / 320);
  const [slideLength, setSlideLength] = useState(calculatedLen);
  const resizeCallback = useCallback(() => {
    setSlideLength(Math.ceil(window.innerWidth / 320));
  }, []);
  useWindow(resizeCallback, {
    eventName: "resize",
    delayProps: { type: "throttle" },
  });
  const controls = !isLoading && !doNotAddControls;
  const settings = {
    dots: controls,
    arrows: controls,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    // variableWidth: true,
    lazyLoad: true,
    slidesToShow: slideLength,
    slidesToScroll: slideLength,
    /** To do: It is not working: Purpose was to change the height */
    className: `slider__inner ${className || ""}`,
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
  let slides = [];
  if (isLoading) {
    slides = getNumArray().map((val) => (
      <CollectionSlide key={`loading-${val}`} isLoading={isLoading} />
    ));
  } else if (items) {
    let finalItems = [...items];
    if (finalItems.length < slideLength) {
      finalItems = [
        ...finalItems,
        ...getNumArray(slideLength - finalItems.length).map((val) => ({
          id: "item-" + val,
        })),
      ];
    }
    slides = finalItems.map(
      ({
        backdrop_path,
        poster_path,
        original_title,
        original_name,
        id,
        ...otherProps
      }) => (
        <CollectionSlide
          image={poster_path}
          title={original_title || original_name}
          key={id}
          id={id}
          {...otherProps}
        ></CollectionSlide>
      )
    );
  }
  return <Slider {...settings}>{slides}</Slider>;
}

export default CollectionSlider;
