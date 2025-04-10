// import SingleBlogPage from "@/components/SingleBlogPage";
import { getSingleBlogPost } from "@/lib/getSingleBlogPost";
import { getBlogPosts } from "@/lib/getBlogPosts";
import dynamic from "next/dynamic";

const SingleBlogPage = dynamic(() => import("@/components/singleBlogPage"), { ssr: true });

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Page({ params }) {
    const post = await getSingleBlogPost(params.id);
    return <SingleBlogPage post={post} />;
}

