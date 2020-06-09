import React from "react";
import { getNumArray } from "../../utils/utils";
import CollectionCarousel from "../CollectionCarousel/CollectionCarousel";

function LoadingSkeleton() {
  return getNumArray(3).map((val) => (
    <CollectionCarousel key={val} isLoading={true} />
  ));
}

export default LoadingSkeleton;
