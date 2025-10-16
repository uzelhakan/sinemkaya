'use client';

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "@/lib/firebase";
import { slugify } from '@/app/slugfy';

export default function Home() {
   const [blogData, setBlog] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
const postsPerPage = 20;

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

const totalPages = Math.ceil(blogData.length / postsPerPage);

const handleNextPage = () => {
  if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
};

const handlePrevPage = () => {
  if (currentPage > 1) setCurrentPage(prev => prev - 1);
};
  
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
  
        const filteredBlog = postItems
          .filter(item => item.isActive === "1" )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(post => ({
            ...post,
            userName: userMap[post.user_id] || "Sinem Kaya"
          }));
  
        setBlog(filteredBlog);
      });
    });
  
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Layout headerStyle={0} footerStyle={2} breadcrumbTitle="Blog">
        <div>
          {/* Blog Page Start */}
          <section className="blog-page">
            <div className="container">
              <div className="row">
                {currentPosts.map((blog, index) => (
                  <div
                    key={blog.id}
                    className={`col-xl-4 col-lg-4 col-md-6 wow fadeIn${
                      index % 3 === 0
                        ? "Left"
                        : index % 3 === 1
                        ? "Up"
                        : "Right"
                    }`}
                    data-wow-delay={`${(index + 1) * 100}ms`}
                  >
                    <div
                key={blog.id}
                className={`col-12 wow fadeInLeft`}
                data-wow-delay="300ms"
              >
                <div className="blog-one__single">
                  <div className="blog-one__img">
<img
  src={
    blog?.img_url
      ? blog.img_url.startsWith('http')
        ? blog.img_url               // Cloudinary veya harici link
        : `/assets/uploads/${blog.img_url}` // eski yerel resimler
      : '/assets/uploads/nonphoto.png'
  }
  alt={blog?.title || ""}
  style={{ objectFit: 'cover' }}
/>
                    <div className="blog-one__hover">
                      <Link href={`/details/${slugify(blog?.title || "")}-${blog?.id || ""}` || '#'}>
                        <span className="blog-one__hover-icon-1">
                          <span className="blog-one__hover-icon-2"></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <ul className="blog-one__meta list-unstyled blog-card-date">
                      <li>
                        <span className="icon-user"> </span> By {blog?.userName || ""}
                      </li>
                      <li className=''>
                        <span className="icon-calendar"> </span> {new Date(blog?.createdAt || "").toLocaleDateString()}
                      </li>
                    </ul>
                    <p className="blog-one__description">
                      <Link href={`/details/${slugify(blog?.title || "")}-${blog?.id || ""}` || '#'}>
                      {blog?.title || ""}<br />
                        {blog.description.length > 0
                          ? blog.description.substring(0, blog?.description.lastIndexOf(" ", 0)) + "..."
                          : blog.description}
                      </Link>
                    </p>
                    <div className="blog-one__btn-box-tw o d-none">
                      <Link href={blog?.id || ""} className="blog-one__btn thm-btn">
                        Tamamını Oku<span className="icon-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Blog Page End */}
          {/* Pagination Start */}
          <div className="pagination-container text-center mt-4">
            <button
              className="thm-btn me-2"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Önceki
            </button>
            <span>Sayfa {currentPage} / {totalPages}</span>
            <button
              className="thm-btn ms-2"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Sonraki
            </button>
          </div>
          {/* Pagination End */}
          {/* CTA One Start */}
          <section className="cta-one">
            <div className="container">
              <div className="cta-one__inner">
                              <h3 className="cta-one__title">
                Instagramdan takip ederek <br /> etkinliklerden haberdar olun.
              </h3>
              <form
                className="cta-one__form mc-form"
                data-url="MC_FORM_URL"
                noValidate
              >
                <div className="cta-one__form-input-box">
                  <input
                    type="email"
                    placeholder="@linasinem"
                    name="EMAIL"
                    readOnly
                  />
                  <Link className="cta-one__btn" href="https://www.instagram.com/linasinem/" target="_blank" rel="noopener noreferrer">
                    <span className="icon-instagram"></span>
                  </Link>
                </div>
              </form>
              </div>
            </div>
          </section>
          {/* CTA One End */}
        </div>
      </Layout>
    </>
  );
}
