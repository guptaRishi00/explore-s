import { Link } from 'react-router-dom';
import homeContent from '../../../data/homeContent';

// ── Platform logos ──────────────────────────────────────────────────────────
const PLATFORM_LOGOS = {
  Google: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" fill="#1877F2"/>
    </svg>
  ),
  Justdial: (
    <svg viewBox="0 0 100 100" width="28" height="28" aria-label="Justdial" xmlns="http://www.w3.org/2000/svg">
      {/* Rounded square background — light blue/white */}
      <rect width="100" height="100" rx="22" fill="url(#jd-bg)" />
      <defs>
        <linearGradient id="jd-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c8dcf0" />
        </linearGradient>
      </defs>
      {/* Wave divider */}
      <path d="M0 68 Q25 58 50 66 Q75 74 100 62 L100 100 L0 100 Z" fill="#b8d4ec" opacity="0.55" />
      {/* Blue "J" */}
      <text x="12" y="80"
        fontFamily="'Arial Rounded MT Bold','Nunito','Trebuchet MS',Arial,sans-serif"
        fontWeight="900" fontSize="76" fill="#1B75BC">J</text>
      {/* Orange "d" */}
      <text x="48" y="80"
        fontFamily="'Arial Rounded MT Bold','Nunito','Trebuchet MS',Arial,sans-serif"
        fontWeight="900" fontSize="76" fill="#F7941D">d</text>
    </svg>
  ),
};

const NewsroomSection = () => {
  const { newsroom, textTestimonials } = homeContent;

  return (
    <section className="es-section es-newsroom" aria-label="Newsroom and testimonials">
      <div className="container">
        {/* Mini banner */}
        <div className="es-newsroom__banner">
          <div className="es-newsroom__banner-copy">
            <span className="es-badge">{newsroom.bannerBadge}</span>
            <h3 className="es-newsroom__banner-title">{newsroom.bannerTitle}</h3>
            <p>{newsroom.bannerSub}</p>
          </div>
          <Link to={newsroom.bannerCta.to} className="es-btn es-btn--accent">
            {newsroom.bannerCta.label}
          </Link>
        </div>

        {/* Spotlight */}
        <div className="es-newsroom__spotlight">
          <span className="es-tag es-tag--blue">{newsroom.spotlightTag}</span>
          <span className="es-newsroom__badge">{newsroom.spotlightBadge}</span>
        </div>

        {/* Text testimonials */}
        <div className="es-testi">
          <div className="es-testi__head">
            <div>
              <h2 className="es-h2">{textTestimonials.title}</h2>
              <p className="es-section__lead">{textTestimonials.subtitle}</p>
            </div>
            <ul className="es-testi__ratings" role="list">
              {textTestimonials.ratings.map((r) => (
                <li key={r.platform} className="es-testi__rating-item">
                  <span className="es-testi__rating-logo">{PLATFORM_LOGOS[r.platform]}</span>
                  <strong>⭐ {r.score}</strong>
                  <span>{r.platform}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="es-testi__grid" role="list">
            {textTestimonials.cards.map((c) => (
              <li key={c.name} className="es-testi__card">
                <div className="es-testi__stars" aria-hidden="true">★★★★★</div>
                <blockquote className="es-testi__quote">{c.quote}</blockquote>
                <footer className="es-testi__author">
                  <strong>{c.name}</strong>
                  <span>{c.role}</span>
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsroomSection;
