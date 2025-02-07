import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1,3);


  return (
    <>
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        <h2 className="font-orbitron mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Recent Work
        </h2>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
    </>
  );
}
