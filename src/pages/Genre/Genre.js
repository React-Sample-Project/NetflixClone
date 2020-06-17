import React from "react";
import { useParams, useLocation } from "react-router-dom";

import Collection from "../../components/Collection/Collection";
import { fetchCollectionForGenre } from "../../services/Media";

function Genre() {
  const { type, id } = useParams();
  const {
    state: { genreName },
  } = useLocation();
  return (
    <Collection
      title={genreName}
      fetchMethod={fetchCollectionForGenre}
      args={[id, type]}
    />
  );
}

export default Genre;
