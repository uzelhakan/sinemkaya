"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "@/lib/firebase";


export default function ServicesOne() {

  const [valuesPoem, setValuesPoem] = useState([]);
  
  useEffect(() => {
    const q = collection(database, "sinemkaya");
  
    const unsubscribePoem = onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach(doc => {
        const postItems = doc.data().post || [];
        const userItems = doc.data().user || [];
  
        const userMap = {};
        userItems.forEach(user => {
          userMap[user.id] = user.full_name;
        });
  
        const filteredPoem = postItems
          .filter(item => item.isActive === "1" && item.category_id === "2")
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(post => ({
            ...post,
            userName: userMap[post.user_id] || "Sinem Kaya"
          }));
  
        setValuesPoem(filteredPoem);
      });
    });

      return () => unsubscribePoem();
}, []);
  

  return (
    <>
      {/* Services One Start */}
      <section className="services-one">
        <div className="container">
          <div className="blog-one__top">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">En Son Paylaşılan</span>
              </div>
              <h2 className="section-title__title d-flex">ŞİİRLERİM</h2>
            </div>
            <div className="blog-one__btn-box">
              <Link href="/poems-all" className="blog-one__btn thm-btn">
                Tüm Şiirler<span className="icon-arrow-right"></span>
              </Link>
            </div>
          </div>
          <div className="row">
            {[...valuesPoem]
            .sort(() => Math.random() - 0.5)
            .slice(0, 6)
            .map((service) => (
              <div key={service.id} className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                <div className="services-one__single">
                    <p className="services-one__text d-flex justify-center text-center">
                      {service.description.length > 100
                          ? service.description.substring(0, service.description.lastIndexOf(" ", 200)) + "..."
                          : service.description}
                    </p>
                  <Link href={`/poems/${service.id}` || '#'}
                  className="services-one__read-more">
                    Tamamını Oku <span className="icon-arrow-right"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services One End */}
    </>
  );
}
