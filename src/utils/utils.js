export const generateLoadingItems = () => [
  {
    genreId: Math.floor(Math.random() * 1000000000),
    isLoading: true,
  },
];

export const isBottom = (element) =>
  element && element.getBoundingClientRect().bottom <= window.innerHeight + 40;

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
  for (let i = currentLength; i < arrayLength; i += chunkLength) {
    result.push(array.slice(i, i + chunkLength));
  }
  return result;
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
