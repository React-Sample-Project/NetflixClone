import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body {
    font-family: 'Heebo', sans-serif;
    font-size: 10px;
    cursor: default;
    background: #141414;
    color: #fff;
    line-height: 1.2;
    user-select: none;
    margin: 0;
}
@media screen and (min-width: 1601px) and (max-width: 1920px) and (orientation: landscape) {
  html,
  body {
    font-size: 0.75vw;
  }
}

a {
    text-decoration: none;
    cursor: pointer;
    color: #fff;
}

img {
  border: 0
}

button, input {
  color: inherit;
  font: inherit;
  margin: 0;
}

button {
  overflow: visible;
  cursor: pointer;
}

h1 {
  margin: 0 0 10px 0;
  padding: 0;
}

${"" /* * {
    box-sizing: border-box;
} */}
`;
