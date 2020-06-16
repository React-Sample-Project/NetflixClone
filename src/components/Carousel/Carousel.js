import React from "react";
import Slider from "react-slick";
import SliderArrow from "../SliderArrow/SliderArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "../Image/Image";

function Carousel({ items }) {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow isLeft={true} />,
  };
  const slides = items.map((item) => (
    <Image key={item.id} src={item.backdrop_path} />
  ));
  return <Slider {...settings}>{slides}</Slider>;
}

export default Carousel;
