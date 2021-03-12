import styled from "styled-components";
import Link from "next/link";

const BlogLayoutStyles = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BlogLayout = ({ children }) => {
    return <BlogLayoutStyles>{children}</BlogLayoutStyles>;
};

const Card = styled.div`
    font-style: normal !important;
    padding: 0.25em 1em;
    background: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.color};
    filter: drop-shadow(0 0 10px ${({ theme }) => theme.link.background});

    & p {
        text-align: left;
    }
`;

export const BlogCard = ({ title, desc, slug }) => {
    const fullSlug = `/blog/${slug}`;
    return (
        <Card>
            <Link to={fullSlug} href={fullSlug}>
                <a>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </a>
            </Link>
        </Card>
    );
};
