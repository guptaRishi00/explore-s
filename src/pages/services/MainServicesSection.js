import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../../data/Services.json';
import { fadeUp } from '../../utils/animations';
import ResponsiveImage from '../../components/ResponsiveImage';

const ICONS = [
  // Mortarboard / thesis
  <svg key={0} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L2 8l10 5 10-5-10-5z"/><path d="M2 8v6"/><path d="M6 10.6V17c0 1.1 2.7 2 6 2s6-.9 6-2v-6.4"/></svg>,
  // Pencil / writing
  <svg key={1} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>,
  // Journal / publication
  <svg key={2} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
];

const MainServicesSection = () => {
  const rootRef = useRef(null);
  const { mainServices } = servicesData;

  useLayoutEffect(() => {
    // Guard: ScrollTrigger needs window.matchMedia — skip in tests / SSR
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '.es-card', { stagger: 0.12 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section
      className="es-section es-svc-main"
      ref={rootRef}
      aria-label="Main services"
    >
      <div className="container">
        <div className="es-svc-intro">
          <span className="es-eyebrow">Our expertise</span>
          <h2 className="es-h2">Main Services</h2>
          <p className="es-svc-intro__lead">
            Comprehensive research support designed to take you from idea to publication.
          </p>
        </div>

        <ul className="es-svc-main__grid">
          {mainServices.map((service, i) => (
            <li key={service.id} className="es-card es-svc-card">
              <div className="es-svc-card__media" aria-hidden="true">
                <ResponsiveImage
                  src={service.image}
                  alt={service.title}
                  className="es-svc-card__img"
                />
                <span className="es-svc-card__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="es-svc-card__body">
                <div className="es-card__icon" aria-hidden="true">
                  {ICONS[i]}
                </div>
                <h3 className="es-card__title">{service.title}</h3>
                <p className="es-card__desc">{service.description}</p>
                <Link
                  to={`/service/${service.id}`}
                  className="es-card__link"
                  aria-label={`View details about ${service.title}`}
                >
                  View details
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
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

export default MainServicesSection;
