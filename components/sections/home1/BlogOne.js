'use client';

import Link from 'next/link';
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "@/lib/firebase";
import { slugify } from '@/app/slugfy';



export default function BlogOne() {
  const [values, setValues] = useState([]);

useEffect(() => {
  const q = collection(database, "sinemkaya");

  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach(doc => {
      const postItems = doc.data().post || [];
      const userItems = doc.data().user || [];

      const userMap = {};
      userItems.forEach(user => {
        userMap[user.id] = user.full_name;
      });

      const filtered = postItems
        .filter(item => item.isActive === "1" && item.category_id === "1")
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map(post => ({
          ...post,
          userName: userMap[post.user_id] || "Sinem Kaya"
        }));

      setValues(filtered);
    });
  });

  return () => unsubscribe();
}, []);
  
  return (
    <section className="blog-one">
      <div className="container">
        <div className="blog-one__top">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">En Son Paylaşılan</span>
            </div>
            <h2 className="section-title__title d-flex">YAZILARIM</h2>
          </div>
          <div className="blog-one__btn-box">
            <Link href="/yazilarim" className="blog-one__btn thm-btn">
              Tüm Yazılarım<span className="icon-arrow-right"></span>
            </Link>
          </div>
        </div>
        <div className="blog-one__bottom">
          <div className="row">
            {values.slice(0, 6).map(post => (
              <div
                key={post.id}
                className={`col-xl-4 col-lg-4 col-md-6 wow fadeInLeft`}
                data-wow-delay="300ms"
              >
                <div className="blog-one__single">
                  <div className="blog-one__img">
                    <img
                      src={post?.img_url ? `/assets/uploads/${post.img_url}` : "/assets/uploads/nonphoto.png"}
                      alt={post.title}
                    />
                    <div className="blog-one__hover">
                      <Link href={`/details/${slugify(post.title)}-${post.id}` || '#'}>
                        <span className="blog-one__hover-icon-1">
                          <span className="blog-one__hover-icon-2"></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <ul className="blog-one__meta list-unstyled blog-card-date">
                      <li>
                        <span className="icon-user"> </span> By {post.userName}
                      </li>
                      <li className=''>
                        <span className="icon-calendar"> </span> {new Date(post.createdAt).toLocaleDateString()}
                      </li>
                    </ul>
                    <p className="blog-one__description">
                      <Link href={`/details/${slugify(post.title)}-${post.id}` || '#'}>
                      {post.title}<br />
                        {post.description.length > 0
                          ? post.description.substring(0, post.description.lastIndexOf(" ", 0)) + " "
                          : post.description}
                      </Link>
                    </p>
                    <div className="blog-one__btn-box-tw o d-none">
                      <Link href={post.id} className="blog-one__btn thm-btn">
                        Tamamını Oku<span className="icon-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
