/** @/app/my_projects/page */
import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";


const allPosts = getAllPosts();

const morePosts = allPosts.slice(1);


export default function Page() {
  const allPosts = getAllPosts();
  const morePosts = allPosts.slice(1);
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
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight beegName">
        My Projects
      </h2>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
    );
}