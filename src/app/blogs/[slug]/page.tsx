import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { BlogHeader } from "@/app/_components/blog-header";
import ImageList from "@/app/_components/image-list";
import LinkList from "@/app/_components/links-list";

export default async function Blog(props: Params) {
    const params = await props.params;
  // console.log("Fetching blog page for slug:", params.slug);
//   const params = await props.params;
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <BlogHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
          />
          <PostBody content={content} />
          <LinkList links={post.links || {}} />
          <ImageList images={post.images || {}} /> 

        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};
  

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    title,
    openGraph: {
      title,
      images: post.ogImage ? [post.ogImage.url] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogs();
  // console.log("Static params for blogs:", posts);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}