import Link from 'next/link';
import { useState } from 'react';

const EventOne = ({ tagline, title, imageUrl }) => {
  return (
    <section className="event-one event-three">
      <div className="container">
        <div className="event-one__inner wow fadeInUp" data-wow-delay="300ms">
          <div className="event-one__top">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">{tagline}</span>
              </div>
              <div className="event-sk__btn-box">
              <div href="/event-details" className="event-sk__btn thm-btn profile-50">
                <div className="event-sk__img-box">
                  <img src={imageUrl} alt="Event Image" />
                </div>
              </div>
            </div>
              <span className="section-desc__description">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOne;