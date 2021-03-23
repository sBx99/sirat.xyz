import fs from "fs";
import path from "path";

import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";

import dynamic from "next/dynamic";
import BlogLink from "@components/blog/BlogLink";
import { Meta } from "@components/Layout";
import { blogFilePaths, BLOGS_PATH } from "@lib/mdx";

import { CanvasWrap, CanvasWrap3D } from "@components/blog/CanvasUtils";

const components = {
   a: BlogLink,
   TestComponent: dynamic(() => import("@components/blog/TestComponent")),
   RotatingLines: dynamic(() => import("@sketches/RotatingLines")),
   Simple3D: dynamic(() => import("@sketches/Simple3D")),
   CanvasWrap,
   CanvasWrap3D,
   Meta,
};

export default function BlogPage({ source, frontMatter }) {
   const content = hydrate(source, { components });
   return (
      <>
         <Meta title={frontMatter.title} desc={frontMatter.description} />
         <div>
            <h1>{frontMatter.title}</h1>
            {frontMatter.description && <p className="description">{frontMatter.description}</p>}
         </div>
         <main>{content}</main>
      </>
   );
}

export const getStaticProps = async ({ params }) => {
   const blogFilePath = path.join(BLOGS_PATH, `${params.slug}.mdx`);
   const source = fs.readFileSync(blogFilePath);

   const { content, data } = matter(source);

   const mdxSource = await renderToString(content, {
      components,
      // Optionally pass remark/rehype plugins
      mdxOptions: {
         remarkPlugins: [],
         rehypePlugins: [],
      },
      scope: data,
   });

   return {
      props: {
         source: mdxSource,
         frontMatter: data,
      },
   };
};

export const getStaticPaths = async () => {
   const paths = blogFilePaths
      // Remove file extensions for page paths
      .map(path => path.replace(/\.mdx?$/, ""))
      // Map the path into the static paths object required by Next.js
      .map(slug => ({ params: { slug } }));

   return {
      paths,
      fallback: false,
   };
};
