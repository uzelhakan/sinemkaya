import Layout from "@/components/layout/Layout";
import { doc, getDoc } from "firebase/firestore";
import { database } from "@/lib/firebase";
import DetailsPost from "@/app/(blog)/details/[slugAndId]/details"
import { slugify } from "@/app/slugfy";

export const revalidate = 60;

export async function generateStaticParams() {
  const ref = doc(database, "sinemkaya", "LQnIzobySlyS2BTHEPY9");
  const snapshot = await getDoc(ref);
  const data = snapshot.data();

  if (!data || !Array.isArray(data.post)) return [];

  const validPosts = data.post.filter(p => p && p.id); // sadece id kontrolü yeter

  return validPosts.map(post => {
    const rawTitle = typeof post.title === "string" && post.title.trim().length > 0
      ? post.title
      : "no-title"; // fallback
    const slug = slugify(rawTitle, { lower: true, strict: true });
    return {
      slugAndId: `${slug}-${post.id}`,
    };
  });
}

export default function PostPage({ params }) {
    const { slugAndId } = params;

  // slug ve id'yi ayır
  /*const parts = slugAndId.split("-");
  const slug = parts.join("-"); // kalan parçalar slug
  const id = params.slugAndId.split('-').pop();*/
  const parts = slugAndId.split("-");
  const id = parts.pop(); // son parçayı ID olarak al
  const slug = parts.join("-"); // geriye kalan parçalar slug

  return (
    <>
      <Layout headerStyle={0} footerStyle={2} breadcrumbTitle={slug}>
        
        <DetailsPost ids={id} />

      </Layout>
    </>
  );
}
