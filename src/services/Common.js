import API from "./API";
import axios from "axios";

let source;
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
  return getResponse(movies);
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
      const { results } = await fetchCollectionForGenre(id, type);
      return {
        genreName: name,
        genreId: id,
        [type]: results,
      };
    });
    return await Promise.all(promises);
  }
};

export const getResponse = ({ results, total_pages }) => ({
  results: results,
  totalPages: total_pages,
});

export const searchCollection = async (query, page = 1) => {
  if (source) {
    source.cancel();
  }
  source = axios.CancelToken.source();
  if (query || query === "") {
    const collection = await API({
      data: {
        query,
        page,
      },
      url: "search/movie",
      cancelToken: source.token,
    });
    console.log(collection);
    return getResponse(collection);
  }
};
