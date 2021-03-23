import fs from "fs";
import path from "path";

// BLOGS_PATH is useful when you want to get the path to a specific file
export const BLOGS_PATH = path.join(process.cwd(), "blogs");

// blogFilePaths is the list of all mdx files inside the BLOGS_PATH directory
export const blogFilePaths = fs
   .readdirSync(BLOGS_PATH)
   // Only include md(x) files
   .filter(path => /\.mdx?$/.test(path));
