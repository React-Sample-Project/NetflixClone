import React, { useState, useEffect } from "react";
import useQuery from "../../hooks/useQuery";
import useDebounce from "../../hooks/useDebounce";

import { searchCollection } from "../../services/Common";
import Collection from "../../components/Collection/Collection.Component";

function Search() {
  const query = useQuery();
  const [searchQuery, setSearchQuery] = useState(null);
  const debouncedSearchTerm = useDebounce(query.get("q"), 1000);
  useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchQuery(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  return (
    searchQuery !== null && (
      <Collection fetchMethod={searchCollection} args={[searchQuery]} />
    )
  );
}

export default Search;
