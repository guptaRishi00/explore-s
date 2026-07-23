import { useLayoutEffect, useRef } from 'react';
import { fadeUp } from '../../../utils/animations';
import { googleRating } from '../../../data/community';

// Google "G" brand SVG (multi-color brand exception)
const GoogleG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="38" height="38" aria-label="Google" role="img">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.16 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.66-13.46-8.91l-7.97 6.19C6.51 42.62 14.62 48 24 48z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
);

// Render N filled stars + (5-N) empty stars
const StarRow = ({ rating }) => {
  const filled = Math.round(rating); // 5 for 4.9
  return (
    <div className="es-grating__stars" aria-label={`Rated ${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden="true">
          <path
            fill={i < filled ? '#FBBC05' : '#D1D5DB'}
            d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
          />
        </svg>
      ))}
    </div>
  );
};

const GoogleRatingSection = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '.es-grating__card', { stagger: 0 });
    return () => ctx?.revert?.();
  }, []);

  const { rating, reviews, url } = googleRating;

  return (
    <section className="es-section es-grating" id="google-rating" ref={rootRef} aria-label="Google rating">
      <div className="container">
        <div className="es-grating__card">
          <div className="es-grating__logo">
            <GoogleG />
          </div>

          <div className="es-grating__score">
            <span className="es-grating__number" aria-hidden="true">{rating}</span>
            <StarRow rating={rating} />
            <span className="es-grating__reviews">({reviews} reviews)</span>
          </div>

          <p className="es-grating__label">
            Rated on Google by our scholars
          </p>

          <div className="es-grating__cta">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="es-btn es-btn--ghost"
              aria-label="Read our Google reviews (opens in new tab)"
            >
              Read our reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleRatingSection;
