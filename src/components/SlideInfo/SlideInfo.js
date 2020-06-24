import React, { useRef, useState, useEffect } from "react";

import useFetch from "../../hooks/useFetch";

import { useParams, useLocation } from "react-router-dom";
import {
  MovieInfoContainer,
  MovieTitle,
  MovieTitleWrapper,
  MetaWrapper,
  ReleasedYear,
  Duration,
  MovieActionsWrapper,
} from "./SlideInfo.Styles";

import Image from "../Image/Image";
import CollectionActionButtons from "../CollectionActionButtons/CollectionActionButtons";
import account from "../../services/Account";
import asyncFetchReducer from "../../store/reducers/AsyncFetch";
import OverviewGenreList from "../OverviewGenreList/OverviewGenreList";
import auth from "../../services/Auth";

function SlideInfo({ title, image, id, ...otherProps }) {
  const { type, mediaType: infoType } = useParams();
  const { state } = useLocation();
  const mediaType = type || infoType || state.type;
  const fetchRef = useRef(false);

  const onMouseEnter = () => {
    if (!fetchRef.current) {
      fetchRef.current = true;
      getMediaInfo(mediaType, id);
    }
  };
  const [{ data: mediaInfo, isLoading }, , getMediaInfo] = useFetch(
    account.getMediaInfo,
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

  const convertToHours = (mins) => {
    const minutes = mins % 60;
    const hrs = (mins - minutes) / 60;
    return hrs + "h " + minutes + "m";
  };

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
