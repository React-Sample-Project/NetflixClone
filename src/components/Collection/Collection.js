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

  const prevArgs = useRef([...args]);
  useEffect(() => {
    let stateReset = false;
    if (prevArgs.current[0] !== args[0]) {
      stateReset = true;
      dispatch({
        type: DataFetchConstants.RESET_STATE,
        payload: {
          data: null,
        },
      });
    }
    if (stateReset) {
      window.scrollTo(0, 0);
    }
    prevArgs.current = [...args];
    asyncFunction(...args, stateReset ? 1 : currentPage);
  }, [dispatch, asyncFunction, args, currentPage]);

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
