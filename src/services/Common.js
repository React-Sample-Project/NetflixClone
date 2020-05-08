import API from "./API";
export const fetchTrending = async () => {
  const trendingResponse = await API({
    url: "trending/all/day",
  });
  return trendingResponse.results;
};

export const fetchCollectionForGenre = async (genreId, type) => {
  const movies = await API({
    url: `discover/${type}`,
    data: {
      with_genres: genreId,
    },
  });
  return movies.results;
};

export const fetchGenres = async (type) => {
  const genres = await API({
    url: `genre/${type}/list`,
  });
  return genres.genres;
};

export const fetchCollectionsOfGenres = async (genres, type) => {
  if (genres) {
    const promises = genres.map(async ({ id, name }) => {
      const collection = await fetchCollectionForGenre(id, type);
      return {
        genreName: name,
        genreId: id,
        [type]: collection,
      };
    });
    return await Promise.all(promises);
  }
};
