'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "@/lib/firebase";
import MakeComment from "./comment";

export default function PostDetailsPage({ ids }) {
  const id = ids;

  const [values, setValues] = useState([]);
  const [comments, setComments] = useState([]);
  const [category, setCategories] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [postItems, setPostItems] = useState([]);

useEffect(() => {
  const q = collection(database, "sinemkaya");

  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach(doc => {
      const postItems = doc.data().post || [];
      const userItems = doc.data().user || [];
      const commentItems = doc.data().comments || [];
      const categoryItems = doc.data().category || [];

      const userMap = {};
      userItems.forEach(user => {
        userMap[user.id] = user.full_name;
      });

      const filtered = postItems
        .filter(item => item.isActive === "1")
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map(post => ({
          ...post,
          userName: userMap[post.user_id] || "Sinem Kaya",
        }));

        const post = filtered.find(p => String(p.id) === String(id));
        const filteredComments = commentItems.filter(
          comment =>
            String(comment.post_id) === String(id) &&
            comment.isActive === 1
        );

      
      let categoryName = "Kategori Yok";
      if (post && post.category_id) {
        const matchedCategory = categoryItems.find(
          item => String(item.id) === String(post.category_id)
        );
        categoryName = matchedCategory ? matchedCategory.title : "Kategori Yok";
      }


      setValues(post);
      setComments(filteredComments);
      setCategories(categoryName);
      setCategoryItems(categoryItems);
      setPostItems(postItems);

      console.log("Firestore'dan gelen veriler:", post);
      console.log("İlgili yorumlar:", filteredComments);
      console.log("Kategori:", categoryItems);
    });
  });

  return () => unsubscribe();
}, []);

  return (
    <>
        {/*Blog Details Start*/}
        <section className="blog-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
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
                    <div className="blog-details__img-box d-none">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="blog-details__img-box-img-1">
                            <img
                              src="/assets/images/blog/blog-details-img-box-img-1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="blog-details__img-box-img-1">
                            <img
                              src="/assets/images/blog/blog-details-img-box-img-2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-details__prev-and-next d-none">
                      <div className="blog-details__prev-box">
                        <a href="#" className="blog-details__prev-arrow">
                          <span className="icon-arrow-left"></span>
                        </a>
                        <a href="#" className="blog-details__prev">
                          Previous
                          <br /> post
                        </a>
                      </div>
                      <div className="blog-details__next-box">
                        <a href="#" className="blog-details__next">
                          Next
                          <br /> post
                        </a>
                        <a href="#" className="blog-details__next-arrow">
                          <span className="icon-arrow-right"></span>
                        </a>
                      </div>
                    </div>
                    <div className="blog-details__keyword-and-social">
                      <div className="blog-details__keyword-box">
                        <span>Kategoriler:</span>

                        <div className="blog-details__keyword">
                          <Link href="#">{category || ""}</Link>
                        </div>
                      </div>
                      <div className="blog-details__social">
                        <Link href="https://x.com/linasinem" target="_blank">
                          <i className="icon-fi"></i>
                        </Link>
                        <Link href="https://www.instagram.com/linasinem/" target="_blank" rel="noopener noreferrer">
                          <span className="icon-instagram"></span>
                        </Link>
                      </div>
                    </div>
                      <div className="blog-details__comment-box">
                        <h3 className="blog-details__comment-title">
                          {comments?.length || ""} Comment{comments.length !== 1 ? 's' : ''}
                          </h3>
                        {comments.slice(0, 6).map(comments => (
                        <div key={comments.id}>
                          <p className="blog-details__comment-date">
                            {new Date(comments.createdAt).toLocaleDateString('tr-TR', {
                              year: '2-digit',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                          <h4 className="blog-details__comment-client-name">
                            {comments.name}
                          </h4>
                          <p className="blog-details__comment-text">
                            <span style={{ marginLeft: "22px" }}>{comments.comment}</span>
                          </p>
                          <div className="blog-details__comment-btn-box">
                            <a
                              href="#"
                              className="blog-details__comment-btn thm-btn d-none"
                            >
                              reply
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <MakeComment postId={id} />
                </div>
              </div>
              {/* Sidebar */}
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar">
                  {/* Search */}
                  <div className="sidebar__single sidebar__search">
                    <h3 className="sidebar__title">Search</h3>
                    <form className="sidebar__search-form">
                      <input type="search" placeholder="Search...." />
                      <button type="submit">
                        <i className="icon-loupe"></i>
                      </button>
                    </form>
                  </div>

                  {/* Categories */}
                  <div className="sidebar__single sidebar__all-category">
                    <h3 className="sidebar__title">Category</h3>
                    <ul className="sidebar__all-category-list list-unstyled">
                      {categoryItems.map(category => {
                            const count = postItems.filter(post => String(post.category_id) === String(category.id)).length;
                        return (
                          <li
                            key={category.id}
                            className={
                              String(values?.category_id || "") === String(category.id)
                                ? count > 0 ? "active" : "d-none"
                                : count > 0 ? "" : "d-none"
                            }
                          >
                            <Link href={category.link || "#"}>
                              <i className="icon-double-angle"></i>
                              {category.title}
                              <span>
                                ({count})
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Blog Details End*/}

        {/*CTA One Start*/}
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
        {/*CTA One End*/}
    </>
  );
}
