import { useRouter } from "next/router";
import { BlogLayout, BlogCard } from "@components/blog/BlogLayout";

export default function Post() {
   const router = useRouter();
   const { slug } = router.query;

   return (
      <BlogLayout>
         <h1>{slug}</h1>
         <p>this post doesn't exist. yet.</p>
      </BlogLayout>
   );
}
