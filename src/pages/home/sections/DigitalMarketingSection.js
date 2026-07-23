import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../../utils/animations';
import { digitalMarketing } from '../../../data/programs';

// One inline SVG icon per module, keyed by module id (decoupled from array order)
const DM_ICONS = {
  // SEO
  seo: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>,
  // Social
  social: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM7 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM17 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/><path d="M14.5 5.5l-5 3M9.5 14.5l5 3"/></svg>,
  // PPC
  ppc: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>,
  // Content
  content: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  // Email
  email: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  // Analytics
  analytics: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="12" width="4" height="9" rx="1"/><rect x="10" y="7" width="4" height="14" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg>,
};

const DigitalMarketingSection = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '.es-dm__card', { stagger: 0.09 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section className="es-section es-dm" id="digital-marketing" ref={rootRef} aria-label="Digital Marketing Training">
      <div className="container">
        <div className="es-dm__intro">
          <span className="es-eyebrow">Digital Marketing</span>
          <h2 className="es-h2">Digital Marketing Training</h2>
          <p className="es-dm__lead">
            Practical, project-based modules that equip you with in-demand digital
            skills — from search optimisation to data-driven reporting.
          </p>
        </div>

        <ul className="es-dm__grid" role="list">
          {digitalMarketing.map((mod) => (
            <li key={mod.id} className="es-dm__card">
              <div className="es-dm__icon" aria-hidden="true">
                {DM_ICONS[mod.id]}
              </div>
              <h3 className="es-dm__mod-title">{mod.title}</h3>
              <p className="es-dm__blurb">{mod.blurb}</p>
            </li>
          ))}
        </ul>

        {/* CTA banner */}
        <div className="es-dm__cta" aria-label="Digital marketing enrolment">
          <p className="es-dm__cta-title">Ready to grow your skills?</p>
          <p className="es-dm__cta-sub">
            Join hundreds of professionals who've transformed their careers with our
            digital marketing programme.
          </p>
          <div className="es-dm__cta-btns">
            <Link to="/contact" className="es-btn es-btn--accent">
              Enroll Now
            </Link>
            <Link to="/services" className="es-btn es-btn--ghost" style={{ borderColor: 'rgba(255,255,255,.6)', color: '#fff' }}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
