import React, { useRef, useLayoutEffect } from 'react';
import { fadeUp } from '../../utils/animations';

// ── Feature data ─────────────────────────────────────────────────────────────

const MISSION_FEATURES = [
  {
    title: 'Empower Students',
    desc: 'Supporting academic growth and success through personalized guidance',
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22,4 12,14.01 9,11.01" />
      </svg>
    ),
  },
  {
    title: 'Expert Support',
    desc: 'Reliable assistance from qualified professionals with proven expertise',
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Quality Assurance',
    desc: 'Maintaining highest standards in research methodology and content',
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

const VISION_FEATURES = [
  {
    title: 'Highly Qualified Team',
    desc: 'Advanced degrees and extensive experience in academic research',
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
      </svg>
    ),
  },
  {
    title: 'Academic Integrity',
    desc: 'Highest standards of quality, originality, and ethical research',
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: 'Client-Centric Approach',
    desc: 'Personalized solutions tailored to individual research needs',
    icon: (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

const MissionVisionSection = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    // Guard: ScrollTrigger needs window.matchMedia — skip in tests / SSR
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '.es-card', { stagger: 0.15 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section className="es-section es-mv" ref={rootRef} aria-label="Mission and Vision">
      <div className="container">
        <div className="es-mv__intro">
          <span className="es-eyebrow">What drives us</span>
          <h2 className="es-h2">Our Purpose &amp; Promise</h2>
        </div>

        <div className="es-mv__grid">
          {/* ── Mission Card ── */}
          <div className="es-card es-mv__card">
            <div className="es-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className="es-card__title">Our Mission</h3>
            <p className="es-card__desc">
              At Explore S Research Solutions, our mission is to empower students, researchers, and professionals by delivering exceptional research assistance that drives academic success. We understand the challenges that come with academic pursuits, and we are here to alleviate those pressures by providing reliable, expert support.
            </p>
            <ul className="es-about__points es-mv__features">
              {MISSION_FEATURES.map(({ title, desc, icon }) => (
                <li key={title} className="es-about__point es-mv__feature">
                  <span className="es-about__check" aria-hidden="true">{icon}</span>
                  <span>
                    <strong className="es-mv__feature-title">{title}</strong>
                    <span className="es-mv__feature-desc"> — {desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Vision Card ── */}
          <div className="es-card es-mv__card">
            <div className="es-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="es-card__title">Our Vision</h3>
            <p className="es-card__desc">
              Our team is comprised of highly qualified professionals with advanced degrees and extensive experience in research and academic writing. Each member of our team is dedicated to delivering meticulous, well-researched, and original content. We pride ourselves on our ability to understand the specific requirements of each client and provide customized solutions that meet the highest standards of academic integrity.
            </p>
            <ul className="es-about__points es-mv__features">
              {VISION_FEATURES.map(({ title, desc, icon }) => (
                <li key={title} className="es-about__point es-mv__feature">
                  <span className="es-about__check" aria-hidden="true">{icon}</span>
                  <span>
                    <strong className="es-mv__feature-title">{title}</strong>
                    <span className="es-mv__feature-desc"> — {desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
