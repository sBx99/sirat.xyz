import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="theme-color" content="#0f0f0f" />
                    {/*
                    // load your assets
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/logo-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/logo-16x16.png" />
                    <link rel="apple-touch-icon" href="/icons/logo-96x96.png" />
                    <link
                        rel="mask-icon"
                        href="/icons/logo-safari-pinned-tab.svg"
                        color="#0f0f0f"
                    />
                    <meta name="msapplication-TileColor" content="#0f0f0f" />
                    <meta name="apple-mobile-web-app-status-bar" content="#0f0f0f" />
                    */}

                    {/* fonts */}
                    <link
                        rel="preload"
                        href="/assets/fonts/Avara/avara.woff"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/Avara/avara.woff2"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-60.woff"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-60.woff2"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-90.woff"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-90.woff2"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-130.woff"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-130.woff2"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-150.woff"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/AUTHENTIC-Sans/AUTHENTICSans-150.woff2"
                        as="font"
                        crossOrigin=""
                    />
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
