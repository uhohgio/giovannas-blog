import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <Link href={`/posts/${slug}`} className="hover:underline">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
        
      </div>
      <h3 className=" font-orbitron text-3xl mb-3 leading-snug">
        
          {title}
        
      </h3>
      <div className="font-orbitron text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
      </Link>
    </div>
  );
}
