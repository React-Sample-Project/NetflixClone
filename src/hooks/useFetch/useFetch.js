import { useReducer, useCallback, useEffect, useRef } from "react";
import DataFetchConstants from "../../store/DataFetch/DataFetch.Constants";
import dataFetchReducer from "../../store/DataFetch/DataFetch.Reducer";

function useFetch(asyncFn, initialData, deps, props) {
  const paging = props && props.paging;
  const initialState = {
    isLoading: false,
    isError: false,
    currentPage: paging ? 1 : null,
    totalPages: paging ? 1 : null,
    paging,
    data: initialData,
  };
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);
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

      const response = await asyncFn(...args, state.currentPage);
      if (
        (response.hasOwnProperty("success") && !response.success) ||
        [7, 34].includes(response.status_code)
      ) {
        if (!didCancel) {
          dispatch({ type: FETCH_ERROR });
        }
      } else if (!didCancel && response.results) {
        dispatch({
          type: FETCH_SUCCESS,
          payload: {
            data: response.results,
            totalPages: response.totalPages,
          },
        });
      }
    },
    [asyncFn, state.currentPage]
  );
  useEffect(() => {
    didCancelRef.current = false;
    callback(...deps);
    return () => {
      didCancelRef.current = true;
    };
  }, [callback, deps]);
  return [state, dispatch];
}

export default useFetch;
