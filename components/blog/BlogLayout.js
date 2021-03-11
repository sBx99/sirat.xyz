import styled from "styled-components";

const BlogLayoutStyles = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BlogLayout = ({ children }) => {
    return <BlogLayoutStyles>{children}</BlogLayoutStyles>;
};

export default BlogLayout;
