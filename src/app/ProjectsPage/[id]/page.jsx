
import { getProjects } from "@/lib/getProjects";
import { getSingleProject } from '@/lib/getSingleProject';
// import SingleProjectPage from "@/components/singleProjectPage";
import dynamic from "next/dynamic";

const SingleProjectPage = dynamic(() => import("@/components/singleProjectPage"), { ssr: true });


export async function generateStaticParams() {
  const posts = await getProjects();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Page({ params }) {
    const project = await getSingleProject(params.id);
    return <SingleProjectPage project={project} />;
}