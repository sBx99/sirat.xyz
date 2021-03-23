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
   color: inherit;
   background: inherit;
   border: 2px solid ${({ theme }) => theme.color};
   transition: all 0.25s linear;

   & p {
      text-align: left;
   }

   :hover {
      transform: scale(0.95);
      filter: drop-shadow(0 0 10px ${({ theme }) => theme.link.background});
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
