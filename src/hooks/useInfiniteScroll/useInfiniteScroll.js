import { useState, useEffect } from "react";
import { isBottom } from "../../utils";
import useScroll from "../useScroll";
import { useCallback } from "react";

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
  const callback = useCallback(() => {
    if (totalPages > 0 && isBottom(elementRef)) {
      setCurrentPage((currentPageVal) => currentPageVal + 1);
    }
  }, [totalPages, elementRef]);
  useScroll(callback);

  return slicedArray;
};

export default useInfiniteScroll;
