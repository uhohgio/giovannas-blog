import { Post } from "@/interfaces/post";
import { Blogpost } from "@/interfaces/blogpost";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

const blogDirectory = join(process.cwd(), "_blogs");

export function getBlogSlugs() {
  try {
    const slugs = fs.readdirSync(blogDirectory);
    // console.log("Blog slugs found:", slugs);
    return slugs;
  } catch (error) {
    console.error("Error reading blog directory:", error);
    return [];
  }
}

export function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Blogpost;
}


export function getAllBlogs(): Blogpost[] {
  const slugs = getBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    // sort posts by date in descending order
    .sort((blog1, blog2) => (blog1.date > blog2.date ? -1 : 1));
  return blogs;
}
