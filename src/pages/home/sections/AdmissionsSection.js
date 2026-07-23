import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../../utils/animations';
import { admissions } from '../../../data/programs';

// SVG icons keyed by iconKey
const ICONS = {
  phd: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  masters: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  medical: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
};

const CHECK = (
  <svg aria-hidden="true" className="es-adm__point-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
    <polyline points="3 8 6.5 11.5 13 4"/>
  </svg>
);

const AdmissionsSection = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '.es-adm__card', { stagger: 0.12 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section className="es-section es-adm" id="admissions" ref={rootRef} aria-label="Admissions">
      <div className="container">
        <div className="es-adm__intro">
          <span className="es-eyebrow">Admissions</span>
          <h2 className="es-h2">Admissions Made Simple</h2>
          <p className="es-adm__lead">
            Expert guidance at every step — from shortlisting the right institution to
            securing your offer letter.
          </p>
        </div>

        <ul className="es-adm__grid" role="list">
          {admissions.map((item) => (
            <li key={item.id} className="es-adm__card">
              <div className="es-adm__chip" aria-hidden="true">
                {ICONS[item.iconKey]}
              </div>
              <h3 className="es-adm__title">{item.title}</h3>
              <p className="es-adm__tagline">{item.tagline}</p>
              <ul className="es-adm__points" aria-label={`${item.title} services`}>
                {item.points.map((pt) => (
                  <li key={pt} className="es-adm__point">
                    {CHECK}
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="es-btn es-btn--accent" aria-label={`Enroll in ${item.title}`}>
                Enroll Now
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AdmissionsSection;
