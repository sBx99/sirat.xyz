import fs from "fs";
import path from "path";

import styled from "styled-components";
import matter from "gray-matter";
import useSound from "use-sound";
import Link from "next/link";

import { blogFilePaths, BLOGS_PATH } from "@lib/mdx";
import { Meta } from "@components/Layout";

const BlogContainer = styled.ul`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;

   list-style: none;
   padding-left: 0;

   & li {
      list-style: none;
   }

   & a {
      :hover,
      :focus,
      :visited {
         transform: none;
      }
   }
`;

const BlogNav = styled.li`
   padding: 1vh 3vw;
   margin: 5vh 0;
   border-radius: 20px;
   background: ${({ theme }) => theme.secondary};
   box-shadow: inset 0 0 10px 10px ${({ theme }) => theme.background};
   transition: background 0.25s ease-in-out;

   :hover {
      background: rgba(127, 127, 127, 0.25);
   }

   & p {
      text-align: center;
   }
`;

export default function Index({ blogs }) {
   const [bite] = useSound("/assets/sounds/bite.mp3");
   return (
      <>
         <Meta title="blog" desc="all my blogs lies here" />
         <h1>My Blogs 📓</h1>
         <p>
            hey there, welcome to my blog 🤍💜🖤 it's coming soon. click the links below to navigate
            through the example blogs i made.
         </p>
         <BlogContainer>
            {blogs.map(blog => (
               <Link as={`/blog/${blog.filePath.replace(/\.mdx?$/, "")}`} href={`/blog/[slug]`}>
                  <a onClick={bite}>
                     <BlogNav key={blog.filePath}>
                        <h3>{blog.data.title}</h3>
                        <p>{blog.data.description}</p>
                     </BlogNav>
                  </a>
               </Link>
            ))}
         </BlogContainer>
      </>
   );
}

export function getStaticProps() {
   const blogs = blogFilePaths.map(filePath => {
      const source = fs.readFileSync(path.join(BLOGS_PATH, filePath));
      const { content, data } = matter(source);

      return {
         content,
         data,
         filePath,
      };
   });

   return { props: { blogs } };
}
