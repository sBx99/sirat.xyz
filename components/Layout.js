import Head from "next/head";
import styled from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 5vh 20vw;

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

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <Main>{children}</Main>
        </>
    );
};

export default Layout;
