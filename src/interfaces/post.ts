import { type Author } from "./author";
import { type Image } from "./image";
import { type Link } from "./link";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
  images: Image[];
  links: Link[];
};
