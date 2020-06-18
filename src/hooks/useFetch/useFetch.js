import { useReducer, useCallback, useEffect, useRef } from "react";
import dataFetchReducer, {
  DataFetchConstants,
} from "../../store/reducers/AsyncFetchArray";

function useFetch(asyncFn, initialData, props = {}) {
  const {
    paging,
    reducer = dataFetchReducer,
    isResponseFormatted = true,
    immediate,
  } = props;
  const initialState = {
    isLoading: false,
    isError: false,
    currentPage: paging ? 1 : undefined,
    totalPages: paging ? 1 : undefined,
    paging,
    data: initialData,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const didCancelRef = useRef(false);

  const callback = useCallback(
    async (...args) => {
      const { FETCH_INIT, FETCH_SUCCESS, FETCH_ERROR } = DataFetchConstants;
      const didCancel = didCancelRef.current;
      if (!didCancel) {
        dispatch({
          type: FETCH_INIT,
        });
      }
      const response = await asyncFn(...args);
      if (
        (response.hasOwnProperty("success") && !response.success) ||
        [7, 34].includes(response.status_code)
      ) {
        if (!didCancel) {
          dispatch({ type: FETCH_ERROR });
        }
      } else if (!didCancel && (response.results || !isResponseFormatted)) {
        dispatch({
          type: FETCH_SUCCESS,
          payload: {
            data: response.results || response,
            totalPages: response.totalPages,
          },
        });
      }
    },
    [asyncFn, isResponseFormatted]
  );
  useEffect(() => {
    didCancelRef.current = false;
    if (immediate) {
      callback();
    }
    return () => {
      didCancelRef.current = true;
    };
  }, [callback, immediate]);
  return [state, dispatch, callback];
}

export default useFetch;
