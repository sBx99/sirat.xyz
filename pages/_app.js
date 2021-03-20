import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Link from "next/link";

import GlobalStyle, { lightTheme, darkTheme } from "@/styles/globals";
import Layout from "../components/Layout";

import { LightHeartToggle, DarkHeartToggle } from "../components/index/Images";
import { NoiseBg } from "../components/index/Noise";

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

    @media (max-width: 768px) {
        top: 2.5vh;
        left: 5vw;
    }
`;

// fixed navbar

const Nav = styled.div`
    position: fixed;
    top: 7.5vh;
    right: 1em;
    z-index: 10;
    backdrop-filter: blur(2px);
    background-blend-mode: luminosity;

    & a {
        filter: drop-shadow(0 0 1px ${({ theme }) => theme.color});
        transition: all 0.25s linear;

        :hover {
            filter: drop-shadow(0 0 15px ${({ theme }) => theme.link.background});
            text-shadow: 0 0 10px ${({ theme }) => theme.link.background},
                0 0 11.5px ${({ theme }) => theme.link.background},
                0 0 13px ${({ theme }) => theme.link.background};
        }
    }

    & .home,
    .blog {
        margin-right: 2.5vw;
    }

    & span {
        font-style: normal;
    }

    @media (max-width: 768px) {
        top: 5vh;
        right: 5vw;
    }

    @media (max-width: 320px) {
        font-size: 0.25em;
    }
`;

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <GlobalStyle />
            <NoiseBg />
            <FixToggle>
                <Button onClick={toggleTheme}>
                    {theme === "dark" ? <LightHeartToggle /> : <DarkHeartToggle />}
                </Button>
            </FixToggle>
            <Nav>
                <Link to="/" href="/">
                    <a className="home">
                        home <span>🏠</span>
                    </a>
                </Link>
                <Link to="/blog" href="/blog">
                    <a className="blog">
                        blog <span>📓</span>
                    </a>
                </Link>
                <Link to="/art" href="/art">
                    <a className="art">
                        art <span>🎨</span>
                    </a>
                </Link>
            </Nav>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
