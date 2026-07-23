import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../../utils/animations';
import ResponsiveImage from '../../../components/ResponsiveImage';
import homeContent from '../../../data/homeContent';

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="18"
    height="18"
  >
    <circle cx="10" cy="10" r="9" strokeWidth="1.5" />
    <path d="M6 10.5l3 3 5-5.5" />
  </svg>
);

const AboutSection = () => {
  const rootRef = useRef(null);
  const { title, body, points, cta, image } = homeContent.about;

  useLayoutEffect(() => {
    // Guard: ScrollTrigger needs window.matchMedia — skip in tests / SSR
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '[data-about-rise]', { stagger: 0.1 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section className="es-section es-about" ref={rootRef} aria-label="About">
      <div className="container">
        <div className="es-about__grid">
          {/* ── Image column ── */}
          <div className="es-about__media" data-about-rise>
            <div className="es-about__frame">
              <ResponsiveImage
                src={image.src}
                webp={image.webp}
                alt={image.alt}
                className="es-about__img"
              />
            </div>
          </div>

          {/* ── Copy column ── */}
          <div className="es-about__copy">
            <span className="es-eyebrow" data-about-rise>
              Who we are
            </span>

            <h2 className="es-h2" data-about-rise>
              {title}
            </h2>

            <p className="es-about__body" data-about-rise>
              {body}
            </p>

            <ul className="es-about__points" role="list" data-about-rise>
              {points.map((point) => (
                <li key={point} className="es-about__point">
                  <span className="es-about__check" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div data-about-rise>
              <Link to={cta.to} className="es-btn es-btn--primary">
                {cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
