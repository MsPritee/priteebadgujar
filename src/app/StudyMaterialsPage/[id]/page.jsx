
import { getStudyMaterial } from "@/lib/getStudyMaterial";
import { getSingleStudyMaterial } from '@/lib/getSingleStudyMaterial';
// import SingleProjectPage from "@/components/singleProjectPage";
import dynamic from "next/dynamic";

const SingleStudyMaterialPage = dynamic(() => import("@/components/singleStudyMaterial"), { ssr: true });


export async function generateStaticParams() {
  const posts = await getStudyMaterial();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Page({ params }) {
    const material = await getSingleStudyMaterial(params.id);
    return <SingleStudyMaterialPage material={material} />;
}