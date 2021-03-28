import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const APP_NAME = "Sirat Baweja";
const APP_DESCRIPTION = "This is Sirat Baweja's website. Click here to find out more about her.";
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
         <Html lang="en" dir="ltr">
            <Head>
               <meta name="application-name" content={APP_NAME} />
               <meta name="apple-mobile-web-app-capable" content="yes" />
               <meta name="apple-mobile-web-app-status-bar-style" content="default" />
               <meta name="apple-mobile-web-app-title" content={APP_NAME} />
               <meta name="description" content={APP_DESCRIPTION} />
               <meta name="format-detection" content="telephone=no" />
               <meta name="mobile-web-app-capable" content="yes" />
               <meta name="theme-color" content="#000000" />

               <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
               <link rel="manifest" href="/manifest.json" />
               <link rel="shortcut icon" href="/icons/favicon.ico" />

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
            </Head>
            <body>
               <Main />
               <NextScript />
               <script
                  defer
                  src="https://static.cloudflareinsights.com/beacon.min.js"
                  data-cf-beacon='{"token": "49140d9fed1e4b28a59e8962efd8ef27"}'
               />
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
