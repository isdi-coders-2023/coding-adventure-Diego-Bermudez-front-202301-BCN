import { createGlobalStyle } from "styled-components";

import "@fontsource/roboto";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.mainColorContrast};
    color: ${(props) => props.theme.colors.mainColorContrast};
}

body {
  margin: 0;
  font-family: ${(props) => props.theme.fonts.mainFont};
  display: flex;
  justify-content: center;
}

h1,
h2,
h3,
h4,
h5, 
h6 {
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
input {
  border: none;

}

`;

export default GlobalStyles;
