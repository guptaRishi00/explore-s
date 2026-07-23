import homeContent from '../../../data/homeContent';

const DomainsSection = () => {
  const { title, items } = homeContent.domains;
  // Duplicate items so the CSS translateX(-50%) loop is seamless
  const doubled = [...items, ...items];

  return (
    <section className="es-section es-domains" aria-label="Research domains">
      <div className="container">
        <div className="es-domains__intro">
          <h2 className="es-h2">{title}</h2>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="es-domains__row es-domains__row--fwd" aria-hidden="true">
        <ul className="es-domains__track es-domains__track--fwd" role="list">
          {doubled.map((domain, i) => (
            <li key={`fwd-${i}`} className="es-domains__chip">
              {domain}
            </li>
          ))}
        </ul>
      </div>

      {/* Row 2 — scrolls right (reverse) */}
      <div className="es-domains__row es-domains__row--rev" aria-hidden="true">
        <ul className="es-domains__track es-domains__track--rev" role="list">
          {doubled.map((domain, i) => (
            <li key={`rev-${i}`} className="es-domains__chip">
              {domain}
            </li>
          ))}
        </ul>
      </div>

      {/* Accessible, non-animated list for screen readers */}
      <div className="container es-domains__a11y">
        <ul role="list" aria-label={title}>
          {items.map((domain) => (
            <li key={domain}>{domain}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DomainsSection;
