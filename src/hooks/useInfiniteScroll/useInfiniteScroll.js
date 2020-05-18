import { useState, useEffect } from "react";
import { isBottom } from "../../utils/utils";
import useScroll from "../useScroll";

const useInfiniteScroll = ({ array, sliceLength, elementRef, type }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const [totalPages, setTotalPages] = useState(0);
  const [slicedArray, setSlicedArray] = useState(null);
  useEffect(() => {
    setTotalPages(0);
    setCurrentPage(0);
    setSlicedArray(null);
  }, [type]);
  useEffect(() => {
    if (array) {
      const pages = Math.ceil(array.length / sliceLength);
      setTotalPages(pages);
    }
  }, [array, sliceLength]);
  useEffect(() => {
    if (totalPages && currentPage < totalPages) {
      const startIndex = currentPage * sliceLength;
      setSlicedArray(array.slice(startIndex, startIndex + sliceLength));
    }
  }, [currentPage, totalPages, array, sliceLength]);
  // To do: Improvise
  useScroll(() => {
    // Total Pages added because when routes change currentPage is getting incremented. Since totalPages is always zero when not added in dependency arary. Included it.
    if (totalPages > 0 && isBottom(elementRef)) {
      setCurrentPage((currentPageVal) => currentPageVal + 1);
    }
  });

  return slicedArray;
};

export default useInfiniteScroll;
