import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import useSound from "use-sound";

import GlobalStyle, { lightTheme, darkTheme } from "@styles/globals";
import Layout from "@components/Layout";
import Progress from "@components/ScrollProgress";
import Nav from "@components/Nav";

import { LightHeartToggle, DarkHeartToggle } from "@components/index/Images";
import { ToggleButton, Toggler } from "@components/Toggle";

const MyApp = ({ Component, pageProps }) => {
   const [theme, setTheme] = useState("dark");
   const [pop] = useSound("/assets/sounds/pop.mp3");

   function toggleTheme() {
      theme === "dark" ? setTheme("light") : setTheme("dark");
   }

   return (
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
         <GlobalStyle />
         <Progress />
         <Toggler>
            <ToggleButton
               onClick={() => {
                  toggleTheme();
                  pop();
               }}>
               {theme === "dark" ? <LightHeartToggle /> : <DarkHeartToggle />}
            </ToggleButton>
         </Toggler>
         <Nav />
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </ThemeProvider>
   );
};

export default MyApp;
