import Link from "next/link";
import useSound from "use-sound";

const BlogLink = props => {
   const href = props.href;
   const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
   const [bite] = useSound("/assets/sounds/bite.mp3");

   if (isInternalLink) {
      return (
         <Link href={href} onClick={bite}>
            <a {...props} />
         </Link>
      );
   }

   return <a target="_blank" rel="noopener noreferrer" {...props} onClick={bite} />;
};

export default BlogLink;
