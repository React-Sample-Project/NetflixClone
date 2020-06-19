import React, { useRef, useState, useEffect } from "react";
// import SeeMore from "../SeeMore/SeeMore";
// import { isContentOverflown } from "../../utils";
import useFetch from "../../hooks/useFetch";

import { useParams } from "react-router-dom";
import {
  MovieInfoContainer,
  MovieTitle,
  // MovieInfo,
  // MovieActionsWrapper,
} from "./SlideInfo.Styles";

import Image from "../Image/Image";
import CollectionActionButtons from "../CollectionActionButtons/CollectionActionButtons";
import account from "../../services/Account";
import asyncFetchReducer from "../../store/reducers/AsyncFetch";

function SlideInfo({ title, overview, image, id }) {
  const { type } = useParams();
  const fetchRef = useRef(false);
  // To avoid re-renders in useFetch useRef is used.
  // const [expanded, setExpanded] = useState(false);
  // const movieDescriptionRef = React.useRef();
  // const [isOverflown, setIsOverflown] = useState(false);

  const onMouseEnter = () => {
    if (!fetchRef.current) {
      fetchRef.current = true;
      getWatchlist(type, id);
    }
    // !shouldFetch && setShouldFetch(true);                                                                                                                                                                                                                 );
    // if (movieDescriptionRef.current) {
    //   setIsOverflown(isContentOverflown(movieDescriptionRef.current));
    // }
  };
  // const onSeeMoreClick = () => setExpanded((expanded) => !expanded);
  const [{ data: accountStates, isLoading }, , getWatchlist] = useFetch(
    account.getStates,
    null,
    {
      isResponseFormatted: false,
      reducer: asyncFetchReducer,
    }
  );

  const [accState, setAccState] = useState({});
  useEffect(() => {
    if (accountStates) {
      setAccState({
        ...accountStates.data,
      });
    }
  }, [accountStates]);

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
    await account.updateAccountStates(id, type, keyName, newValue);
    setAccState({
      ...accState,
      [keyName]: newValue,
    });
  };
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
        <MovieTitle>{title}</MovieTitle>
        <CollectionActionButtons
          isLoading={isLoading}
          accountStates={accState}
          onClick={toggleAccountStates}
        />
        {/* <MovieInfo ref={movieDescriptionRef} expanded={expanded}>
          {overview}
        </MovieInfo>
        {isOverflown && (
          <SeeMore expanded={expanded} onClick={onSeeMoreClick} />
        )} */}
      </MovieInfoContainer>
    </>
  );
}

export default SlideInfo;
