"use client"; 
import Link from "next/link";
import React, { useState } from 'react';

const ScheduleOne = () => {
    const [activeTab, setActiveTab] = useState('2025-year');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="schedule-one"
        style={{marginTop: '100px'}}
        >
            <div className="container">
                <div className="schedule-one__inner">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Eğitim ve Seminer Geçmişi</span>
                        </div>
                        <h2 className="section-title__title">Eğitim ve Seminerlerimiz</h2>
                    </div>
                    <div className="schedule-one__main-tab-box tabs-box">
                        <ul className="tab-buttons clearfix list-unstyled">
                            <li disabled
                                className={`tab-btn ${activeTab === '2025-year' ? 'active-btn' : ''}`}
                                onClick={() => handleTabClick('2025-year')}
                            >
                                <h3>2025</h3>
                                <p></p>
                            </li>
                            <li
                                className={`tab-btn ${activeTab === '2024-year' ? 'active-btn' : ''}`}
                                onClick={() => handleTabClick('2024-year')}
                            >
                                <h3>2024</h3>
                                <p></p>
                            </li>
                            <li disabled
                                className={`tab-btn ${activeTab === 'routing2' ? 'active-btn' : ''}`}
                                onClick={() => handleTabClick('routing2')}
                            >
                                <h3>2023</h3>
                                <p></p>
                            </li>
                        </ul>
                        <div className="tabs-content">
                            <div className={`tab ${activeTab === '2024-year' ? 'active-tab' : ''}`} id="2024-year">
                                <div className="schedule-one__tab-content-box">
                                    <div className="schedule-one__single">
                                        <div className="schedule-one__left">
                                        <h3 className="schedule-one__title">
                                            <Link href="/#">
                                            Astroloji Eğitimi <br />
                                            
                                            </Link>
                                        </h3>
                                        <p className="schedule-one__text">
                                            Karma Tabanlı Temel Orta Seviye Astroloji Eğitimi
                                        </p>
                                        </div>
                                        <div className="schedule-one__img">
                                        <img src="/assets/uploads/nonphoto.png" alt="" />
                                        </div>
                                        <div className="schedule-one__address-and-btn-box">
                                        <ul className="list-unstyled schedule-one__address">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                9.00 <br /> 5 Mart 2024
                                                </p>
                                            </div>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                Online Eğitim <br /> ZOOM
                                                </p>
                                            </div>
                                            </li>
                                        </ul>
                                        <div className="schedule-one__btn-box">
                                            <Link href="#" className="schedule-one__btn thm-btn"
                                            style={{opacity: '.5', cursor: 'not-allowed'}}
                                            >
                                            Etkinliğe Katıl
                                            <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="schedule-one__single">
                                        <div className="schedule-one__left">
                                        <h3 className="schedule-one__title">
                                            <Link href="#">
                                            Astroloji Semineri <br />
                                            
                                            </Link>
                                        </h3>
                                        <p className="schedule-one__text">
                                            Doğal Taşların Şifa Gücü ve Doğum Haritasına Yansıması
                                        </p>
                                        </div>
                                        <div className="schedule-one__img">
                                        <img src="/assets/uploads/nonphoto.png" alt="" />
                                        </div>
                                        <div className="schedule-one__address-and-btn-box">
                                        <ul className="list-unstyled schedule-one__address">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                21.00 <br /> 13 Mart 2024
                                                </p>
                                            </div>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                Online Seminer <br /> ZOOM
                                                </p>
                                            </div>
                                            </li>
                                        </ul>
                                        <div className="schedule-one__btn-box">
                                            <Link href="#" className="schedule-one__btn thm-btn"
                                            style={{opacity: '.5', cursor: 'not-allowed'}}
                                            >
                                            Etkinliğe Katıl
                                            <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab ${activeTab === '2025-year' ? 'active-tab' : ''}`} id="2024-year">
                                <div className="schedule-one__tab-content-box">
                                    <div className="schedule-one__single">
                                        <div className="schedule-one__left">
                                        <h3 className="schedule-one__title">
                                            <Link href="/#">
                                            Astroloji Atolyesi <br />
                                            
                                            </Link>
                                        </h3>
                                        <p className="schedule-one__text">
                                            Kendi Kendine Astroloji Atolyesi
                                        </p>
                                        </div>
                                        <div className="schedule-one__img">
                                        <img src="/assets/uploads/nonphoto.png" alt="" />
                                        </div>
                                        <div className="schedule-one__address-and-btn-box">
                                        <ul className="list-unstyled schedule-one__address">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                21.00 <br /> 11 Eylül 2025
                                                </p>
                                            </div>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                Online Atolye <br /> ZOOM
                                                </p>
                                            </div>
                                            </li>
                                        </ul>
                                        <div className="schedule-one__btn-box">
                                            <Link href="https://www.instagram.com/reel/DMFf58LtbnN/?igsh=Z3d2cW5odzRjajJv" className="schedule-one__btn thm-btn"
                                            style={{opacity: '1', cursor: 'pointer'}}
                                            >
                                            Detay
                                            <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="schedule-one__single">
                                        <div className="schedule-one__left">
                                        <h3 className="schedule-one__title">
                                            <Link href="#">
                                            Astroloji Atolyesi <br />
                                            
                                            </Link>
                                        </h3>
                                        <p className="schedule-one__text">
                                            Sabit Yıldızlar Atolyesi
                                        </p>
                                        </div>
                                        <div className="schedule-one__img">
                                        <img src="/assets/uploads/nonphoto.png" alt="" />
                                        </div>
                                        <div className="schedule-one__address-and-btn-box">
                                        <ul className="list-unstyled schedule-one__address">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                21.00 <br /> 16 Eylül 2025
                                                </p>
                                            </div>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                Online Atolye <br /> ZOOM
                                                </p>
                                            </div>
                                            </li>
                                        </ul>
                                        <div className="schedule-one__btn-box">
                                            <Link href="https://www.instagram.com/p/DMGl2P9tHhO/?igsh=MXJ4MWF1bTh1ejdhNg==" className="schedule-one__btn thm-btn"
                                            style={{opacity: '1', cursor: 'pointer'}}
                                            >
                                            Detay
                                            <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab ${activeTab === '2nd-day' ? 'active-tab' : ''}`} id="2nd-day">
                                <div className="schedule-one__tab-content-box">
                                    <div className="schedule-one__single">
                                        <div className="schedule-one__left">
                                        <h3 className="schedule-one__title">
                                            <Link href="/#">
                                            Events That Leave a <br /> Impression
                                            </Link>
                                        </h3>
                                        <p className="schedule-one__text">
                                            A personal portfolio is a curated collection of <br /> an individual's professional work
                                        </p>
                                        </div>
                                        <div className="schedule-one__img">
                                        <img src="/assets/images/resources/schedule-one-1-4.jpg" alt="Event Image" />
                                        </div>
                                        <div className="schedule-one__address-and-btn-box">
                                        <ul className="list-unstyled schedule-one__address">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                10 Am To 10 Pm <br /> 20 April 2024
                                                </p>
                                            </div>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                Mirpur 01 Road N 12 Dhaka <br /> Bangladesh
                                                </p>
                                            </div>
                                            </li>
                                        </ul>
                                        <div className="schedule-one__btn-box">
                                            <Link href="/contact" className="schedule-one__btn thm-btn">
                                            Buy Ticket <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="schedule-one__single">
                                        <div className="schedule-one__left">
                                        <h3 className="schedule-one__title">
                                            <Link href="/#">
                                            Sparkle & Shine on <br /> Celebrations
                                            </Link>
                                        </h3>
                                        <p className="schedule-one__text">
                                            A personal portfolio is a curated collection of <br /> an individual's professional work
                                        </p>
                                        </div>
                                        <div className="schedule-one__img">
                                        <img src="/assets/images/resources/schedule-one-1-5.jpg" alt="Event Image" />
                                        </div>
                                        <div className="schedule-one__address-and-btn-box">
                                        <ul className="list-unstyled schedule-one__address">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                10 Am To 10 Pm <br /> 20 April 2024
                                                </p>
                                            </div>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                Mirpur 01 Road N 12 Dhaka <br /> Bangladesh
                                                </p>
                                            </div>
                                            </li>
                                        </ul>
                                        <div className="schedule-one__btn-box">
                                            <Link href="/contact" className="schedule-one__btn thm-btn">
                                            Buy Ticket <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="schedule-one__single">
                                        <div className="schedule-one__left">
                                        <h3 className="schedule-one__title">
                                            <Link href="/#">
                                            Sparkle & Shine <br /> Events
                                            </Link>
                                        </h3>
                                        <p className="schedule-one__text">
                                            A personal portfolio is a curated collection of <br /> an individual's professional work
                                        </p>
                                        </div>
                                        <div className="schedule-one__img">
                                        <img src="/assets/images/resources/schedule-one-1-6.jpg" alt="Event Image" />
                                        </div>
                                        <div className="schedule-one__address-and-btn-box">
                                        <ul className="list-unstyled schedule-one__address">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                10 Am To 10 Pm <br /> 20 April 2024
                                                </p>
                                            </div>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                Mirpur 01 Road N 12 Dhaka <br /> Bangladesh
                                                </p>
                                            </div>
                                            </li>
                                        </ul>
                                        <div className="schedule-one__btn-box">
                                            <Link href="/contact" className="schedule-one__btn thm-btn">
                                            Buy Ticket <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab ${activeTab === '3rd-day' ? 'active-tab' : ''}`} id="3rd-day">
                                <div className="schedule-one__tab-content-box">
                                    <div className="schedule-one__single">
                                        <div className="schedule-one__left">
                                        <h3 className="schedule-one__title">
                                            <Link href="/#">
                                            Events That Leave a <br /> Impression
                                            </Link>
                                        </h3>
                                        <p className="schedule-one__text">
                                            A personal portfolio is a curated collection of <br /> an individual's professional work
                                        </p>
                                        </div>
                                        <div className="schedule-one__img">
                                        <img src="/assets/images/resources/schedule-one-1-7.jpg" alt="" />
                                        </div>
                                        <div className="schedule-one__address-and-btn-box">
                                        <ul className="list-unstyled schedule-one__address">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>10 Am To 10 Pm <br /> 20 April 2024</p>
                                            </div>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="text">
                                                <p>Mirpur 01 Road N 12 Dhaka <br /> Bangladesh</p>
                                            </div>
                                            </li>
                                        </ul>
                                        <div className="schedule-one__btn-box">
                                            <Link href="/contact" className="schedule-one__btn thm-btn">
                                                Buy Ticket <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="schedule-one__single">
                                        <div className="schedule-one__left">
                                        <h3 className="schedule-one__title">
                                            <Link href="/#">
                                            Sparkle & Shine on <br /> Celebrations
                                            </Link>
                                        </h3>
                                        <p className="schedule-one__text">
                                            A personal portfolio is a curated collection of <br /> an individual's professional work
                                        </p>
                                        </div>
                                        <div className="schedule-one__img">
                                        <img src="/assets/images/resources/schedule-one-1-8.jpg" alt="" />
                                        </div>
                                        <div className="schedule-one__address-and-btn-box">
                                        <ul className="list-unstyled schedule-one__address">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>10 Am To 10 Pm <br /> 20 April 2024</p>
                                            </div>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="text">
                                                <p>Mirpur 01 Road N 12 Dhaka <br /> Bangladesh</p>
                                            </div>
                                            </li>
                                        </ul>
                                        <div className="schedule-one__btn-box">
                                            <Link href="/contact" className="schedule-one__btn thm-btn">
                                                Buy Ticket <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="schedule-one__single">
                                        <div className="schedule-one__left">
                                        <h3 className="schedule-one__title">
                                            <Link href="/#">
                                            Sparkle & Shine <br /> Events
                                            </Link>
                                        </h3>
                                        <p className="schedule-one__text">
                                            A personal portfolio is a curated collection of <br /> an individual's professional work
                                        </p>
                                        </div>
                                        <div className="schedule-one__img">
                                        <img src="/assets/images/resources/schedule-one-1-9.jpg" alt="" />
                                        </div>
                                        <div className="schedule-one__address-and-btn-box">
                                        <ul className="list-unstyled schedule-one__address">
                                            <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>10 Am To 10 Pm <br /> 20 April 2024</p>
                                            </div>
                                            </li>
                                            <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="text">
                                                <p>Mirpur 01 Road N 12 Dhaka <br /> Bangladesh</p>
                                            </div>
                                            </li>
                                        </ul>
                                        <div className="schedule-one__btn-box">
                                            <Link href="/contact" className="schedule-one__btn thm-btn">
                                                Buy Ticket <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab ${activeTab === 'routing' ? 'active-tab' : ''}`} id="routing">
                                <div className="schedule-one__tab-content-box">
                                    <div 
                                    className="schedule-one__single"
                                    style={{display: "flex", width: "100%", textAlign: "center", alignItems: "center", justifyContent: "center",}}
                                    >
                                        <p style={{display: "flex", justifyContent: "center",}}> 
                                            Instagram sayfamızdan ve Whatsapp ile Gelecek Etkinliklerimiz hakkında bilgi alabilirsiniz.
                                        </p>
                                    </div>
                                    <div 
                                    className="schedule-one__single"
                                    style={{display: "flex", width: "100%", textAlign: "center", alignItems: "center", justifyContent: "center",}}
                                    >
                                        <p>Güncelleniyor...</p>

                                    </div>
                                </div>
                            </div>
                            <div className={`tab ${activeTab === 'routing2' ? 'active-tab' : ''}`} id="routing2">
                                <div className="schedule-one__tab-content-box">
                                    <div 
                                    className="schedule-one__single"
                                    style={{display: "flex", width: "100%", textAlign: "center", alignItems: "center", justifyContent: "center",}}
                                    >
                                        <p style={{display: "flex", justifyContent: "center",}}> 
                                            Geçmiş Etkinliklerimizi Instagram sayfamızdan takip edebilirsiniz.
                                        </p>
                                    </div>
                                    <div 
                                    className="schedule-one__single"
                                    style={{display: "flex", width: "100%", textAlign: "center", alignItems: "center", justifyContent: "center",}}
                                    >
                                        <p>Güncelleniyor...</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScheduleOne;
