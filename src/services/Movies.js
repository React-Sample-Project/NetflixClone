import API from "./API";

export const fetchAllVideos = async (movieId) => {
  if (movieId) {
    // http://api.themoviedb.org/3/movie/545609?api_key=6ab2a63ea862ee9d65a8823c9f7aa071&append_to_response=videos
    const movieResponse = await API({
      url: `movie/${movieId}`,
      data: {
        append_to_response: "videos",
      },
    });
    return movieResponse.videos.results;
  }
};
export const fetchYoutubeTrailerId = async (movieId) => {
  if (movieId) {
    const videos = await fetchAllVideos(movieId);
    return videos?.[0].key;
  }
};
