import { Link } from 'react-router-dom';
import homeContent from '../../../data/homeContent';

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
                <li key={r.platform}>
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
