import { useLocation } from "react-router-dom";

function useQuery() {
  // URLSearchParams does not have browser support for IE11
  return new URLSearchParams(useLocation().search);
}

export default useQuery;
