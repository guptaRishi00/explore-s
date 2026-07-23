import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../../data/Services.json';
import { fadeUp } from '../../utils/animations';
import ResponsiveImage from '../../components/ResponsiveImage';

// A small rotating set of academic-flavoured glyphs gives the dense grid visual
// rhythm without forcing an (arbitrary) unique icon per offering.
const ICONS = [
  // compass / methodology
  <svg key={0} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polygon points="15.5 8.5 11 11 8.5 15.5 13 13 15.5 8.5" /></svg>,
  // pen / writing
  <svg key={1} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" /></svg>,
  // search / review
  <svg key={2} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>,
  // chart / data
  <svg key={3} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" /><rect x="12" y="8" width="3" height="10" /><rect x="17" y="5" width="3" height="13" /></svg>,
];

const DetailedOfferingsSection = () => {
  const rootRef = useRef(null);
  const { detailedOfferings } = servicesData;

  useLayoutEffect(() => {
    // Guard: ScrollTrigger needs window.matchMedia — skip in tests / SSR
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '.es-svc-offering', { stagger: 0.06 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section
      className="es-section es-svc-offerings"
      ref={rootRef}
      aria-label="Detailed service offerings"
    >
      <div className="container">
        <div className="es-svc-intro">
          <span className="es-eyebrow">Go deeper</span>
          <h2 className="es-h2">Detailed Offerings</h2>
          <p className="es-svc-intro__lead">
            Comprehensive support for all your academic research needs.
          </p>
        </div>

        <ul className="es-svc-offerings__grid">
          {detailedOfferings.map((offering, i) => (
            <li key={offering.id} className="es-card es-svc-offering">
              <span className="es-svc-offering__glow" aria-hidden="true"></span>
              <div className="es-svc-offering__media" aria-hidden="true">
                <ResponsiveImage
                  src={offering.image}
                  alt={offering.title}
                  className="es-svc-offering__img"
                />
                <span className="es-svc-offering__index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="es-svc-offering__body">
                <span className="es-svc-offering__icon" aria-hidden="true">
                  {ICONS[i % ICONS.length]}
                </span>
                <h3 className="es-card__title es-svc-offering__title">{offering.title}</h3>
                <p className="es-card__desc">{offering.description}</p>
                <Link
                  to={`/service/${offering.id}`}
                  className="es-card__link es-svc-offering__link"
                  aria-label={`View details about ${offering.title}`}
                >
                  View details
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DetailedOfferingsSection;
