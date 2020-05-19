import DataFetchConstants from "./DataFetch.Constants";
import { generateLoadingItems } from "../../utils/utils";

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
  switch (type) {
    case DataFetchConstants.FETCH_INIT:
      let isLoaderAdded = false;
      if (data && data[data.length - 1].isLoading) {
        isLoaderAdded = true;
      }
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
    case DataFetchConstants.FETCH_SUCCESS:
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
    case DataFetchConstants.FETCH_ERROR:
      newCollection = removeLoadingData(data);
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: paging && newCollection ? [...newCollection] : null,
      };
    case DataFetchConstants.RESET_STATE:
      return {
        isLoading: false,
        isError: false,
        currentPage: 1,
        totalPages: 1,
        ...payload,
      };
    case DataFetchConstants.INCREMENT_CURRENT_PAGE:
      return {
        ...state,
        currentPage: currentPage + 1,
      };
    default:
      throw new Error();
  }
};

export default dataFetchReducer;
