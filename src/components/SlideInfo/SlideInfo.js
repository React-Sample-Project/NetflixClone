import React, { useRef, useState, useEffect } from "react";

import useFetch from "../../hooks/useFetch";

import {
  MovieInfoContainer,
  MovieTitle,
  MovieTitleWrapper,
  MetaWrapper,
  ReleasedYear,
  Duration,
  MovieActionsWrapper,
} from "./SlideInfo.Styles";

import { convertToHours } from "../../utils";
import Image from "../Image/Image";
import CollectionActionButtons from "../CollectionActionButtons/CollectionActionButtons";
import account from "../../services/Account";
import { getMediaInfo } from "../../services/Media";

import asyncFetchReducer from "../../store/reducers/AsyncFetch";
import OverviewGenreList from "../OverviewGenreList/OverviewGenreList";
import auth from "../../services/Auth";

function SlideInfo({ title, image, id, mediaType, ...otherProps }) {
  const fetchRef = useRef(false);
  const timeoutRef = useRef(null);
  const onMouseEnter = () => {
    const mouseEnterTimeout = timeoutRef.current;
    if (mouseEnterTimeout) {
      clearTimeout(mouseEnterTimeout);
    }
    timeoutRef.current = setTimeout(() => {
      if (!fetchRef.current) {
        fetchRef.current = true;
        getMediaDetails(mediaType, id);
      }
    }, 100);
  };
  const [{ data: mediaInfo, isLoading }, , getMediaDetails] = useFetch(
    getMediaInfo,
    null,
    {
      isResponseFormatted: false,
      reducer: asyncFetchReducer,
    }
  );
  const {
    account_states,
    release_date,
    first_air_date,
    seasons,
    runtime,
    genres,
  } = (mediaInfo && mediaInfo.data) || {};
  const [accState, setAccState] = useState({});
  useEffect(() => {
    if (account_states) {
      setAccState({
        ...account_states,
      });
    }
  }, [account_states]);

  const toggleAccountStates = async (e) => {
    const name = e.currentTarget.getAttribute("name");
    const keyName = ["favorite", "unfavorite"].includes(name)
      ? "favorite"
      : "watchlist";
    const value = accState[keyName];
    const newValue =
      name === "watchlist"
        ? !value
        : name === "favorite"
        ? value
          ? false
          : true
        : false;
    await account.updateAccountStates(id, mediaType, keyName, newValue);
    setAccState({
      ...accState,
      [keyName]: newValue,
    });
  };
  const firstRelease = release_date || first_air_date;
  const additonalData = runtime || seasons;
  return (
    <>
      <Image
        onMouseEnter={onMouseEnter}
        className="blurimg-on-hover"
        src={image}
        alt={title}
        style={{ width: "100%", height: "200px" }}
      />
      <MovieInfoContainer className="showmovieinfo-on-hover">
        <MovieTitleWrapper>
          <MovieTitle>{title}</MovieTitle>
          <MetaWrapper>
            {firstRelease && (
              <ReleasedYear>
                {new Date(firstRelease).getFullYear()}
              </ReleasedYear>
            )}
            {additonalData && (
              <Duration>
                {runtime
                  ? convertToHours(runtime)
                  : `${seasons.length} Seasons`}
              </Duration>
            )}
          </MetaWrapper>
          <div>{genres && <OverviewGenreList genres={genres} />}</div>
        </MovieTitleWrapper>
        {auth.getUserSession() && (
          <MovieActionsWrapper>
            <CollectionActionButtons
              isLoading={isLoading}
              accountStates={accState}
              onClick={toggleAccountStates}
            />
          </MovieActionsWrapper>
        )}
      </MovieInfoContainer>
    </>
  );
}

export default SlideInfo;
