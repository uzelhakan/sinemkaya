import Link from "next/link";

export default function Footer2() {
  const events = [
    {
      date: "11 Eylül 2025 Astroloji Atolyesi",
      title: "Kendi Kendine Astroloji Atolyesi",
      link: "https://www.instagram.com/reel/DMFf58LtbnN/?igsh=Z3d2cW5odzRjajJv",
    },
    {
      date: "16 Eylül 2025 Astroloji Atolyesi",
      title: "Sabit Yıldızlar Atolyesi",
      link: "https://www.instagram.com/p/DMGl2P9tHhO/?igsh=MXJ4MWF1bTh1ejdhNg%3D%3D",
    },
  ];

  const contactDetails = {
    email: "sinem.kaya@gmail.com",
    address: "Ankara",
    phone: ["0533 213 55 38"],
  };

  return (
    <>
      {/* Site Footer Start */}
      <footer className="site-footer-two">
        <div className="site-footer-two__top d-none">
          <div className="container">
            <div className="site-footer-two__top-inner">
              <Link href="#" className="site-footer-two__top-content">
                Sinem Kaya Kimdir? <span></span>{" "}
                <i className="icon-arrow-up"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="site-footer-two__middle">
          <div className="container">
            <div className="site-footer-two__middle-inner">
              <div className="row">
                <div className="site-footer-two__logo">
                      <Link href="/">
                        <img
                          src="/assets/images/resources/logo-1.png"
                          alt=""
                        />
                      </Link>
                    </div>
                <div
                  className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget__column footer-widget-two__about">
                    <p className="footer-widget-two__about-text">
                      Merhabalar, ben Sinem KAYA. Karma Astrolog ve enerji çalışmaları uygulayıcısıyım.  Ankaralı sağlıkçı bir ailenin ilk çocuğuyum. Ne demişler bir ağacın kökleri ne kadar derinde ise dalları o kadar yükseğe çıkar ve yaprakları da o kadar görkemli olurmuş. Bu hayattaki tutkularıma bakınca ailemin meslek seçimlerinin çok da uzağında değil aslında. Anne hemşire, baba doktor olunca, benim de içimdeki şifacı rahatlıkla kendini buldu. Karmik açıdan bakarsanız zaten ailemi seçmemin bir sebebi de ortaya çıkıyor. 
                    </p>
                    <div className="site-footer-two__social">
                      <a href="https://x.com/linasinem" target="_blank">
                        <i className="icon-fi"></i>
                      </a>
                      <a href="https://instagram.com/linasinem" target="_blank">
                        <i className="icon-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__column footer-widget__events">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Son Etkinlikler</h3>
                    </div>
                    <ul className="footer-widget__events-list list-unstyled">
                      {events.map((event, index) => (
                        <li key={index}>
                          <p>{event.date}</p>
                          <h5>{event.title}</h5>
                          <Link href={event.link}>
                            Etkinliğe Katıl{" "}
                            <span className="icon-arrow-right"></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="footer-widget__column footer-widget__contact">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">İletişim</h3>
                    </div>
                    <div className="footer-widget__contact-inner">
                      <ul className="footer-widget__contact-list list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-envelop"></span>
                          </div>
                          <div className="text">
                            <p>
                              <a href={`mailto:${contactDetails.email}`}>
                                {contactDetails.email}
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>{contactDetails.address}</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-call"></span>
                          </div>
                          <div className="text">
                            <p>
                              <a href={`tel:${contactDetails.phone[0]}`}>
                                {contactDetails.phone.join(", ")}
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 wow fadeInUp d-none"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget__column footer-widget-two__newsletter">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Newsletter</h3>
                    </div>
                    <p className="footer-widget-two__newsletter-text">
                      It is a long established fact that a <br /> reader will be
                      distracted
                    </p>
                    <form
                      className="footer-widget-two__newsletter-form mc-form"
                      data-url="MC_FORM_URL"
                      noValidate="noValidate"
                    >
                      <div className="footer-widget-two__newsletter-form-input-box">
                        <input
                          type="email"
                          placeholder="Email address.."
                          name="EMAIL"
                        />
                        <button
                          type="submit"
                          className="footer-widget-two__newsletter-btn"
                        >
                          <span className="icon-paper-plan"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer-two__bottom">
          <div className="container">
            <div className="site-footer-two__bottom-inner">
              <p className="site-footer-two__bottom-text">
                © SinemKaya 2025 | Tüm Hakkı Saklıdır
              </p>
              <ul className="list-unstyled site-footer-two__bottom-menu">
                <li>
                  <Link href="/hakkimda">Hakkımda</Link>
                </li>
                <li>
                  <Link href="/contact">İletişim</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Site Footer End */}
    </>
  );
}
