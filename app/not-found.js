"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Error404() {
  return (
    <>
      <Layout headerStyle={0} footerStyle={2} breadcrumbTitle="404">
        <div>
          {/*Error Page Start*/}
          <section className="error-page">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="error-page__inner">
                    <div className="error-page__title-box">
                      <h2 className="error-page__title">404</h2>
                    </div>
                    <h3 className="error-page__tagline">
                      Sorry we can't find that page!
                    </h3>
                    <p className="error-page__text">
                      The page you are looking for was never existed.
                    </p>
                    <form className="error-page__form">
                      <div className="error-page__form-input">
                        <input type="search" placeholder="Search here" />
                        <button type="submit">
                          <i className="icon-loupe"></i>
                        </button>
                      </div>
                    </form>
                    <Link href="/" className="thm-btn error-page__btn">
                      Back to home <span className="icon-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Error Page End*/}
        </div>
      </Layout>
    </>
  );
}
