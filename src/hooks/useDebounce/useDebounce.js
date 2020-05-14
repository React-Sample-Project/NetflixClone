import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value));
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;
