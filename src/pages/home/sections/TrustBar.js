import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { registerGsap, countUp, prefersReducedMotion } from '../../../utils/animations';
import homeContent from '../../../data/homeContent';

const TrustBar = () => {
  const root = useRef(null);
  const numRefs = useRef([]);
  const { stats } = homeContent;

  useLayoutEffect(() => {
    // Guard: ScrollTrigger calls window.matchMedia — skip if not available (tests / SSR)
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    if (!prefersReducedMotion()) {
      registerGsap();
    }
    const ctx = gsap.context(() => {
      numRefs.current.forEach((el, i) => {
        if (el) countUp(el, stats[i].value);
      });
    }, root);
    return () => ctx.revert();
  }, [stats]);

  return (
    <section className="es-trust" aria-label="Trust statistics">
      <div className="container">
        <ul className="es-trust__grid" role="list">
          {stats.map((stat, i) => (
            <li key={stat.label} className="es-trust__card">
              <div className="es-trust__number-wrap" aria-label={`${stat.value}${stat.suffix}`}>
                <span
                  className="es-trust__number"
                  ref={el => { numRefs.current[i] = el; }}
                >
                  {stat.value}
                </span>
                <span className="es-trust__suffix" aria-hidden="true">{stat.suffix}</span>
              </div>
              <p className="es-trust__label">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;
