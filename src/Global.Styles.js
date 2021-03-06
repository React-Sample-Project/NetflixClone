import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body {
    font-family: 'Heebo', sans-serif;
    font-size: 13px;
    cursor: default;
    background: #141414;
    color: #fff;
    line-height: 1.2;
    user-select: none;
    margin: 0;
}
@media screen and (min-width: 0) and (max-width:480px) and (max-aspect-ratio:4/3) {
    body,html {
        font-size:1.5vw
    }
}

@media screen and (min-width: 481px) and (max-width:840px) and (max-aspect-ratio:4/3) {
    body,html {
        font-size:1vw
    }
}

@media screen and (min-width: 841px) and (max-width:1280px) and (max-aspect-ratio:4/3) {
    body,html {
        font-size:.75vw
    }
}

@media screen and (min-width: 1281px) and (max-width:1600px) and (max-aspect-ratio:4/3) {
    body,html {
        font-size:.75vw
    }
}

@media screen and (min-width: 1601px) and (max-width:1920px) and (max-aspect-ratio:4/3) {
    body,html {
        font-size:.75vw
    }
}

@media screen and (min-width: 1921px) and (max-aspect-ratio:4/3) {
    body,html {
        font-size:12px
    }
}

@media screen and (max-width: 480px) and (orientation:landscape) {
    body,html {
        font-size:1.5vw
    }
}

@media screen and (min-width: 481px) and (max-width:840px) and (orientation:landscape) {
    body,html {
        font-size:1.2vw
    }
}

@media screen and (min-width: 841px) and (max-width:1280px) and (orientation:landscape) {
    body,html {
        font-size:.85vw
    }
}

@media screen and (min-width: 1281px) and (max-width:1600px) and (orientation:landscape) {
    body,html {
        font-size:.75vw
    }
}

@media screen and (min-width: 1601px) and (max-width:1920px) and (orientation:landscape) {
    body,html {
        font-size:.75vw
    }
}

@media screen and (min-width: 1921px) and (orientation:landscape) {
    body,html {
        font-size:14px
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
`;
