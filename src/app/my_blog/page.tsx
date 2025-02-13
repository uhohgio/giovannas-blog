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
      <h3 className="mb-2 text-lg font-bold tracking-tighter leading-tight beegName"> Wow! You found the secret blog page! Enjoy a read into my mind: </h3>
        {moreBlogs.length > 0 && <MoreBlogs blogs={moreBlogs} />}
      </Container>
    </main>
    );
}