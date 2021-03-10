import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle, { lightTheme, darkTheme } from "../styles/globals";
import Layout from "../components/Layout";

import { LightHeartToggle, DarkHeartToggle } from "../components/index/Images";

// Button
const Button = styled.button`
    border: 1px solid #0000;
    color: #0000;
    background: #0000;
`;

// fixed toggle
const FixToggle = styled.div`
    position: fixed;
    top: 1em;
    left: 1em;
    z-index: 10;
`;

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <GlobalStyle />
            <FixToggle>
                <Button onClick={toggleTheme}>
                    {theme === "dark" ? <LightHeartToggle /> : <DarkHeartToggle />}
                </Button>
            </FixToggle>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
