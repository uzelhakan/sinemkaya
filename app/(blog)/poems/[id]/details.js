"use client";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "@/lib/firebase";
import PoemsBox from "@/components/sections/home1/ServicesOne"


export default function PoemDetailsPage({ params }) {
    const id = params;
    const [values, setValues] = useState([]);
    const [postItems, setPostItems] = useState([]);

    useEffect(() => {
  const q = collection(database, "sinemkaya");

  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach(doc => {
      const postItems = doc.data().post || [];

      const filtered = postItems
        .filter(item => item.isActive === "1")
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map(post => ({
          ...post,
        }));

        const post = filtered.find(p => String(p.id) === String(id));



      setValues(post);
      setPostItems(postItems);

      console.log("Firestore'dan gelen veriler:", post);
    });
  });

  return () => unsubscribe();
}, [id]);

  return (
    <section className="blog-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-7">
                <div className="blog-details__left">
                  <div className="blog-details__img-1">
                    {values ? (
                      <img
                          src={values.img_url?.trim() ? `/assets/uploads/${values.img_url}` : '/assets/uploads/nonphoto.png'}
                        alt={values.title || "Blog Image"}
                      />
                    ) : (
                      <img
                        src="/assets/uploads/nonphoto.png"  // varsayılan bir resim koyabilirsin
                        alt="Default Image"
                      />
                    )}
                    <div className="blog-details__date">
                      <p>
                        {new Date(values?.createdAt || "").toLocaleDateString('tr-TR', {
                          day: '2-digit',
                          month: 'short',
                          year: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="blog-details__content">
                    <h3 className="blog-details__title-1">
                      {values?.title || ""}
                    </h3>
                    <p
                    style={{ textAlign: 'justify' }}
                    dangerouslySetInnerHTML={{ __html: values?.description || "" }}
                    >
                    </p>
                  </div>
                  <div className="comment-one">
                    <PoemsBox />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
  );
}