import { useState, useEffect } from "react";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

export const useInfiniteScroll = (actualArray) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [slicedArray, setSlicedArray] = useState([]);
  useEffect(() => {
    const pages = Math.ceil(actualArray.length / 3);
    setTotalPages(pages);
  }, [actualArray.length]);
  useEffect(() => {
    if (currentPage < totalPages) {
      const startIndex = currentPage * 3;
      setSlicedArray(actualArray.slice(startIndex, startIndex + 3));
    }
  }, [currentPage, totalPages, actualArray]);
  const { y } = useWindowScrollPosition({
    passive: true,
    throttle: 300,
  });
  /** To do: improvize */
  if (y > (currentPage + 1) * (window.innerHeight - 100)) {
    setCurrentPage((currentPageVal) => currentPageVal + 1);
  }
  return slicedArray;
};

export const isContentOverflown = ({
  clientWidth,
  clientHeight,
  scrollWidth,
  scrollHeight,
}) => scrollHeight > clientHeight || scrollWidth > clientWidth;
