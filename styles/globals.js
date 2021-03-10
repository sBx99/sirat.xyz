import { createGlobalStyle } from "styled-components";

/* themes */
export const lightTheme = {
    background: "var(--white)",
    color: "var(--black)",
    selection: "var(--transparentPink)",
    link: {
        color: "var(--purple)",
        underline: "var(--pink)",
        background: "var(--transparentPink)",
        shadow: "var(--purple)",
    },
};

export const darkTheme = {
    background: "var(--black)",
    color: "var(--white)",
    selection: "var(--transparentPurple)",
    link: {
        color: "var(--pink)",
        underline: "var(--purple)",
        background: "var(--transparentPurple)",
        shadow: "var(--pink)",
    },
};

/* global styles */
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Avara";
    src: url("/fonts/avara.woff") format("woff"),
        url("/fonts/avara.woff2") format("woff2");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
}

:root {
    /* colors */
    --prim-txt: #000;
    --prim-bg: #fafafa;
    --sec-txt: #fff;
    --sec-bg: #050505;
    --cover: #00f;
    --covered: #00f2;

    --black: #050505;
    --white: #FAFAFA;
    --pink: #E838FF;
    --purple: #6F38FF;
    --transparentPink: #E838FF90;
    --transparentPurple: #6F38FF85;
}

*, *::before, *::after {
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: var(--prim-txt) var(--prim-bg);
}

*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: var(--prim-bg);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--prim-txt);
  border-radius: 20px;
  border: 3px solid var(--prim-bg);
}

html,
body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;

    font-family: "Menlo", monospace, system-ui;
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
    font-family: "Avara", serif;
}

p {
    text-align: justify;
}

a, a:-webkit-any-link {
    font-family: "Avara", serif;
    color: inherit;
    font-weight: bold;
    font-style: italic;
    text-decoration: none;
    cursor: pointer;
}

a:hover, a:focus {
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
