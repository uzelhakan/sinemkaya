'use client'
import { useState } from 'react';
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const images = [
    "assets/images/brand/c1.jpg",
    "assets/images/brand/c2.jpg",
    "assets/images/brand/c3.jpg",
    "assets/images/brand/c4.jpg",
    "assets/images/brand/c5.jpg",
    "assets/images/brand/c6.jpg",
    "assets/images/brand/c7.jpg",
    "assets/images/brand/c8.jpg",
    "assets/images/brand/c9.jpg",
    "assets/images/brand/c10.jpg",
    "assets/images/brand/c11.jpg",
    "assets/images/brand/c12.jpg",
    "assets/images/brand/c13.jpg",
    "assets/images/brand/c14.jpg",
    "assets/images/brand/c15.jpg",
    "assets/images/brand/c16.jpg",
    "assets/images/brand/c17.jpg",
    "assets/images/brand/c18.jpg",
];


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 100,
    slidesPerView: 5,
    loop: true,
    navigation: {
        nextEl: "#brand-one__swiper-button-next",
        prevEl: "#brand-one__swiper-button-prev"
    },
    autoplay: { delay: 5000 },

   breakpoints: {
            0: {
                  spaceBetween: 30,
                  slidesPerView: 1
              },
              375: {
                  spaceBetween: 30,
                  slidesPerView: 1
              },
              575: {
                  spaceBetween: 30,
                  slidesPerView: 2
              },
              767: {
                  spaceBetween: 50,
                  slidesPerView: 3
              },
              991: {
                  spaceBetween: 50,
                  slidesPerView: 4
              },
              1099: {
                  spaceBetween: 70,
                  slidesPerView: 5
              },
              1199: {
                  spaceBetween: 60,
                  slidesPerView: 6
              }
          
    }
}

export default function HakkimdaSlider() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>

        <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
        {images.map((img, index) => (
                <SwiperSlide key={index} className="swiper-slide certificate-slider">
                    <img
                    src={img}
                    alt=""
                    onClick={() => setSelectedImage(img)}
                    style={{ cursor: 'pointer' }}
                    />
                </SwiperSlide>
                ))}
            </Swiper>

            {/* Modal */}
            {selectedImage && (
                <div
                className="modal-backdrop"
                onClick={() => setSelectedImage(null)}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999
                }}
                >
                <img
                    src={selectedImage}
                    alt=""
                    style={{ maxHeight: '70%', maxWidth: '70%' }}
                />
                </div>
            )}
        </>
    )
}
