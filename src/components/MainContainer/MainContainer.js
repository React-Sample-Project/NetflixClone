import React, { useEffect, useState, useRef, useReducer } from "react";
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

import { generateLoadingItems } from "../../utils";

import genreReducer, {
  genreInitialState,
} from "../../store/Genre/Genre.Reducer";
import GenreConstants from "../../store/Genre/Genre.Constants";

function MainContainer() {
  const [trending, setTrending] = useState(null);

  const { type } = useParams();

  const collectionRef = useRef(null);

  const [
    { genres, isCollectionLoading, collectionWithGenre },
    genreDispatch,
  ] = useReducer(genreReducer, genreInitialState);

  useEffect(() => {
    async function fetchTrendingAllDay() {
      const trendingAllDay = await fetchTrending(type);
      genreDispatch({ type: GenreConstants.GENRES_LOADING });
      const genres = await fetchGenres(type);
      genreDispatch({
        type: GenreConstants.GENRES_FETCH_SUCCESS,
        payload: genres,
      });
      setTrending(trendingAllDay.slice(0, 5));
    }
    fetchTrendingAllDay();
  }, [type]);

  const slicedGenres = useInfiniteScroll({
    array: genres,
    type,
    sliceLength: 3,
    elementRef: collectionRef.current,
  });

  useEffect(() => {
    async function fetchCollection() {
      if (slicedGenres) {
        genreDispatch({
          type: GenreConstants.GENRE_COLLECTION_LOADING,
          payload: generateLoadingItems(),
        });
        const collections = await fetchCollectionsOfGenres(slicedGenres, type);
        genreDispatch({
          type: GenreConstants.GENRE_COLLECTION_FETCH_SUCCESS,
          payload: collections,
        });
      }
    }
    fetchCollection();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slicedGenres]);
  // type is not added as dependency because I don't want the function to be called when type changes. Because at that time slicedGenres has old values.
  return (
    <Main ref={collectionRef}>
      <CoverImageMain>
        <CoverImageRow>
          <AbsoluteMask>
            {trending && <Carousel items={trending} />}
          </AbsoluteMask>
        </CoverImageRow>
      </CoverImageMain>{" "}
      {isCollectionLoading && !collectionWithGenre ? (
        <LoadingSkeleton />
      ) : (
        collectionWithGenre && <CollectionList items={collectionWithGenre} />
      )}
    </Main>
  );
}

export default MainContainer;
