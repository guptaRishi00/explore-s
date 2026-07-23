import React, { useRef, useLayoutEffect } from 'react';
import { fadeUp } from '../../utils/animations';
import ContactForm from './ContactForm';
import ContactDetailsSection from './ContactDetailsSection';
import GoogleMapSection from './GoogleMapSection';

const ContactMain = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '[data-contact-rise]', { stagger: 0.12 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <div ref={rootRef}>
      {/* ── Hero Band ── */}
      <section className="es-section es-contact-hero" aria-label="Contact Explore S hero">
        <div className="es-contact-hero__blob" aria-hidden="true"></div>
        <div className="container">
          <div className="es-contact-hero__inner">
            <span className="es-eyebrow" data-contact-rise>Reach Out</span>
            <h1 className="es-contact-hero__h1" data-contact-rise>
              Get in <span className="es-contact-hero__accent">Touch</span>
            </h1>
            <p className="es-contact-hero__lead" data-contact-rise>
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="es-contact-hero__chips" data-contact-rise>
              <span className="es-contact-hero__chip">
                <span className="es-contact-hero__chip-dot" aria-hidden="true"></span>
                Quick Response
              </span>
              <span className="es-contact-hero__chip">
                <span className="es-contact-hero__chip-dot" aria-hidden="true"></span>
                Free Consultation
              </span>
              <span className="es-contact-hero__chip">
                <span className="es-contact-hero__chip-dot" aria-hidden="true"></span>
                100% Confidential
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Info + Map ── */}
      <section className="es-section es-contact" aria-label="Contact form and details">
        <div className="container">
          {/* ── Split card: gradient info panel (left) + form (right) ── */}
          <div className="es-contact__card" data-contact-rise>
            <ContactDetailsSection />
            <div className="es-contact__form-panel">
              <ContactForm />
            </div>
          </div>

          {/* ── Full-width map ── */}
          <div className="es-contact__map" data-contact-rise>
            <GoogleMapSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMain;
