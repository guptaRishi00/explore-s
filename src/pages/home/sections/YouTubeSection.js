import { useState } from 'react';
import homeContent from '../../../data/homeContent';

// Portrait thumbnail for Shorts, full-res landscape otherwise.
const thumbUrl = (v) =>
  v.short
    ? `https://i.ytimg.com/vi/${v.id}/oar2.jpg`
    : `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`;

const YouTubeSection = () => {
  const { youtube } = homeContent;
  // Only one video plays at a time — clicking another card swaps the embed.
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="es-section es-youtube" aria-label="Video learning hub">
      <div className="container">
        <div className="es-youtube__banner">
          <div className="es-youtube__banner-glow" aria-hidden="true" />
          <span className="es-youtube__banner-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          </span>
          <div className="es-youtube__banner-text">
            <span className="es-youtube__banner-eyebrow">YouTube</span>
            <h2 className="es-youtube__title">{youtube.title}</h2>
          </div>
        </div>

        <ul className="es-youtube__grid" role="list">
          {youtube.videos.map((v) => (
            <li
              key={v.id}
              className={`es-youtube__card${v.short ? ' es-youtube__card--short' : ''}`}
            >
              <div className="es-youtube__frame">
                {activeId === v.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="es-youtube__thumb"
                    onClick={() => setActiveId(v.id)}
                    aria-label={`Play video: ${v.title}`}
                  >
                    <img src={thumbUrl(v)} alt="" loading="lazy" />
                    {v.short && (
                      <span className="es-youtube__badge" aria-hidden="true">
                        Short
                      </span>
                    )}
                    <span className="es-youtube__play" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7L8 5Z" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
              <p className="es-youtube__label">{v.title}</p>
            </li>
          ))}
        </ul>

        <div className="es-youtube__foot">
          <h3 className="es-h3">{youtube.heading}</h3>
          <p>{youtube.subtitle}</p>
          <a href={youtube.channelUrl} target="_blank" rel="noreferrer" className="es-btn es-btn--accent">
            Visit our YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
