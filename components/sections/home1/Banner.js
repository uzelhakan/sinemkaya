"use client"; // Ensure this directive is present

import { useEffect, useState } from 'react';

const messages = [
    "”  İnsanın kendini fethetmesi, zaferlerin en büyüğüdür. — Eflatun „",
    "”  Her insanda ruhum bir gözü vardır. On bin bedenden daha değerlidir. Çünkü gerçek yalnızca onun tarafından görülebilir. — Platon „",
    "”  Anlaşılmamış olan tekrarlanır. — Jiddu Krishnamurti „",
    "”  Yolculuğa çıkmayı severim, ama varmaktan nefret ederim. — Albert Einstein „",
    "”  İnsanoğlu ağzından çıkan cümlelerin, beyninde çıkan düşüncelerin bütün evreni dolaşıp tekrar ona geri döndüğünü bilse eminim çok daha dikkatli olurdu. — Albert Einstein „",
    "”  Bir insan, aydınlığı hayal ederek değil, karanlığın bilincine vararak aydınlanır. — Carl Gustav Jung „",
    "”  Mutluluk kelimesi, hüzün ile dengelenmeseydi anlamını yitirirdi. — Carl Gustav Jung „",
    "”  Astroloji her yıldız ışığının insanın beynine bağlanan bir tel olduğuna inanmaktan ibarettir. — Notre Dame'ın Kamburu / Victor Hugo „",
    "”  İnsan kendisini aşarak kendisi olur. — Carl Gustav Jung „",
    "”  Bilinçdışı, bizi bizden daha iyi bilir. — Carl Gustav Jung „"
];

// Data for the banner
const bannerData = {
    title: ' ',
    date: ' ',
    address: ' ',
    countdownDate: '2025/05/11', // Format: YYYY/MM/DD
    buttonLink: '/contact', // Update this link as necessary
};

export default function BannerOne() {
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [index, setIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % messages.length);
    }, 60000); // 60 saniye = 1 dakika

    return () => clearInterval(interval);
  }, []);

    useEffect(() => {
        const updateCountdown = () => {
            const targetDate = new Date(bannerData.countdownDate).getTime();
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeRemaining({ days, hours, minutes, seconds });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="banner-one">
            <div className="banner-one__bg jarallax" data-jarallax data-speed="0.2" data-imgposition="50% 0%"
                style={{ backgroundImage: 'url(assets/images/backgrounds/homepage-banner.jpg)' }}>
            </div>
            <div className="container banner-height">
                <div className="banner-one__inner">
                    <div className="banner-one__countdown-timer-box wow fadeInUp d-none" data-wow-delay="100ms">
                        <div className="countdown time-countdown-two" data-countdown-time={bannerData.countdownDate}>
                            <div>
                                <div className="box">
                                    <span className="days">{timeRemaining.days}</span>
                                    <span className="timeRef">Days</span>
                                </div>
                            </div>
                            <div>
                                <div className="box">
                                    <span className="hours">{timeRemaining.hours}</span>
                                    <span className="timeRef clr-1">Hours</span>
                                </div>
                            </div>
                            <div>
                                <div className="box">
                                    <span className="minutes">{timeRemaining.minutes}</span>
                                    <span className="timeRef clr-2">Minutes</span>
                                </div>
                            </div>
                            <div>
                                <div className="box">
                                    <span className="seconds">{timeRemaining.seconds}</span>
                                    <span className="timeRef clr-3">Seconds</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="banner-one__title wow fadeInLeft" data-wow-delay="200ms">{bannerData.title}</h2>
                    <p className="banner-one__date wow fadeInRight" data-wow-delay="300ms">{bannerData.date}</p>
                    <p className="banner-one__address wow fadeInLeft" data-wow-delay="400ms">{bannerData.address}</p>
                        <div className="styles-card">
                            <p className="styles-text" data-wow-delay="400ms">{messages[index]}</p>
                        </div>
                        <a hidden href={bannerData.buttonLink} className="banner-one__btn thm-btn">Register Now <span className="icon-arrow-right"></span></a>

                </div>
            </div>
        </section>
    );
}
