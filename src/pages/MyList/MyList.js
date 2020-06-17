import React, { useEffect, useState } from "react";
import account from "../../services/Account";

function MyList() {
  const [movies, setMovies] = useState();
  const [tv, setTv] = useState();

  useEffect(() => {
    async function getWatchList() {
      const { movies, tv } = await account.getWatchList();
      setMovies(movies && movies.results);
      setTv(tv && tv.results);
      console.log(movies, tv);
    }
    getWatchList();
  }, []);
  return <div></div>;
}

export default MyList;
