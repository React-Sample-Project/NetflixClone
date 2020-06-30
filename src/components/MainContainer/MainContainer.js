import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  fetchTrending,
  fetchCollectionsOfGenres,
  fetchGenres,
} from "../../services/Media.js";

import {
  Main,
  CoverImageMain,
  AbsoluteMask,
  CoverImageRow,
} from "./MainContainer.Styles";

import Carousel from "../Carousel";
import CollectionList from "../CollectionList";
import LoadingSkeleton from "../LoadingSkeleton";

import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import useFetch from "../../hooks/useFetch/useFetch.js";
import NetflixSpinner from "../NetflixSpinner/NetflixSpinner.js";

import asyncFetchReducer from "../../store/reducers/AsyncFetch";

function MainContainer() {
  const { type } = useParams();
  const collectionRef = useRef(null);

  const commonProps = {
    reducer: asyncFetchReducer,
    isResponseFormatted: false,
    immediate: false,
  };

  const [{ data: trending }, trendingDispatch, getTrending] = useFetch(
    fetchTrending,
    null,
    commonProps
  );
  const [{ data: genres, isLoading }, genreDispatch, getGenres] = useFetch(
    fetchGenres,
    null,
    commonProps
  );

  const [
    { data: collectionWithGenre },
    collectionDispatch,
    getCollections,
  ] = useFetch(fetchCollectionsOfGenres, null, {
    isResponseFormatted: false,
    paging: true,
  });

  useEffect(() => {
    const resetState = { type: "RESET_STATE" };
    trendingDispatch(resetState);
    genreDispatch(resetState);
    collectionDispatch({
      ...resetState,
      payload: {
        data: null,
      },
    });
    getTrending(type);
    getGenres(type);
  }, [
    getTrending,
    getGenres,
    collectionDispatch,
    genreDispatch,
    trendingDispatch,
    type,
  ]);

  const slicedGenres = useInfiniteScroll({
    array: genres?.data,
    type,
    sliceLength: 3,
    elementRef: collectionRef.current,
  });

  useEffect(() => {
    if (slicedGenres) {
      getCollections(slicedGenres, type);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slicedGenres, getCollections]);

  const trendingAllDay = trending?.data.slice(0, 5);

  return (
    <Main ref={collectionRef}>
      <CoverImageMain>
        <CoverImageRow>
          <AbsoluteMask>
            {trendingAllDay ? (
              <Carousel items={trendingAllDay} />
            ) : (
              <NetflixSpinner />
            )}
          </AbsoluteMask>
        </CoverImageRow>
      </CoverImageMain>{" "}
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        collectionWithGenre && <CollectionList items={collectionWithGenre} />
      )}
    </Main>
  );
}

export default MainContainer;
