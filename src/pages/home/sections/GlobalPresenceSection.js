import homeContent from '../../../data/homeContent';

// SVG icons keyed by the flaticon class used in homeContent.js
const PRESENCE_ICONS = {
  'flaticon-worldwide': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8ZM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96ZM4.26 14a7.82 7.82 0 0 1 0-4h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26Zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.99 7.99 0 0 1 5.08 16Zm2.95-8H5.08a7.99 7.99 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8ZM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82A15.65 15.65 0 0 1 12 19.96ZM14.34 14H9.66c-.09-.65-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.35-.16 2Zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a7.99 7.99 0 0 1-4.33 3.56ZM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38a7.82 7.82 0 0 1 0 4h-3.38Z"/>
    </svg>
  ),
  'flaticon-university': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">
      <path d="M12 3 2 8l10 5 10-5-10-5ZM2 12v1l10 5 10-5v-1l-10 5L2 12Zm0 4v1l10 5 10-5v-1l-10 5L2 16Z"/>
    </svg>
  ),
  'flaticon-student': (
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z"/>
    </svg>
  ),
};

const GlobalPresenceSection = () => {
  const { globalPresence } = homeContent;

  return (
    <section className="es-section es-global" aria-label="Global presence">
      <div className="container">
        <div className="es-global__inner">
          <div className="es-global__copy">
            <span className="es-tag">{globalPresence.tag}</span>
            <h2 className="es-h2">{globalPresence.title}</h2>
            <p className="es-section__lead">{globalPresence.desc}</p>
          </div>

          <ul className="es-global__stats" role="list">
            {globalPresence.stats.map((s) => (
              <li key={s.label} className="es-global__stat">
                <span className="es-global__icon" aria-hidden="true">
                  {PRESENCE_ICONS[s.icon] || <i className={s.icon} />}
                </span>
                <strong className="es-global__value">{s.value}</strong>
                <span className="es-global__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
