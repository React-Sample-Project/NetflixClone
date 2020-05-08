import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchTrending,
  fetchCollectionsOfGenres,
  fetchGenres,
} from "../../services/Common.js";

import {
  Main,
  CoverImageMain,
  AbsoluteMask,
  CoverImageRow,
} from "./MainContainer.Styles";
import Carousel from "../Carousel";
import CollectionList from "../CollectionList";
import { useInfiniteScroll } from "../../utils/utils.js";

function MainContainer() {
  const [trending, setTrending] = useState(null);
  const { type } = useParams();
  const [collectionWithGenre, setCollectionWithGenre] = useState(null);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function fetchTrendingAllDay() {
      const trendingAllDay = await fetchTrending();
      const genres = await fetchGenres(type);
      setGenres(genres);
      setTrending(trendingAllDay.slice(0, 5));
    }
    fetchTrendingAllDay();
  }, [type]);
  const slicedGenres = useInfiniteScroll(genres);
  useEffect(() => {
    async function fetchCollection() {
      const collections = await fetchCollectionsOfGenres(slicedGenres, type);
      console.log(collections);
      setCollectionWithGenre((current) => {
        return current && current.length && current[0].hasOwnProperty(type)
          ? [...current, ...collections]
          : collections;
      });
    }
    fetchCollection();
  }, [slicedGenres, type]);

  return (
    <Main>
      <CoverImageMain>
        <CoverImageRow>
          <AbsoluteMask>
            {trending && <Carousel items={trending} />}
          </AbsoluteMask>
        </CoverImageRow>
      </CoverImageMain>
      {collectionWithGenre && <CollectionList items={collectionWithGenre} />}
    </Main>
  );
}

export default MainContainer;
