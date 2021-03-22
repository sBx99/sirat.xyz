import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Link from "next/link";

import splitbee from "@splitbee/web";
import useSound from "use-sound";

import GlobalStyle, { lightTheme, darkTheme } from "@styles/globals";
import Layout from "@components/Layout";

import { LightHeartToggle, DarkHeartToggle } from "@components/index/Images";

splitbee.init({
   disableCookie: true,
});

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
      font-family: "Avara", serif !important;
      font-weight: bold;
      font-style: italic;

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
   const [pop] = useSound("/assets/sounds/pop.mp3");
   const [bite] = useSound("/assets/sounds/bite.mp3");

   function toggleTheme() {
      theme === "dark" ? setTheme("light") : setTheme("dark");
   }

   return (
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
         <GlobalStyle />
         <FixToggle>
            <Button
               onClick={() => {
                  toggleTheme();
                  pop();
               }}>
               {theme === "dark" ? <LightHeartToggle /> : <DarkHeartToggle />}
            </Button>
         </FixToggle>
         <Nav>
            <Link to="/" href="/">
               <a className="home" onClick={bite}>
                  home <span>🏠</span>
               </a>
            </Link>
            <Link to="/blog" href="/blog">
               <a className="blog" onClick={bite}>
                  blog <span>📓</span>
               </a>
            </Link>
            <Link to="/art" href="/art">
               <a className="art" onClick={bite}>
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
