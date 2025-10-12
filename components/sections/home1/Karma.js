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
      <section id="karma" className="buy-ticket">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="buy-ticket__left wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <h3 className="buy-ticket__title">
                  Karma Astroloji
                </h3>
                <div className="buy-ticket__text">
                  <p> Karma Astroloji; Klasik ve Modern Astroloji ekollerinin ötesinde, o teknikleri de bünyesinde barındıran Ay tabanlı bir astroloji ekolüdür. Adından da anlaşılacağı üzere bir Doğu felsefesi olan karma temellidir. Karma geçmiş yaşamları ve atalardan aktarımı gözetir, neden – sonuç bağlamında işler. Başka bir ifadeyle alınan her nefesin, yapılan her icraatın bir karşılığı, geri dönüşü olduğunu savunur. Bu nedensellik bağını tek boyutlu değil, geniş spektrumda düşünmek gerekir. Ruhun olgunlaşması da denen tekâmül yolunda kişinin kendini, ruhunun derinliğini ve hayatını anlamlandırması için derin bir felsefe sunar. Bu hayatta yaşanılan her şeyin yine bu hayat düzleminde anlaşılamamasının sebepleri vardır ve çoğunlukla yanıtlar karmada gizlidir.</p>
                  <hr />
                  <p> Karma Astrolojinin elbette ki en temel aracı doğum haritalarıdır. Yeryüzündeki her canlıya, her olaya, girişime, ilişkiye ait bir doğum haritası mevcuttur. Bu harita, olayın ya da kişinin doğum anında o coğrafyada çekilen gökyüzünün fotoğrafıdır. Her doğum haritasında her gezegen, her asteroid ve her burç şüphesiz ki vardır. Fakat bizi özel ve eşsiz kılan bu göstergelerin yerleşimi, bulunduğu ev ve birbirine yaptığı açılardır. O özel anda doğmanın kişiye özel bir anlamı vardır. Bazı yaşamlar bu özel anlamı keşfetmekle geçer.</p>
                  <hr />
                  <p> Doğum haritalarında kişinin ruhsal, psikolojik yapısı, kişinin hayattaki bereketi, aile ilişkileri, evlilik, duygusal ilişkiler, potansiyel hastalıklar ve kariyeri gibi ana konular incelenirken bunlara ek olarak tekâmül eden ruhun hangi rotada ilerlemesi gerektiği de görülür. Danışanın özgür iradesine saygı duyularak süreçler aktarılır ve şüphesiz olasılıklar içinden seçim yine danışanın kendisine bırakılır. Yıllık analizlerin yanı sıra, herkesin hayatında en azından bir kez karma astroloji açısından doğum haritasını dinlemesi tavsiye edilir.</p>
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
