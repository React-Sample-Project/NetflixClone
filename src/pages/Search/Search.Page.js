import React, { useState, useEffect } from "react";
import useQuery from "../../hooks/useQuery";
import useDebounce from "../../hooks/useDebounce";

import { searchCollection } from "../../services/Common";
import Collection from "../../components/Collection/Collection.Component";

function Search() {
  const query = useQuery();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchTerm = useDebounce(query.get("q"), 300);
  useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchQuery(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  return (
    searchQuery && (
      <Collection fetchMethod={searchCollection} args={[searchQuery]} />
    )
  );
}

export default Search;
