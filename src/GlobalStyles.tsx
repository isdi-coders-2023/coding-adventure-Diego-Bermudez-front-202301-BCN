import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Roboto";
}

h1,
h2,
h3,
h4 {
  margin: 0;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  background-color: transparent;
  border: none;
  padding: 0;
}

img {
  max-width: 100%;
}

`;

export default GlobalStyles;
