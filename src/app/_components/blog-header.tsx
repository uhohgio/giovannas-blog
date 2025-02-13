import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function BlogHeader({ title, coverImage, date }: Props) {
  return (
    <>
    <div className="max-w-2xl mx-auto">
      {/* <PostTitle>{title}</PostTitle> */}
      {/* <div className="hidden md:block md:mb-12">
      
      </div> */}
      <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-2 text-center md:text-left">
      {title}
    </h1>
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div> */}
      
        <div className="mb-12 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}