"use client";
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  const blogPosts = [
    {
      imgSrc: "/assets/images/blog/blog-list-1-1.jpg",
      date: "29 Jan",
      author: "admin",
      postDate: "October 19, 2022",
      title:
        "Join the Festivi Celebrate Special Moments Making Your Event Dreams Come True Events That Leave",
      link: "/blog-details",
    },
    {
      imgSrc: "/assets/images/blog/blog-list-1-2.jpg",
      date: "29 Jan",
      author: "admin",
      postDate: "October 19, 2022",
      title:
        "Factio that a reader will be distrol acted the aa laoreet Aliquam fact that a repli reader",
      link: "/blog-details",
    },
    {
      imgSrc: "/assets/images/blog/blog-list-1-3.jpg",
      date: "29 Jan",
      author: "admin",
      postDate: "October 19, 2022",
      title:
        "Ished fact that a reader will be distrol acted bioii fact that a repli reader",
      link: "/blog-details",
    },
  ];

  const categories = [
    { name: "Event Prodigy", count: 2, link: "/blog-details" },
    { name: "Stellar Events Co", count: 4, link: "/blog-details" },
    {
      name: "Elite Event Management",
      count: 1,
      link: "/blog-details",
      active: true,
    },
    { name: "Infinite Occasions", count: 6, link: "/blog-details" },
    { name: "Dream Event Planners", count: 3, link: "/blog-details" },
  ];

  const recentPosts = [
    {
      date: "Jan 10, 2024",
      title: "Unforgettable Mome Celebrate Unforgettable Events",
      link: "/blog-details",
    },
    {
      date: "Jun 20, 2024",
      title: "Aliquam an eros justo, posuere lobortis, viverra laoreet",
      link: "/blog-details",
    },
    {
      date: "Jan 15, 2024",
      title: "Aliquam eros justo, posuere loborti viverra laoreet",
      link: "/blog-details",
    },
  ];

  const tags = [
    "All Project",
    "Prodigy",
    "Stellar Events",
    "Occasions",
    "Spectacular",
    "Moments",
  ];

  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Blog List">
        <div>
          <section className="blog-list">
            <div className="container">
              <div className="row">
                {/* Blog List */}
                <div className="col-xl-8 col-lg-7">
                  <div className="blog-list__left">
                    {blogPosts.map((post, index) => (
                      <div className="blog-list__single" key={index}>
                        <div className="blog-list__img-box">
                          <div className="blog-list__img">
                            <img src={post.imgSrc} alt="Blog Post" />
                          </div>
                          <div className="blog-list__date">
                            <p>{post.date}</p>
                          </div>
                        </div>
                        <div className="blog-list__content">
                          <ul className="blog-list__meta list-unstyled">
                            <li>
                              <Link href="#">
                                <span className="icon-user"></span>By{" "}
                                {post.author}
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <span className="icon-calendar"></span>
                                {post.postDate}
                              </Link>
                            </li>
                          </ul>
                          <h3 className="blog-list__title">
                            <Link href={post.link}>{post.title}</Link>
                          </h3>
                          <div className="blog-list__btn-box">
                            <Link
                              href={post.link}
                              className="blog-list__btn thm-btn"
                            >
                              Read More
                              <span className="icon-arrow-right"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Pagination */}
                    <div className="blog-list__pagination">
                      <ul className="pg-pagination list-unstyled">
                        <li className="count">
                          <Link href="/blog-details">01</Link>
                        </li>
                        <li className="count">
                          <Link href="/blog-details">02</Link>
                        </li>
                        <li className="count">
                          <Link href="/blog-details">03</Link>
                        </li>
                        <li className="next">
                          <Link href="/blog-details" aria-label="Next">
                            <i className="icon-double-angle"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
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
                        {categories.map((category, index) => (
                          <li
                            key={index}
                            className={category.active ? "active" : ""}
                          >
                            <Link href={category.link}>
                              <i className="icon-double-angle"></i>
                              {category.name}
                              <span>({category.count})</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Recent Posts */}
                    <div className="sidebar__single sidebar__post">
                      <h3 className="sidebar__title">Recent Post</h3>
                      <ul className="sidebar__post-list list-unstyled">
                        {recentPosts.map((post, index) => (
                          <li key={index}>
                            <div className="sidebar__post-content">
                              <p className="sidebar__post-date">
                                <span className="icon-calendar"></span>
                                {post.date}
                              </p>
                              <h3>
                                <Link href={post.link}>{post.title}</Link>
                              </h3>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="sidebar__single sidebar__tags">
                      <h3 className="sidebar__title">Tags</h3>
                      <div className="sidebar__tags-list">
                        {tags.map((tag, index) => (
                          <Link href="#" key={index}>
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CTA One Start */}
          <section className="cta-one">
            <div className="container">
              <div className="cta-one__inner">
                <h3 className="cta-one__title">
                  Get Latest Updates Subscribe <br /> to Our Newsletter
                </h3>
                <form
                  className="cta-one__form mc-form"
                  data-url="MC_FORM_URL"
                  noValidate
                >
                  <div className="cta-one__form-input-box">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="EMAIL"
                    />
                    <button type="submit" className="cta-one__btn">
                      <span className="icon-paper-plan"></span>
                    </button>
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
