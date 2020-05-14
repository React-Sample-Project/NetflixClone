import React from "react";
import CollectionCarousel from "../CollectionCarousel/CollectionCarousel.Component";

function CollectionList({ items }) {
  return items.map((item) => (
    <CollectionCarousel key={item.genreId} {...item} />
  ));
}

export default CollectionList;
