import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;

      try {
         ctx.renderPage = () =>
            originalRenderPage({
               enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
            });

         const initialProps = await Document.getInitialProps(ctx);
         return {
            ...initialProps,
            styles: (
               <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
               </>
            ),
         };
      } finally {
         sheet.seal();
      }
   }

   render() {
      return (
         <Html lang="en">
            <Head>
               <link rel="icon" href="/icons/favicon.ico" />
               <meta name="theme-color" content="#90f" />
               <link
                  rel="preload"
                  href="/assets/fonts/Avara/avara.woff"
                  as="font"
                  type="font/woff"
                  crossOrigin="anonymous"
               />
               <link
                  rel="preload"
                  href="/assets/fonts/Avara/avara.woff2"
                  as="font"
                  type="font/woff2"
                  crossOrigin="anonymous"
               />
               <link
                  rel="preload"
                  href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-60.woff"
                  as="font"
                  type="font/woff"
                  crossOrigin="anonymous"
               />
               <link
                  rel="preload"
                  href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-60.woff2"
                  as="font"
                  type="font/woff2"
                  crossOrigin="anonymous"
               />
               <link
                  rel="preload"
                  href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-90.woff"
                  as="font"
                  type="font/woff"
                  crossOrigin="anonymous"
               />
               <link
                  rel="preload"
                  href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-90.woff2"
                  as="font"
                  type="font/woff2"
                  crossOrigin="anonymous"
               />
               <link
                  rel="preload"
                  href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-130.woff"
                  as="font"
                  type="font/woff"
                  crossOrigin="anonymous"
               />
               <link
                  rel="preload"
                  href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-130.woff2"
                  as="font"
                  type="font/woff2"
                  crossOrigin="anonymous"
               />
               <link
                  rel="preload"
                  href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-150.woff"
                  as="font"
                  type="font/woff"
                  crossOrigin="anonymous"
               />
               <link
                  rel="preload"
                  href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-150.woff2"
                  as="font"
                  type="font/woff2"
                  crossOrigin="anonymous"
               />
               <script async data-api="/_hive" src="/bee.js"></script>
            </Head>
            <body>
               <Main />
               <NextScript />
               <style jsx global>{`
                  /* global style override */

                  #__next {
                     height: 100%;
                  }
               `}</style>
            </body>
         </Html>
      );
   }
}

export default MyDocument;
