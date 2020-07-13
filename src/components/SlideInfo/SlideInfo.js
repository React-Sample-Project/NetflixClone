import React, { useRef, useState } from "react";

import { getCorrectedMediaType } from "../../utils";

import { useHistory, useParams, useLocation } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

import {
  MovieInfoContainer,
  MovieTitle,
  MovieTitleWrapper,
  MetaWrapper,
  ReleasedYear,
  Duration,
  MovieActionsWrapper,
  CollectionSlideContainer,
} from "./SlideInfo.Styles";

import { convertToHours } from "../../utils";
import Image from "../Image/Image";
import CollectionActionButtons from "../CollectionActionButtons/CollectionActionButtons";
import { getMediaInfo } from "../../services/Media";

import asyncFetchReducer from "../../store/reducers/AsyncFetch";
import OverviewGenreList from "../OverviewGenreList/OverviewGenreList";
import auth from "../../services/Auth";
import useAccountStates from "../../hooks/useAccountStates/useAccountStates";

function SlideInfo({ title, image, id, ...otherProps }) {
  const fetchRef = useRef(false);
  const timeoutRef = useRef(null);
  const actionBtsRef = useRef(null);

  const { type, mediaType: infoType } = useParams();
  const { state } = useLocation();
  const mediaType = type || infoType || state.type;

  const history = useHistory();
  const [{ data: mediaInfo, isLoading }, , getMediaDetails] = useFetch(
    getMediaInfo,
    null,
    {
      isResponseFormatted: false,
      reducer: asyncFetchReducer,
    }
  );

  const correctedType = getCorrectedMediaType(mediaType);

  const {
    account_states,
    release_date,
    first_air_date,
    seasons,
    runtime,
    genres,
  } = mediaInfo?.data ?? {};

  const [accState, isAccountStateLoading, toggleAccState] = useAccountStates(
    account_states
  );
  const toggleAccountStates = (e) => {
    const name = e.currentTarget.getAttribute("name");
    setLoadingIconType(name);
    toggleAccState(name, id, mediaType);
  };

  const firstRelease = release_date || first_air_date;
  const additonalData = runtime || seasons;
  const [loadingIconType, setLoadingIconType] = useState(null);
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

  const onClick = ({ target }) => {
    const collectionContainer = actionBtsRef.current;
    // Do not navigate to Media Page when watchlist or favorite is clicked
    if (
      auth.getGuestSession() ||
      (target !== collectionContainer && !collectionContainer.contains(target))
    ) {
      history.push(`/${correctedType}/${id}`);
    }
  };
  return (
    <CollectionSlideContainer onClick={onClick}>
      <Image
        onMouseEnter={onMouseEnter}
        className="blurimg-on-hover"
        src={image}
        alt={title}
        style={{ width: "inherit", height: "inherit" }}
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
              ref={actionBtsRef}
              loadingIconType={isAccountStateLoading ? loadingIconType : null}
              isLoading={isLoading}
              accountStates={accState}
              onClick={toggleAccountStates}
            />
          </MovieActionsWrapper>
        )}
      </MovieInfoContainer>
    </CollectionSlideContainer>
  );
}

export default SlideInfo;
