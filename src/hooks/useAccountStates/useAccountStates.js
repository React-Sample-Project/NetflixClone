import { useState, useEffect } from "react";
import asyncFetchReducer from "../../store/reducers/AsyncFetch";
import useFetch from "../../hooks/useFetch";

import account from "../../services/Account";

function useAccountStates(accountStates) {
  const [{ isLoading }, , updateAccountStates] = useFetch(
    account.updateAccountStates,
    null,
    {
      isResponseFormatted: false,
      reducer: asyncFetchReducer,
    }
  );
  const [accState, setAccState] = useState({});
  useEffect(() => {
    if (accountStates) {
      setAccState({
        ...accountStates,
      });
    }
  }, [accountStates]);
  const toggleAccountStates = async (name, id, mediaType) => {
    const value = accState[name];
    const newValue = !value;
    updateAccountStates(id, mediaType, name, newValue);
    setAccState({
      ...accState,
      [name]: newValue,
    });
  };
  return [accState, isLoading, toggleAccountStates];
}

export default useAccountStates;
