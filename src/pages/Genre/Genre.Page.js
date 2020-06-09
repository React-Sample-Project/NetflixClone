import React from "react";
import { useParams } from "react-router-dom";

import Collection from "../../components/Collection/Collection.Component";
import { fetchCollectionForGenre } from "../../services/Data";

function Genre() {
  const { type, id } = useParams();
  return <Collection fetchMethod={fetchCollectionForGenre} args={[id, type]} />;
}

export default Genre;
