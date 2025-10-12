"use client"; // Ensures the component runs on the client side

import { useState } from "react";
import Link from "next/link";

export default function BuyTicket() {
  // State for dynamic content
  const [ticketContent, setTicketContent] = useState({
    address: "Mirpur 01 Road N 12 Dhaka Bangladesh",
    timing: "10 Am To 10 Pm 20 April 2024",
    title: "Grab Your Seat Now Or You May Regret it Once",
    description:
      "Events bring people together for a shared experience celebration. From weddings and birthdays to conferences, events bring people together for a shared purpose.",
    buttons: [
      { id: 1, text: "Buy Your Ticket", link: "/contact", class: "buy-ticket__btn-1" },
      { id: 2, text: "Contact Us", link: "/contact", class: "buy-ticket__btn-2" },
    ],
    ticketImage: "/assets/images/resources/buy-ticket-img.jpg",
  });

  return (
    <>
      {/* Buy Ticket Start */}
      <section id="sifa" className="buy-ticket">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="buy-ticket__left wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <h3 className="buy-ticket__title">
                  Şifa Çalışmaları
                </h3>
                <div className="buy-ticket__text">
                    <p className="wow fadeInLeft"
                      data-wow-delay="100ms"
                    >
                    <b>◎ Kuantum Drama ile Bilinçaltı Okuma:</b> Kişinin bilinçaltına girilerek bugün yaşadığı sorunun en derin ve negatif kaynak sebepleri bulunur. Üzerinden çalışılacak konular çok geniş bir yelpazeden seçilebilir. Yalnızlık, değersizlik, güçsüzlük duyguları, kilo sorunu, kanser gibi hücresel bozulmalar ve anne/baba/ eş/ eski sevgili karmalarından özgürleşme gibi sayısız konuda çalışmak mümkün olup birçok enerji çalışması gibi uzaktan uygulanabilmektedir. Derinliğine rağmen hızlı ve yumuşak bir çalışmadır.</p>
                    <hr />
                    <p className="wow fadeInLeft"
                      data-wow-delay="200ms"
                    >
                    <b>◎ DNA Aktivasyonu:</b> Enerji bedenlerimiz olarak da isimlendirilen auralarımızdaki bozulmalar fark edilmez ise fiziksel bedene hastalık olarak yansıyabilir. Bu çalışmada enerji bedenindeki DNA’lar şifalanır ve fiziksel bedende de yansıması olarak iyileşme görülür. Başlıca kullanım alanları şu şekildedir:</p>
                    <hr />
                    
                    <ul className="wow fadeInLeft"
                      data-wow-delay="300ms"
                    >
                      <li>Fiziksel hastalıklar</li>
                      <li>Korkular için şifa (suçlanma, yalnızlık, güçsüzlük, değersizlik korkuları)</li>
                      <li>Yaşam dersleri şifası (kabullenme, onaylanma, sevgi, güven, uyum vb.)</li>
                      <li>Amigdala Travma Temizliği</li>
                      <li>Beyni dengeli kullanmak ve genel başarı için sağ- sol beyin lobları dengesi</li>
                      <li>Unuttuğumuz özümüze dönüş ve kaybettiğimiz uyumu yakalamak, daha farkında bir hayat sürmek için Öz’le bağlantı</li>
                      <li>Değerli taşlar ve bitkilerin kendileri olmadan enerjilerinin bedene yüklenmesi</li>
                    </ul>
                    <hr />
                    <p className="wow fadeInLeft"
                      data-wow-delay="400ms"
                    >
                    <b>◎ Eterik Akupunktur:</b> Akciğer, Kalınbağırsak, Dalak, Kalp, Mide, İnce Bağırsak, Böbrek, Mesane, Dolaşım-Cinsiyet, Karaciğer, üçlü ısıtıcı, Safra Kesesi Meridyenleri ile çalışıp enerjisi düşen meridyenin frekansını yükseltmek amaçlı, uzaktan yapılan bir uygulamadır.</p>
                    <hr />
                    <p className="wow fadeInLeft"
                      data-wow-delay="500ms"
                    >
                    <b>◎ Access The Bars:</b> Yaşamımızda anlam yüklediğimiz, önem verdiğimiz duygularımız, düşüncelerimiz, hislerimiz, inançlarımız, kararlarımız beynimizde depolanarak, bir elektrik yükü oluştururlar. Bu elektrik yükü başımızda yer alan 32 adet Bars adı verilen enerji noktalarında birikir. Bars çalışması ile amaçlanan, o noktalar çalıştırılarak, orada oluşmuş manyetik alanı serbest bırakmaktır. Bars seansında bu noktalara parmak uçları ile yumuşakça dokunularak, bu noktalar aktif hale getirilir. Bu noktalardaki enerji birikiminin serbest bırakılması ile vücudunuzdaki blokajların çözülmesi sağlanır. Düzenli uygulandığı takdirde faydaları:</p>
                    <hr />
                    <ul className="wow fadeInLeft"
                      data-wow-delay="600ms"
                    >
                      <li>Vücudun hızlı bir biçimde detoksu</li>
                      <li>Organların hücresel fonksiyonlarının iyileşmesi</li>
                      <li>Bağışıklık sisteminin üzerindeki yükün azalması ve sistemin fonksiyonunun iyileşmesi</li>
                      <li>Tüm vücut dolaşımında hızlanma</li>
                      <li>Psikosomatik travma kalıplarının ortadan kalkması</li>
                      <li>Tıkanıklık, iltihap, toksinde azalma</li>
                      <li>Zihinsel netliğin, problem çözme becerisinin ve motivasyonun artışı</li>
                      <li>Depresif ve kaygı eğilimlerini yönetme kabiliyetinin artışı</li>
                      <li>Belirgin bir şekilde neşe, mutluluk ve enerji artışı</li>
                      <li>Cerrahi müdahaleden sonra daha çabuk iyileşme sürecinin sağlanması ve acının azalması</li>
                      <li>Davranışsal kalıpların, bağımlılıkların ve fizyolojik düzensizliklerin ortadan kalkması</li>
                      <li>İçsel ve kişilerarası çatışmaların azalması</li>
                      <li>Rahatsızlıklara bağlı olarak ortaya çıkan stres ve travmaların azalması</li>
                      <li>Daha huzurlu bir hale sahip olmak</li>
                      <li>Daha derin bir rahatlama ve kesintisiz uyku sağlaması</li>
                    </ul>
                    <hr />
                    <p className="wow fadeInLeft"
                      data-wow-delay="700ms"
                    >
                    <b>◎ Reiki:</b> Daha zinde ve sağlıklı bir yaşam için frekansı düşen organa aktarılan enerji ile genel akışın kolaylaştırılması, hastalıkların oluşum ve gelişiminin yavaşlatılıp şifalanması üzerinedir. Yakından ve uzaktan uygulaması mevcut olup alan temizliği, bilinçaltı için olumlama yüklenmesi gibi alt başlıkları mevcuttur.</p>

                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Buy Ticket End */}
    </>
  );
}
