import Link from "next/link";
import DateFormatter from "./date-formatter";
import CoverImage from "@/app/_components/blog-cover-image";

type Props2 = {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    slug: string;
  };
  
  export function BlogPreview({
    title,
    coverImage,
    date,
    excerpt,
    slug,
  }: Props2) {
    return (
      <div>
        {/* <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div> */}
        <h3 className=" font-orbitron text-6xl mb-3 leading-snug">
        <Link href={`/blogs/${slug}`} className="hover:underline">
          {title}
        </Link>
        </h3>
        <div className="font-orbitron text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        {/* <h1 className="text-lg tracking-tighter leading-relaxed mb-4">{excerpt}</h1> */}
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
    );
  }