import React, { useEffect, useState, useRef } from "react";
import CollectionSlider from "../CollectionSlider/CollectionSlider.Component";
import useScroll from "../../hooks/useScroll";
import useFetch from "../../hooks/useFetch";

import { chunkArrays, isBottom } from "../../utils/utils";
import "./Collection.Styles.css";
import DataFetchConstants from "../../store/DataFetch/DataFetch.Constants";

function Collection({ fetchMethod, args }) {
  const [slicedCollection, setSlicedCollection] = useState([]);
  const rootRef = useRef(null);
  //To do: for responsiveness
  const length = 6;
  //Math.ceil(document.documentElement.clientWidth / 318)
  const [{ data: collection, currentPage, totalPages }, dispatch] = useFetch(
    fetchMethod,
    null,
    args,
    {
      paging: true,
    }
  );
  useScroll(() => {
    if (isBottom(rootRef.current) && currentPage <= totalPages) {
      dispatch({ type: DataFetchConstants.INCREMENT_CURRENT_PAGE });
    }
  });

  useEffect(() => {
    dispatch({
      type: DataFetchConstants.RESET_STATE,
      payload: {
        paging: true,
        data: null,
      },
    });
  }, [dispatch, args]);

  useEffect(() => {
    if (collection) {
      const collectionLength = collection.length;
      if (collectionLength > 0) {
        //  const mod = collectionLength % length;
        //let finalArray = collection;
        // if (mod !== 0 && mod !== 1) {
        // !!!important To do: Fix this. Not working when there is only one page and for example if there are 11 elements. Then only first 6 is displayed and the rest is ignored.
        // finalArray = collection.slice(0, collectionLength - mod);
        // }
        setSlicedCollection(chunkArrays(collection, length));
      }
    }
  }, [collection]);
  return (
    <div style={{ paddingTop: "3%", position: "relative" }} ref={rootRef}>
      {slicedCollection.map((collection) => (
        <CollectionSlider
          className="genre-customization"
          items={collection}
          isLoading={collection[collection.length - 1].isLoading}
          key={collection[0].id}
          // length={Math.min(length, collection.length)}
          doNotAddControls={true}
        />
      ))}
    </div>
  );
}

export default Collection;
