import { createGlobalStyle } from "styled-components";

/* themes */
export const lightTheme = {
    background: "var(--white)",
    color: "var(--black)",
    selection: "var(--transparentPurple)",
    glitter: "/assets/glitter/purple.gif",
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
    font-display: swap;
}

@font-face {
  font-family: "AUTHENTIC Sans";
  src: url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-60.woff") format("woff"),
      url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-60.woff2") format("woff2");
  font-style: normal;
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: "AUTHENTIC Sans";
  src: url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-90.woff") format("woff"),
      url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-90.woff2") format("woff2");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "AUTHENTIC Sans";
  src: url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-130.woff") format("woff"),
      url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-130.woff2") format("woff2");
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: "AUTHENTIC Sans";
  src: url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-150.woff") format("woff"),
      url("/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-150.woff2") format("woff2");
  font-style: normal;
  font-weight: 900;
  font-display: swap;
}

:root {
    /* colors */
    --black: #050505;
    --white: #FAFAFA;
    --pink: #E838FF;
    --purple: #6F38FF;
    --transparentPink: #E838FF90;
    --transparentPurple: #6F38FF85;
}

*, *::before, *::after {
    box-sizing: border-box;
    scrollbar-width: auto;
    scrollbar-color: ${({ theme }) => theme.color} ${({ theme }) => theme.selection};
}

*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.selection};
}

*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.color};
  border-radius: 20px;
  border: 4px solid ${({ theme }) => theme.selection};
}

html,
body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;

    font-family: "AUTHENTIC Sans", Arial, Helvetica, sans-serif, system-ui;
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

h1, h2, h3, h4, h5, h6 {
    font-family: "Avara", serif, system-ui;
}

p {
    text-align: justify;
}

ul, ol {
    border: 2px solid ${({ theme }) => theme.color};
    padding: 1em 2em;
    box-shadow: 0 0 20px ${({ theme }) => theme.link.background};
}

ul {
    & li {
        list-style: none;
    }
}

a, button {
    cursor: pointer;
}

a, a:any-link {
    font-family: "Avara", serif, system-ui;
    color: inherit;
    font-weight: bold;
    font-style: italic;
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
    outline: 1px solid #00000001;
    outline-offset: -4px;
}

button:active {
    transform: scale(0.9);
}

::selection {
    background-color: ${({ theme }) => theme.selection};
    color: ${({ theme }) => theme.color};
}

::-moz-selection {
    background-color: ${({ theme }) => theme.selection};
    color: ${({ theme }) => theme.color};
}
`;

export default GlobalStyle;
