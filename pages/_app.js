import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
   const [isOnline, setIsOnline] = useState(true);
   const [pop] = useSound("/assets/sounds/pop.mp3");

   function toggleTheme() {
      theme === "dark" ? setTheme("light") : setTheme("dark");
   }

   useEffect(() => {
      if (typeof window !== "undefined" && "ononline" in window && "onoffline" in window) {
         setIsOnline(window.navigator.onLine);
         if (!window.ononline) {
            window.addEventListener("online", () => {
               setIsOnline(true);
            });
         }
         if (!window.onoffline) {
            window.addEventListener("offline", () => {
               setIsOnline(false);
            });
         }
      }
   }, []);

   const router = useRouter();
   useEffect(() => {
      if (
         typeof window !== "undefined" &&
         "serviceWorker" in navigator &&
         window.workbox !== undefined &&
         isOnline
      ) {
         // skip index route, because it's already cached under `start-url` caching object
         if (router.route !== "/") {
            const wb = window.workbox;
            wb.active.then(worker => {
               wb.messageSW({ action: "CACHE_NEW_ROUTE" });
            });
         }
      }
   }, [isOnline, router.route]);

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
