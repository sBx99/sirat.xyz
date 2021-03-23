import { createGlobalStyle } from "styled-components";

/* themes */
export const lightTheme = {
   background: "var(--white)",
   color: "var(--black)",
   selection: "var(--transparentPurple)",
   glitter: "/assets/glitter/purple.gif",
   secondary: "var(--secondary-white)",
   link: {
      color: "var(--pink)",
      background: "var(--purple)",
      shadow: "var(--purple)",
   },
};

export const darkTheme = {
   background: "var(--black)",
   color: "var(--white)",
   selection: "var(--transparentPink)",
   glitter: "/assets/glitter/pink.gif",
   secondary: "var(--secondary-black)",
   link: {
      color: "var(--purple)",
      background: "var(--pink)",
      shadow: "var(--pink)",
   },
};

/* global styles */
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Avara";
    src: url("/assets/fonts/Avara/avara.woff") format("woff"),
        url("/assets/fonts/Avara/avara.woff2") format("woff2");
    font-style: normal;
    font-weight: normal;
    font-display: optional;
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "AUTHENTIC Sans";
  src: url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-60.woff") format("woff"),
      url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-60.woff2") format("woff2");
  font-style: normal;
  font-weight: 300;
  font-display: optional;
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "AUTHENTIC Sans";
  src: url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-90.woff") format("woff"),
      url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-90.woff2") format("woff2");
  font-style: normal;
  font-weight: 500;
  font-display: optional;
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "AUTHENTIC Sans";
  src: url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-130.woff") format("woff"),
      url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-130.woff2") format("woff2");
  font-style: normal;
  font-weight: 700;
  font-display: optional;
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "AUTHENTIC Sans";
  src: url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-150.woff") format("woff"),
      url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-150.woff2") format("woff2");
  font-style: normal;
  font-weight: 900;
  font-display: optional;
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

:root {
    /* colors */
    --black: #050505;
    --white: #FAFAFA;
    --secondary-black: #111;
    --secondary-white: #eee;
    --pink: #E838FF;
    --purple: #6F38FF;
    --transparentPink: #E838FF90;
    --transparentPurple: #6F38FF85;
}

* {
    cursor: url("https://cur.cursors-4u.net/symbols/sym-7/sym629.ani"), url("https://cur.cursors-4u.net/symbols/sym-7/sym629.png"), auto !important;
}

*, *::before, *::after {
    box-sizing: border-box;
    scrollbar-width: auto;
    scrollbar-color: ${({ theme }) => theme.color} #0000;
}

*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: #0000;
}

*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.color};
  border-radius: 10px;
  border: 5px solid #0000;
}

html,
body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
    font-size: 1.25em;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: all 0.25s linear;

    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;

    overflow-wrap: break-word;
    word-break: break-word;
    text-rendering: optimizeSpeed;
    line-height: 1.2;
}

a, button {
    cursor: pointer;
}

a, a:any-link {
    font-family: inherit;
    color: inherit;
    text-decoration: none;
}

a:hover, a:focus {
    text-decoration: none;
    transform: scale(0.9);
}

button:hover,
button:focus {
    background: #0000;
}

button:focus {
    outline: 1px solid #0000;
    outline-offset: -4px;
}

button:active {
    transform: scale(0.9);
}

::selection {
    background-color: ${({ theme }) => theme.selection};
}

::-moz-selection {
    background-color: ${({ theme }) => theme.selection};
}
`;

export default GlobalStyle;
