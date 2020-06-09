import React, { useState, useEffect, useCallback } from "react";
import useQuery from "../../hooks/useQuery";
import useDebounce from "../../hooks/useDebounce";

import { searchCollection } from "../../services/Data";
import Collection from "../../components/Collection/Collection.Component";
import NoResults from "../../components/ NoResults/NoResults.Component";

function Search() {
  const query = useQuery();
  const [searchQuery, setSearchQuery] = useState(null);
  const [showNoResults, setShowNoResults] = useState(false);
  const debouncedSearchTerm = useDebounce(query.get("q"), 1000);
  useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchQuery(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  const onResultsChange = useCallback(
    (results) => {
      if (results) {
        if (results.length) {
          showNoResults && setShowNoResults(false);
        } else {
          !showNoResults && setShowNoResults(true);
        }
      }
    },
    [showNoResults]
  );
  return (
    <>
      {searchQuery !== null && (
        <Collection
          fetchMethod={searchCollection}
          args={[searchQuery]}
          onResultsChange={onResultsChange}
        />
      )}
      {showNoResults && <NoResults searchQuery={searchQuery} />}
    </>
  );
}

export default Search;
