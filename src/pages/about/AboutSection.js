import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../utils/animations';

const AboutPart = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    // Guard: ScrollTrigger needs window.matchMedia — skip in tests / SSR
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '[data-about-rise]', { stagger: 0.1 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section className="es-section es-about-intro" ref={rootRef} aria-label="About Explore S">
      <div className="container">
        <div className="es-about__grid">
          {/* ── Video column ── */}
          <div className="es-about__media" data-about-rise>
            <div className="es-about__frame">
              <video
                src="/3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="es-about__img"
                aria-label="Explore S Research Solutions overview"
              />
            </div>
          </div>

          {/* ── Copy column ── */}
          <div className="es-about-intro__copy">
            <span className="es-eyebrow" data-about-rise>About us</span>
            <h1 className="es-about-intro__h1" data-about-rise>
              Welcome to <em>Explore S Research Solutions</em>
            </h1>
            <p className="es-about__body" data-about-rise>
              Discover the difference with personalized, expert research assistance at Explore S Research Solutions.
            </p>
            <p className="es-about__body" data-about-rise>
              Welcome to Explore S Research Solutions, your trusted partner in academic excellence. We are dedicated to providing top-tier research writing assistance to help you achieve your academic goals. Our team of seasoned experts brings years of experience across a broad spectrum of disciplines, ensuring that you receive personalized, high-quality support tailored to your unique needs.
            </p>
            <div className="es-about-intro__ctas" data-about-rise>
              <Link to="/contact" className="es-btn es-btn--primary">
                Contact Us{' '}
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/contact" className="es-btn es-btn--ghost">
                Get Free Consultation
              </Link>
            </div>
            <p className="es-about-intro__contact" data-about-rise>
              <em>Get Support:</em>{' '}
              <a href="mailto:support@exploresresearchsolutions.in">
                support@exploresresearchsolutions.in
              </a>
            </p>
            <div className="es-about-intro__chips" data-about-rise>
              <span className="es-about-intro__chip">
                <span className="es-about-intro__chip-dot" aria-hidden="true"></span>
                PhD-level Experts
              </span>
              <span className="es-about-intro__chip">
                <span className="es-about-intro__chip-dot" aria-hidden="true"></span>
                Confidential
              </span>
              <span className="es-about-intro__chip">
                <span className="es-about-intro__chip-dot" aria-hidden="true"></span>
                On-time Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPart;
