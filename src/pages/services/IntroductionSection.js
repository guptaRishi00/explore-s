import React, { useRef, useLayoutEffect } from 'react';
import servicesData from '../../data/Services.json';
import { fadeUp } from '../../utils/animations';

const IntroductionSection = () => {
  const { introduction } = servicesData;
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    // Guard: ScrollTrigger needs window.matchMedia — skip in tests / SSR
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '[data-svc-intro-rise]', { stagger: 0.12 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section className="es-section es-svc-banner" aria-label="Services introduction" ref={rootRef}>
      <div className="es-svc-banner__blob" aria-hidden="true"></div>
      <div className="container">
        <div className="es-svc-banner__inner">
          <span className="es-eyebrow" data-svc-intro-rise>What we offer</span>
          <h1 className="es-svc-banner__h1" data-svc-intro-rise>
            Our <span className="es-svc-banner__accent">Services</span>
          </h1>
          <p className="es-svc-banner__lead" data-svc-intro-rise>{introduction}</p>
          <div className="es-svc-banner__chips" data-svc-intro-rise>
            <span className="es-svc-banner__chip">
              <span className="es-svc-banner__chip-dot" aria-hidden="true"></span>
              Expert-led
            </span>
            <span className="es-svc-banner__chip">
              <span className="es-svc-banner__chip-dot" aria-hidden="true"></span>
              100% Plagiarism-free
            </span>
            <span className="es-svc-banner__chip">
              <span className="es-svc-banner__chip-dot" aria-hidden="true"></span>
              On-time Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
