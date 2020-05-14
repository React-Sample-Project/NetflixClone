import GenreConstants from "./Genre.Constants";

export const genreInitialState = {
  isGenresLoading: false,
  genres: null,
  isCollectionLoading: false,
  collectionWithGenre: null,
};
const genreReducer = (state, { type, payload }) => {
  switch (type) {
    case GenreConstants.GENRES_LOADING:
      return {
        ...state,
        isGenresLoading: true,
        genres: null,
        collectionWithGenre: null,
      };
    case GenreConstants.GENRES_FETCH_SUCCESS:
      return {
        ...state,
        isGenresLoading: false,
        genres: payload,
      };
    case GenreConstants.GENRE_COLLECTION_LOADING:
      return {
        ...state,
        collectionWithGenre: state.collectionWithGenre
          ? [...state.collectionWithGenre, ...payload]
          : null,
        isCollectionLoading: true,
      };
    case GenreConstants.GENRE_COLLECTION_FETCH_SUCCESS:
      const collection = state.collectionWithGenre;
      let newCollection;
      if (collection) {
        newCollection = [...collection];
        if (collection[collection.length - 1].isLoading) {
          newCollection = newCollection.slice(0, collection.length - 1);
        }
      }
      return {
        ...state,
        isCollectionLoading: false,
        collectionWithGenre: newCollection
          ? [...newCollection, ...payload]
          : [...payload],
      };
    default:
      return state;
  }
};

export default genreReducer;
