import { css } from "styled-components";
const sizes = {
  xs: {
    "min-width": 0,
    "max-width": "499px",
  },
  s: {
    "min-width": "500px",
    "max-width": "799px",
  },
  m: {
    "min-width": "800px",
    "max-width": "1099px",
  },
  l: {
    "min-width": "1100px",
    "max-width": "1399px",
  },
  xl: {
    "min-width": "1400px",
  },
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => {
    const dimensions = sizes[label];
    const query = Object.keys(dimensions)
      .map((key) => `(${key}:${dimensions[key]})`)
      .join(" and ");
    return css`
      @media screen and ${query} {
        ${css(...args)}
      }
    `;
  };

  return acc;
}, {});

export default media;
