import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={0} footerStyle={2} breadcrumbTitle="CONTACT US">
        <div>
          {/*Contact One Start*/}
          <section hidden className="contact-one">
            <div className="container">
              <div className="contact-one__inner">
                <h3 className="contact-one__title">Write here below?</h3>
                <p className="contact-one__text">
                  For your car we will do everything advice, repairs and they
                  can maintenance. We are the some preferred choice
                </p>
                <form
                  className="contact-form-validated contact-one__form"
                  action="assets/inc/sendemail.php"
                  method="post"
                  noValidate
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <div className="select-box">
                          <select className="selectmenu wide" defaultValue="Choose Option">
                            <option value="Choose Option">Choose Option</option>
                            <option value="Type Of Service 01">Type Of Service 01</option>
                            <option value="Type Of Service 02">Type Of Service 02</option>
                            <option value="Type Of Service 03">Type Of Service 03</option>
                            <option value="Type Of Service 04">Type Of Service 04</option>
                            <option value="Type Of Service 05">Type Of Service 05</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-one__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <div className="contact-one__btn-box">
                        <button
                          type="submit"
                          className="thm-btn contact-one__btn"
                        >
                          Submit Now<span className="icon-arrow-right"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </section>
          {/*Contact One End*/}

          {/*Contact Two Start*/}
          <section 
          className="contact-two"
          style={{marginTop: '100px'}}
          >
            <div className="container">
              <div className="row">
                {/* Contact Two Single Start */}
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-two__single">
                    <div className="contact-two__icon">
                      <span className="icon-pin"></span>
                    </div>
                    <h3 className="contact-two__title">Location</h3>
                    <p className="contact-two__text">
                      Ankara / Türkiye                       
                    </p>
                  </div>
                </div>
                {/* Contact Two Single End */}

                {/* Contact Two Single Start */}
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-two__single">
                    <div className="contact-two__icon">
                      <span className="icon-paper-plan"></span>
                    </div>
                    <h3 className="contact-two__title">E-mail</h3>
                    <p className="contact-two__text">
                      <a href="mailto:tim.jennings@example.com">
                        sinem.kaya@gmail.com
                      </a>
                    </p>
                    <p hidden className="contact-two__text">
                      <a href="mailto:debra.holt@example.com">
                        debra.holt@example.com
                      </a>
                    </p>
                  </div>
                </div>
                {/* Contact Two Single End */}

                {/* Contact Two Single Start */}
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-two__single">
                    <div className="contact-two__icon">
                      <span className="icon-call"></span>
                    </div>
                    <h3 className="contact-two__title">Whatsapp</h3>
                    <p className="contact-two__text">
                      <a href="https://wa.me/905332135538?text=Merhaba%20bilgi%20almak%20istiyorum">(+90) 533-213-5538</a>{" "}
                      <a hidden href="tel:017485962546">+90...</a>
                    </p>
                    <p hidden className="contact-two__text">
                      <a href="tel:016457896333">+90...</a>
                    </p>
                  </div>
                </div>
                {/* Contact Two Single End */}
              </div>
            </div>
          </section>
          {/*Contact Two End*/}

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
        </div>
      </Layout>
    </>
  );
}
