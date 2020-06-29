import React, { useEffect } from "react";
import asyncFetchReducer from "../../store/reducers/AsyncFetch";
import NetflixSpinner from "../../components/NetflixSpinner";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { convertToHours, getStringWithComma } from "../../utils";
import {
  BackgroundCover,
  MediaInfoContainer,
  MainContainer,
  MediaTitle,
  ExtraInfo,
  Info,
  Description,
  Crew,
  CrewRow,
  CrewLabel,
  CustomSVGCircle,
  CrewWrapper,
  ButtonsWrapper,
  MediaButton,
  CustomActionIcon,
  ActionIcon,
  TitleWrapper,
} from "./Media.Styles";
import { getMediaInfo } from "../../services/Media";
import {
  faPlus,
  faCheck,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as regularFaThumpsUp } from "@fortawesome/free-regular-svg-icons";

import useAccountStates from "../../hooks/useAccountStates/useAccountStates";

function Media() {
  const { mediaId, type } = useParams();
  const [{ data: mediaInfo, isLoading }, , getMediaDetails] = useFetch(
    getMediaInfo,
    null,
    {
      isResponseFormatted: false,
      reducer: asyncFetchReducer,
    }
  );
  useEffect(() => {
    getMediaDetails(type, mediaId);
  }, [getMediaDetails, type, mediaId]);

  const mediaData = mediaInfo && mediaInfo.data;
  const {
    original_title,
    original_name,
    vote_average,
    runtime,
    seasons,
    release_date,
    first_air_date,
    genres,
    overview,
    credits,
    videos,
    account_states,
  } = mediaData || {};

  const additonalData =
    convertToHours(runtime) || (seasons && seasons.length + " Seasons");
  const firstAirDate = release_date || first_air_date;
  const directorObj =
    credits && credits.crew.find(({ job }) => job === "Director");
  const director = directorObj && directorObj.name;
  const casts = credits && credits.cast.slice(0, 5);
  const trailerId = videos && videos.results && videos.results[0].key;

  const [accState, isAccountStateLoading, toggleAccState] = useAccountStates(
    account_states
  );
  const myList = accState && accState.watchlist;
  const favorite = accState && accState.favorite;
  const toggleAccountStates = (e) => {
    const name = e.currentTarget.getAttribute("name");
    toggleAccState(name, mediaId, type);
  };
  return (
    <div>
      {isLoading ? (
        <NetflixSpinner />
      ) : (
        mediaData && (
          <>
            <BackgroundCover>
              <img
                alt="backdrop_image"
                style={{ width: "100%", height: "100%" }}
                src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${mediaData.backdrop_path}`}
              />
            </BackgroundCover>
            <MediaInfoContainer>
              <MainContainer>
                <TitleWrapper>
                  <MediaTitle>{original_title || original_name}</MediaTitle>
                  <CustomSVGCircle>
                    <ActionIcon
                      name="favorite"
                      isLoading={isAccountStateLoading}
                      value={favorite}
                      trueIcon={faThumbsUp}
                      falseIcon={regularFaThumpsUp}
                      onClick={toggleAccountStates}
                    />
                  </CustomSVGCircle>
                </TitleWrapper>
                <ExtraInfo>
                  <Info> {`Rating ${vote_average}`} | </Info>
                  <Info> {additonalData} | </Info>
                  <Info> {new Date(firstAirDate).getFullYear()} | </Info>
                  <Info> {getStringWithComma(genres.slice(0, 3))}</Info>
                </ExtraInfo>
                <Description>{overview}</Description>
                <CrewWrapper>
                  <Crew>
                    {director && (
                      <>
                        <h3> Crew</h3>
                        <CrewRow>
                          <CrewLabel>Director</CrewLabel>
                          <span>{director}</span>
                        </CrewRow>
                      </>
                    )}
                    <h3> Casts </h3>
                    {casts.map(({ name, id }) => (
                      <CrewRow key={id}>
                        <CrewLabel>{name}</CrewLabel>
                      </CrewRow>
                    ))}
                  </Crew>
                  <iframe
                    width="560"
                    title="test"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailerId}?controls=0`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </CrewWrapper>
                <ButtonsWrapper>
                  <MediaButton>
                    <CustomActionIcon
                      name="watchlist"
                      value={myList}
                      isLoading={isAccountStateLoading}
                      trueIcon={faCheck}
                      falseIcon={faPlus}
                      onClick={toggleAccountStates}
                    />
                    <span>My List</span>
                  </MediaButton>
                  <MediaButton>
                    <CustomActionIcon name="share" icon={faShare} />
                    <span>Share</span>
                  </MediaButton>
                </ButtonsWrapper>
              </MainContainer>
            </MediaInfoContainer>
          </>
        )
      )}
    </div>
  );
}

export default Media;
