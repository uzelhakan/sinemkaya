import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { database } from "@/lib/firebase"; // Firebase konfigürasyon dosyanız

export default function Menu() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const q = query(collection(database, "sinemkaya")); // Koleksiyonu sorguluyoruz

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach(doc => {
        // 'menu' array'ini alıyoruz ve aktif öğeleri filtreliyoruz
        const menuItems = doc.data().menu || []; // 'menu' array'ini alıyoruz
        const filtered = menuItems
          .filter(item => item.isActive === 1) // isActive değeri "1" olanları alıyoruz
          .sort((a, b) => a.list - b.list); // list sırasına göre sıralama yapıyoruz

        // Aktif menü öğelerini 'values' state'ine kaydediyoruz
        setValues(filtered);
      });
    });

    // Unsubscribe fonksiyonu ile dinlemeyi sonlandırıyoruz
    return () => unsubscribe();
  }, []);

  return (
    <ul className="main-menu__list">
      {values.map(item => (
        <li key={item.id}>
          <Link href={item.link || "#"}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
