import { DataFetchConstants } from "./AsyncFetchArray";

export default function asyncFetchReducer(state, { type, payload }) {
  const {
    FETCH_INIT,
    FETCH_SUCCESS,
    FETCH_ERROR,
    RESET_STATE,
  } = DataFetchConstants;
  switch (type) {
    case FETCH_INIT:
      return {
        isLoading: true,
        data: null,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        isLoading: false,
        data: payload,
        error: null,
      };
    case FETCH_ERROR:
      return {
        isLoading: false,
        error: true,
        data: null,
      };
    case RESET_STATE:
      return {
        isLoading: false,
        error: false,
        data: null,
      };
    default:
      return state;
  }
}
