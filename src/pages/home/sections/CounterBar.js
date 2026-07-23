import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { registerGsap, countUp, prefersReducedMotion } from '../../../utils/animations';
import homeContent from '../../../data/homeContent';

const CounterBar = () => {
  const root = useRef(null);
  const numRefs = useRef([]);
  const { counters } = homeContent;

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    if (!prefersReducedMotion()) registerGsap();
    const ctx = gsap.context(() => {
      numRefs.current.forEach((el, i) => {
        if (el) countUp(el, counters[i].value);
      });
    }, root);
    return () => ctx.revert();
  }, [counters]);

  return (
    <section className="es-counter" aria-label="Key statistics" ref={root}>
      <div className="container">
        <ul className="es-counter__grid" role="list">
          {counters.map((c, i) => (
            <li key={c.label} className="es-counter__item">
              <div className="es-counter__num" aria-label={`${c.value}${c.suffix}`}>
                <span ref={(el) => { numRefs.current[i] = el; }}>{c.value}</span>
                <span aria-hidden="true">{c.suffix}</span>
              </div>
              <p className="es-counter__label">{c.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CounterBar;
