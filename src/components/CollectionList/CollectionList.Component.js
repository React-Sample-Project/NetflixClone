import React from "react";
import CollectionCarousel from "../CollectionCarousel/CollectionCarousel.Component";

function CollectionList({ items }) {
  return items.map((item) => {
    return <CollectionCarousel key={item.genreId} {...item} />;
  });
}

export default CollectionList;
