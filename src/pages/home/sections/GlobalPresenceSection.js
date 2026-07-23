import homeContent from '../../../data/homeContent';

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
                <span className="es-global__icon" aria-hidden="true"><i className={s.icon} /></span>
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
