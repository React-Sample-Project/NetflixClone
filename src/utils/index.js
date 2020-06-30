export const generateLoadingItems = () => [
  {
    genreId: Math.floor(Math.random() * 1000000000),
    isLoading: true,
  },
];

export const isBottom = (element) =>
  element?.getBoundingClientRect().bottom <= window.innerHeight + 400;

export const isContentOverflown = ({
  clientWidth,
  clientHeight,
  scrollWidth,
  scrollHeight,
}) => scrollHeight > clientHeight || scrollWidth > clientWidth;

export const chunkArrays = (array, chunkLength) => {
  const arrayLength = array.length;
  let result = [];
  const currentLength = 0;
  let actualChunkLength = Math.min(array.length, chunkLength);
  for (let i = currentLength; i < arrayLength; i += chunkLength) {
    result.push(array.slice(i, i + actualChunkLength));
  }
  return result;
};

export const isArraysEqual = (a, b) => {
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

export const convertToHours = (mins) => {
  if (mins) {
    const minutes = mins % 60;
    const hrs = (mins - minutes) / 60;
    return hrs + "h " + minutes + "m";
  }
};

export const getStringWithComma = (array) =>
  array.map(({ name }) => name).join(",");

export const getCorrectedMediaType = (mediaType) =>
  mediaType.includes("movie") ? "movie" : mediaType;

export const getNumArray = (length = 6) => [...Array(length).keys()];
