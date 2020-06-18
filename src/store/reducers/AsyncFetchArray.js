import { generateLoadingItems } from "../../utils";

export const DataFetchConstants = {
  FETCH_INIT: "FETCH_INIT",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  INCREMENT_CURRENT_PAGE: "INCREMENT_CURRENT_PAGE",
  RESET_STATE: "RESET_STATE",
};

const removeLoadingData = (data) => {
  let newCollection = null;
  if (data) {
    newCollection = [...data];
    if (data[data.length - 1].isLoading) {
      newCollection = newCollection.slice(0, data.length - 1);
    }
  }
  return newCollection;
};
const dataFetchReducer = (state, { type, payload }) => {
  const { data, paging, currentPage } = state;
  const customLoader = generateLoadingItems();
  let newCollection;
  const {
    FETCH_INIT,
    FETCH_SUCCESS,
    FETCH_ERROR,
    RESET_STATE,
    INCREMENT_CURRENT_PAGE,
  } = DataFetchConstants;

  switch (type) {
    case FETCH_INIT:
      let isLoaderAdded = false;
      if (data && data.length && data[data.length - 1].isLoading) {
        isLoaderAdded = true;
      }
      console.log(data, !isLoaderAdded, paging, data);
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: !isLoaderAdded
          ? paging && data
            ? [...data, ...customLoader]
            : [...customLoader]
          : state.data,
      };
    case FETCH_SUCCESS:
      newCollection = removeLoadingData(data);
      return {
        ...state,
        isLoading: false,
        isError: false,
        totalPages: payload.totalPages,
        data: newCollection
          ? [...newCollection, ...payload.data]
          : [...payload.data],
      };
    case FETCH_ERROR:
      newCollection = removeLoadingData(data);
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: paging && newCollection ? [...newCollection] : null,
      };
    case RESET_STATE:
      return {
        isLoading: false,
        isError: false,
        currentPage: 1,
        totalPages: 1,
        paging: state.paging,
        ...payload,
      };
    case INCREMENT_CURRENT_PAGE:
      return {
        ...state,
        currentPage: currentPage + 1,
      };
    default:
      throw new Error();
  }
};

export default dataFetchReducer;
