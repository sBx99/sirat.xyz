import Head from "next/head";
import styled from "styled-components";

const Main = styled.main`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 100%;
   padding: 5vh 20vw;

   font-family: "AUTHENTIC Sans", Arial, Helvetica, sans-serif, system-ui;

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      text-align: center;
      font-family: "Avara", monospace, system-ui;
   }

   p {
      text-align: justify;
   }

   li {
      margin: 0.5em 0;
      list-style: inside;
   }

   @media (max-width: 768px) {
      padding: 7.5vh 7.5vw;
   }
`;

export const Meta = ({ title, desc }) => {
   return (
      <Head>
         <title>{title}</title>
         <meta name="description" content={desc} />
      </Head>
   );
};

export const Favicon = ({ fav }) => {
   const favicon = `/icons/${fav}`;
   return (
      <Head>
         <link rel="icon" href={favicon} />
      </Head>
   );
};

const Layout = ({ children }) => {
   return (
      <>
         <Head>
            <meta
               name="viewport"
               content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
            <meta charSet="utf-8" />
         </Head>
         <Main>{children}</Main>
      </>
   );
};

export default Layout;
