import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCollectionForGenre } from "../../services/Common";
import CollectionSlider from "../../components/CollectionSlider";
function Genre() {
  const { type, id } = useParams();
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    async function fetchCollection() {
      const movies = await fetchCollectionForGenre(id, type);
      setCollection(movies);
    }
    fetchCollection();
  }, [id, type]);
  return (
    <div>
      Genre {id}
      {collection && (
        <CollectionSlider
          items={collection.slice(0, 6)}
          doNotAddControls={true}
        />
      )}
    </div>
  );
}

export default Genre;
