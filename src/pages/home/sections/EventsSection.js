import { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../../utils/animations';
import homeContent from '../../../data/homeContent';

const EventsSection = () => {
  const rootRef = useRef(null);
  const { events } = homeContent;
  // One video plays at a time — clicking another tile swaps the player.
  const [active, setActive] = useState(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '.es-events__tile', { stagger: 0.06 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section className="es-section es-events" id="events" ref={rootRef} aria-label="Global academic initiatives">
      <div className="container">
        <div className="es-section__head es-section__head--center">
          <h2 className="es-h2">{events.title}</h2>
          <p className="es-section__lead">{events.subtitle}</p>
        </div>

        <ul className="es-events__chips" role="list">
          {events.labels.map((label) => (
            <li key={label} className="es-events__chip">{label}</li>
          ))}
        </ul>

        <ul className="es-events__mosaic" role="list">
          {events.gallery.map((item) => {
            const playing = item.type === 'video' && active === item.src;
            const mods = `${item.wide ? ' es-events__tile--wide' : ''}${item.tall ? ' es-events__tile--tall' : ''}`;
            return (
              <li key={item.src} className={`es-events__tile${mods}`}>
                {playing ? (
                  <video
                    src={item.src}
                    poster={item.poster}
                    controls
                    autoPlay
                    playsInline
                    onEnded={() => setActive(null)}
                  />
                ) : item.type === 'video' ? (
                  <button
                    type="button"
                    className="es-events__thumb"
                    onClick={() => setActive(item.src)}
                    aria-label={`Play video: ${item.alt}`}
                  >
                    <img src={item.poster} alt="" loading="lazy" />
                    <span className="es-events__play" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7L8 5Z" />
                      </svg>
                    </span>
                  </button>
                ) : (
                  <img className="es-events__img" src={item.src} alt={item.alt} loading="lazy"
                    style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined} />
                )}
              </li>
            );
          })}
        </ul>

        <div className="es-events__more">
          <Link to={events.cta.to} className="es-btn es-btn--accent">
            {events.cta.label} ➔
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
