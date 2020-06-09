import React from "react";

function NoResults({ searchQuery }) {
  return (
    <div>
      <p> Your search for {searchQuery} did not find any matches. </p>
      <p>Suggestions:</p>
      <ul>
        <li>Try different keywords</li>
        <li>Looking for a movie or TV show?</li>
        <li>Try using a movie, TV show title, an actor or director.</li>
        <li>Try a genre, such as comedy, romance, sports or drama.</li>
      </ul>
    </div>
  );
}

export default NoResults;
