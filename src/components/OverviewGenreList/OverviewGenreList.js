import React from "react";
import {
  GenreList,
  GenreItem,
  GenreSeparator,
  GenreText,
} from "./OverviewGenreList.Styles";
function OverviewGenreList({ genres }) {
  return (
    <GenreList>
      {genres.slice(0,3).map(({ id, name }, index) => (
        <GenreItem key={id}>
          {index !== 0 && <GenreSeparator />}
          <GenreText>{name}</GenreText>
        </GenreItem>
      ))}
    </GenreList>
  );
}

export default OverviewGenreList;
