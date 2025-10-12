"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import Layout from "@/components/layout/Layout";
import HakkimdaSlider from "@/components/slider/HakkimdaSlider";
import EventSk from "@/components/common/EventSk";
// Example usage of the component with dynamic content
const points = [
  {
    icon: "icon-air-horn",
    heading: "Artists & bands",
    description:
      "TEST Events bring people together for a shared experience celebration. From weddings and birthdays to conferences.",
  },
  {
    icon: "icon-party-blower",
    heading: "Audience Event Planner",
    description:
      "Events bring people together for a shared experience celebration. From weddings and birthdays to conferences.",
  },
];

export default function Home() {
  return (
    <>
      <Layout headerStyle={0} footerStyle={2}>
        <div>
          <EventSk
            tagline="About My Story"
            buttonText="Join The Event"
            points={points}
            imageUrl="/assets/images/resources/sinem-profile.jpg"
              title={
                <>
                  <p>Merhaba Yolcu,<br />Merhaba Düşleyen…</p>
                <br />
                  <p>En başından beri yolda ışığı düşleyenlerle, ne mutlu ki yollarımız kesişiyor. Bu sayfada nelerle karşılaşabileceğine değinmeden biraz kendimden bahsetmeme izin ver. En zoruyla başlamakta fayda var. Kendinden bahsetmeye insan nereden başlayacağını bilemiyor. Hangi ben diye soruyorum öncelikle. Yolun başındaki mi, hayalleri için yolda olan ve her an yeniden doğan ben mi? İsmim Sinem KAYA, kendi şarkısına müptela bülbüller gibi ben de ismimi hep çok sevdim. Bu sayfalarda okuyacakların, belki de birlikte bir yola çıkacağız ve orada an be an paylaşacaklarımız bil ki işte tam de buradan; sinemden.</p>
                <br />
                  <p>İlk çocukluk anılarımda bile dışarıda oyun oynamaktan ziyade okuyan ve yazan bir çocuk oluşum var. O yaşın gizemi, heyecanı dışarıda idi yaşıtlarıma göre. Bense heyecanı hep içimde aradım, gizemi içimde buldum. Gördüklerim yetmedi, görünenin ötesi ilgimi cezbetti. Özellikle lise çağlarımdan başlayan psikoloji, kişisel ve ruhsal gelişim üzerine hevesle yaptığım okumaların yanına insanları okumak, hayatı okumak ve yıldızları okumak geldi.</p>
                <br />
                  <p>Lisans eğitimimde Bilkent Üniversitesi Uluslararası İlişkiler bölümünü bitirdim. Ardından sebeplerini çok sonra anlayacağım üzere Kara Harp Okulunda Güvenlik Yönetimi yüksek lisansı yaptım. Terör psikolojisi ve ölüm farkındalığı üzerine tez yazdım. Anlayacağınız çok erken dönemlerde başladı ölüm ve yaşam konularını sorgulamam. Tam da burada bir seçim yaptım; ışığı mı karanlığı mı araştıracaktım. Elbette ki gölgelerimle yüzleşip ışığı büyütmekti dileğim. Bu sayfanın da temel amaçlarından biri olan birlikte ışıldamak için yola koyulmuştu niyetlerim.</p>
                <br />
                  <p>2008 yılında yoga hayatıma girdi. Ardından 2012’de şifa ve enerji çalışmaları. Her biri yanında başka bir güzelliği getiriyordu; zamanı gelince de benim kulağıma fısıldıyordu sanki kuşlar. Yol tek yürünse de hiçbir zaman yalnız olmadığımızı anımsatan, herkesin bir yoldaşı olurmuş yolda. Benim de kendimi çok şanslı hissettiğim alanlardan biri hocalarım. Usta – çekirge ilişkisi içerisinde, diz dize bir matta aylar yıllar geçirerek Canım Hocam’dan DNA Aktivasyonu, Eterik Akupunktur, Reiki 1,2 ve 3 inisiyasyonları öğrenerek şifa ile faal olarak ilgilenmeye başladım. Tabi şimdi bakınca anlıyorum ki O benimle ilgilenmiş. “Önce şifacının şifası” dedi hocam ve yıllar içinde an de an değişen enerjim beni birbirinden kıymetli hocalara ve alanlara yöneltti. Burada detayına girmeyim. Merak edenleriniz eğitimler sekmesinde görebilir.</p>
                <br />
                  <p>Yolun ana dönemeçleri misali şifa ve enerji eğitimlerimin üzerine Karma Astroloji eğitimleri geldi. İçimdeki katkı olma, hizmet etme ve birlikte ışıldama niyetime öyle güzel bir açılım yaptı ki yıldızlar… Artık bakışlarımı, algımı içerden gökyüzüne çevirmenin zamanı gelmişti. O zamana kadar attığım adımların, seçtiğim yolların ve karşıma çıkan kişilerin, hayal kırıklıklarımın, hediye ve mucizelerimin hepsinin adını koymamda astroloji öyle bir kapı araladı ki... Elbette ki bu bitmek tükenmek bilmeyen bir öğrenme yolculuğu idi. Öğrendikçe bilgiyi paylaşmak istedim, paylaştıkça göklerin bana daha fazlası için izin verdiğini gözlemledim ve yolum bu sefer de Kuantum Drama ile Bilinçaltı Okuma eğitimi ile kesişti. Yine şükranların en büyüğü içimde idi, havai fişekler hiç susmuyordu.</p>
                <br />
                  <p>Tüm bu teknikler yıldızların rehberliğinde hem beni hayallerime ulaştırıyordu hem de sayısız insana şifa ve katkı oluyordu. Aynı sığırcık kuşunun sembolize ettiği gibi birlikte uçmanın neşesi artık çok az şeyde vardı benim için. Yazarak, yıldızlara bakarak ve kuantum alanın derinliklerinde kendini açanlara, katkı olmayı, ışığı büyütmeyi seçmişti ruhum. Bense sadece ona eşlik ediyorum.</p>
                <br />
                  <p>Astroloji ve enerjilere dair aylık yazılarımı The Spirit isimli online dergide, <a href="https://thespirit.com.tr"><i>thespirit.com.tr </i></a>  adresinde yazıyorum.</p>
                </>
              }
            />

          
          <section className="buy-ticket">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-8">
                  <div
                    className="buy-ticket__left wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    <ul className="buy-ticket__address list-unstyled">
                      <li>
                        <span className="icon-penc">✎</span>
                        <div className="text">
                          <p>Sinem Kaya</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-clock"></span>
                        </div>
                        <div className="text">
                          <p>27.08.2013</p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="buy-ticket__title">
                      Sıcak Koza
                    </h3>
                    <div className="buy-ticket__text">
                      <p>Bazen sadece okumak bir damladır okyanusta…</p>
                      <p>Bazen de okyanusun kendisidir o biricik damla…</p>
                      <p>Hiçken!</p>
                      <p>Lütfen öncelikle o en rahat pozisyonu alın. İster bağdaş kurun, ister sırt üstü uzanın.</p>
                      <p>Yüzünüzde ılık bir rüzgâr… Rüzgâr esmiyor sadece sizi usulca öpmeye gelmiş… Sıcacık.</p>
                      <p>Derin derin nefesler alın…</p>
                      <p>O nefesi diyaframınıza alın ve karnınızı şişirin.</p>
                      <p>Öyle bir nefes alın ki, o nefes çok uzaklardan gelsin. Taptaze,</p>
                      <p>Evrenin enerjisiyle ve bütünlüğüyle gelsin.</p>
                      <p>Yaşamın ta kendisini soluyun.</p>
                    </div>
                    <div className="buy-ticket__btn-box">
                      <a target="blank" href="https://www.kitapyurdu.com/kitap/sicak-koza/315211.html" className="buy-ticket__btn-1 thm-btn">
                        Satın Al
                        <span className="icon-arrow-right"></span>
                      </a>
                      <a href="/contact" className="buy-ticket__btn-2 thm-btn">
                        İletişime Geç<span className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-4">
                  <div
                    className="buy-ticket__right wow fadeInRight"
                    data-wow-delay="300ms"
                  >
                    <div className="sicak-koza__img">
                      <img
                        src="/assets/images/brand/sicak-koza.jpg"
                        alt=""
                      
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*Brand One Start*/}
          <section className="brand-one">
            <div className="container">
              <HakkimdaSlider />
            </div>
          </section>
          {/*Brand One End*/}

          <section className="event-direction event-direction-two" style={{ zIndex: 0, top: '0px'}}>
            <div className="container" style={{ zIndex: 0, marginTop: '100px'}}>
              <div className="event-direction__inner" style={{ zIndex: 0, marginTop: '0px'}}>
                <div className="row">
                  <div
                    className="col-xl-7 wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    <div className="event-direction__left">
                      <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                          <span className="section-title__tagline">
                            2025 itibari ile
                          </span>
                        </div>
                        <h2 className="section-title__title">
                          Eğitimlerimiz, Seminerlerimiz<br /> ve Seanslarımız <br />
                        </h2>
                      </div>
                      <p className="event-direction__text">
                        1000+ saat ve 500+ danışana ulaşmıştır.
                      </p>
                      <div className="event-direction__call">
                        <div className="event-direction__call-icon">
                          <img
                            src="/assets/images/icon/event-direction-chat-icon.png"
                            alt=""
                          />
                        </div>
                        <div className="event-direction__call-content">
                          <p>WhatsApp İletişim</p>
                          <h4>
                            <a href="tel:+905332135538">(+90) 533-213-5538</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-5 wow fadeInRight"
                    data-wow-delay="300ms"
                  >
                    <div className="event-direction__right">
                      <ul className="event-direction__counter list-unstyled">
                        <li>
                          <div className="event-direction__counter-single">
                            <div className="event-direction__counter-box">
                              <h3 className="odometer">
                                <CountUp start={0} end={1000} duration={2} />
                              </h3>
                              <span className="event-direction__counter-plus">
                                +
                              </span>
                            </div>
                            <p className="event-direction__counter-text">
                              Saat
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="event-direction__counter-single">
                            <div className="event-direction__counter-box">
                              <h3 className="odometer">
                                <CountUp start={0} end={500} duration={2} />
                              </h3>
                              <span className="event-direction__counter-plus">
                                +
                              </span>
                            </div>
                            <p className="event-direction__counter-text">
                              Danışan
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="event-direction__counter-single">
                            <div className="event-direction__counter-box">
                              <h3 className="odometer">
                                <CountUp start={0} end={10} duration={2} />
                              </h3>
                              <span className="event-direction__counter-plus">
                                +
                              </span>
                            </div>
                            <p className="event-direction__counter-text">
                              Sertifikalı Eğitim
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="event-direction__counter-single">
                            <div className="event-direction__counter-box">
                              <h3 className="odometer">
                                <CountUp start={0} end={20} duration={2} />
                              </h3>
                              <span className="event-direction__counter-plus">
                                +
                              </span>
                            </div>
                            <p className="event-direction__counter-text">
                              Astroloji Atolyesi
                            </p>
                          </div>
                        </li>
                      </ul>
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
