import { useLayoutEffect, useRef } from 'react';
import { openBookMeeting } from '../../../utils/bookMeeting';
import { fadeUp } from '../../../utils/animations';
import homeContent from '../../../data/homeContent';

const initials = (name) =>
  name.replace(/^Dr\.?\s*/i, '').split(/\s+/).filter(Boolean).map((w) => w[0].toUpperCase()).join('').slice(0, 2);

const ExpertsSection = () => {
  const rootRef = useRef(null);
  const { mentors } = homeContent;

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '.es-mentor', { stagger: 0.1 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section className="es-section es-mentors" id="experts" ref={rootRef} aria-label="Trusted mentors">
      <div className="container">
        <div className="es-section__head es-section__head--center">
          <span className="es-tag">{mentors.tag}</span>
          <h2 className="es-h2">{mentors.title}</h2>
          <p className="es-section__lead">{mentors.desc}</p>
        </div>

        <ul className="es-mentors__grid" role="list">
          {mentors.cards.map((m) => (
            <li key={m.role} className="es-mentor">
              {m.image ? (
                <img className="es-mentor__avatar" src={m.image} alt={m.name} loading="lazy" />
              ) : (
                <div className="es-mentor__avatar" aria-hidden="true">{initials(m.name)}</div>
              )}
              <h3 className="es-mentor__name">{m.name}</h3>
              <p className="es-mentor__role">{m.role}</p>
              <p className="es-mentor__meta">
                <span className="es-mentor__rating" aria-label={`Rated ${m.rating} out of 5`}>★ {m.rating}</span>
                <span aria-hidden="true"> · </span>
                {m.experience}
              </p>
              <span className="es-mentor__sessions">{m.sessions}</span>
              <button type="button" className="es-mentor__cta" onClick={openBookMeeting}>
                Book a Call Now
              </button>
            </li>
          ))}
        </ul>

        <div className="es-mentors__more">
          <button type="button" className="es-btn es-btn--accent" onClick={openBookMeeting}>
            {mentors.more}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
