/** @/app/my_blog/page */

// this is going to be like my projects page but with blog posts
import Container from "@/app/_components/container";
import { MoreBlogs } from "@/app/_components/more-stories";
import { getAllBlogs } from "@/lib/api";

export default function Page() {
  const allBlogs = getAllBlogs();
  const moreBlogs = allBlogs.slice(0);
    return (
        
    <main>
        <style>
        {`
          .beegName {
            padding: 40px 0px;
          }
        `}
        </style>
      <Container>
      <h2 className="font-orbitron mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight beegName">
        My Blog!
      </h2>
      <p className="mb-2 text-lg tracking-tighter leading-relaxed beegName"> 
        Welcome to my blog page! Enjoy a read into my mind: </p>
        {moreBlogs.length > 0 && <MoreBlogs blogs={moreBlogs} />}
      </Container>
    </main>
    );
}