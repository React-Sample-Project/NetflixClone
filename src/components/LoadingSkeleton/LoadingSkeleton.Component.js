import React from "react";
import CollectionCarousel from "../CollectionCarousel/CollectionCarousel.Component";

function LoadingSkeleton() {
  console.log("I am called");
  const array = new Array(3).fill(0);
  return array.map((val, index) => (
    <CollectionCarousel key={index} isLoading={true} />
  ));
}

export default LoadingSkeleton;
