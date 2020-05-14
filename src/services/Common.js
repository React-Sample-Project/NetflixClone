import API from "./API";
export const fetchTrending = async (type) => {
  const trendingResponse = await API({
    url: `trending/${type}/day`,
  });
  return trendingResponse.results;
};

export const fetchCollectionForGenre = async (genreId, type, page = 1) => {
  const movies = await API({
    url: `discover/${type}`,
    data: {
      with_genres: genreId,
      page,
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

export const searchCollection = async (query) => {
  if (query) {
    const collection = await API({
      data: {
        query,
      },
      url: "search/multi",
    });
    return collection.results;
  }
};
