// app/post/[id]/page.tsx
import { doc, getDoc } from "firebase/firestore";
import { database } from "@/lib/firebase";
import Layout from "@/components/layout/Layout";
import DetailsPoem from "@/app/(blog)/poems/[id]/details"

export async function generateStaticParams() {
  const ref = doc(database, "sinemkaya", "LQnIzobySlyS2BTHEPY9"); // belge adını senin dökümanına göre değiştir
  const snapshot = await getDoc(ref);

  const data = snapshot.data();

  if (!data || !Array.isArray(data.post)) return [];

  const validPosts = data.post.filter(p => p && p.id); // boş objeleri at

  return validPosts.map(post => ({
    id: post.id.toString(),
  }));
}

export default function PoemPage({ params }) {
    const id = params.id;

  return (
    <Layout headerStyle={0} footerStyle={2}>

    <DetailsPoem params={id}/>

    </Layout>
  );
}