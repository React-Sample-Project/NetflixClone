import React, { useEffect, useState, useRef } from "react";
import CollectionSlider from "../CollectionSlider/CollectionSlider";
import useScroll from "../../hooks/useScroll";
import useFetch from "../../hooks/useFetch";

import { chunkArrays, isBottom } from "../../utils";
import "./Collection.Styles.css";
import { DataFetchConstants } from "../../store/reducers/AsyncFetchArray";
import { Header, HeaderText } from "./Collection.Styles";

function Collection({ fetchMethod, args, title, onResultsChange }) {
  const [slicedCollection, setSlicedCollection] = useState([]);
  const rootRef = useRef(null);
  // To do: for responsiveness
  const length = 6;
  // Math.ceil(document.documentElement.clientWidth / 318)
  const [
    { data: collection, currentPage, totalPages },
    dispatch,
    asyncFunction,
  ] = useFetch(fetchMethod, null, {
    paging: true,
  });

  useScroll(() => {
    if (isBottom(rootRef.current) && currentPage < totalPages) {
      dispatch({ type: DataFetchConstants.INCREMENT_CURRENT_PAGE });
    }
  });

  useEffect(() => {
    onResultsChange && onResultsChange(collection);
  }, [onResultsChange, collection]);

  useEffect(() => {
    // To prevent calling the same function twice at first time when arguments change, this condition is added
    if (currentPage > 1) {
      asyncFunction(...args, currentPage);
    }
    // args is not included in the dependency array since separate useEffect exists for args change and args and currentPage will not change at the same time.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncFunction, currentPage]);

  useEffect(() => {
    dispatch({
      type: DataFetchConstants.RESET_STATE,
      payload: {
        data: null,
      },
    });
    asyncFunction(...args);
  }, [dispatch, asyncFunction, args]);

  useEffect(() => {
    if (collection) {
      setSlicedCollection(chunkArrays(collection, length));
    }
  }, [collection]);
  return (
    <div style={{ paddingTop: "1%", position: "relative" }} ref={rootRef}>
      <Header>
        <HeaderText>{title}</HeaderText>
      </Header>
      {slicedCollection.map((collection) => (
        <CollectionSlider
          className="collection-customization"
          items={collection}
          isLoading={collection[collection.length - 1].isLoading}
          key={collection[0].id || collection[0].genreId}
          // length={Math.min(length, collection.length)}
          doNotAddControls={true}
        />
      ))}
    </div>
  );
}

export default Collection;
