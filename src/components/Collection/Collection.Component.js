import React, { useEffect, useState, useRef } from "react";
import CollectionSlider from "../CollectionSlider/CollectionSlider.Component";
import useScroll from "../../hooks/useScroll";
import { chunkArrays, isBottom } from "../../utils/utils";
import "./Collection.Styles.css";

function Collection({ fetchMethod, args }) {
  const [collection, setCollection] = useState([]);
  const [slicedCollection, setSlicedCollection] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rootRef = useRef(null);
  //To do: for responsiveness
  const length = 6;
  //Math.ceil(document.documentElement.clientWidth / 318)

  useScroll(() => {
    if (isBottom(rootRef.current)) {
      setCurrentPage((currentPageVal) => currentPageVal + 1);
    }
  });
  useEffect(() => {
    setCollection([]);
  }, []);
  useEffect(() => {
    let didCancel = false;
    const fetchCollection = async function () {
      const newCollection = await fetchMethod(...args, currentPage);
      console.log(newCollection, ...args);
      if (!didCancel) {
        setCollection((collection) =>
          collection.length
            ? [...collection, ...newCollection]
            : [...newCollection]
        );
      }
    };
    fetchCollection();
    return () => (didCancel = true);
  }, [...args, currentPage]);

  useEffect(() => {
    const collectionLength = collection.length;
    console.log(collectionLength);
    if (collectionLength > 0) {
      const mod = collectionLength % length;
      let finalArray = collection;
      if (mod !== 0) {
        finalArray = collection.slice(0, collectionLength - mod);
      }
      collectionLength && setSlicedCollection(chunkArrays(finalArray, length));
    }
  }, [collection]);
  return (
    <div style={{ paddingTop: "3%", position: "relative" }} ref={rootRef}>
      {slicedCollection.map((collection) => (
        <CollectionSlider
          className="genre-customization"
          items={collection}
          key={collection[0].id}
          length={length}
          doNotAddControls={true}
        />
      ))}
    </div>
  );
}

export default Collection;
