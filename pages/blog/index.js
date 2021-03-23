import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { blogFilePaths, BLOGS_PATH } from "@lib/mdx";
import { Meta } from "@components/Layout";

export default function Index({ blogs }) {
   return (
      <>
         <Meta name="blog" desc="this is my blog" />
         <h1>My Blogs 📓</h1>
         <p>
            hey there, welcome to my blog 🤍💜🖤 it's coming soon. click the links below to navigate
            through the example blogs i made.
         </p>
         <ul>
            {blogs.map(blog => (
               <li key={blog.filePath}>
                  <Link as={`/blog/${blog.filePath.replace(/\.mdx?$/, "")}`} href={`/blog/[slug]`}>
                     <a>
                        {blog.data.title}
                        {/* <h3></h3> */}
                     </a>
                  </Link>
                  {/*<p>{blog.data.description}</p>*/}
               </li>
            ))}
         </ul>
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
