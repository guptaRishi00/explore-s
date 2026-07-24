import { useLayoutEffect, useRef } from 'react';
import { fadeUp } from '../../../utils/animations';
import homeContent from '../../../data/homeContent';

const Card = ({ person }) => (
  <li className="es-community__card">
    <div className="es-community__avatar" aria-hidden="true">
      {person.image
        ? <img src={person.image} alt="" loading="lazy" width="62" height="62" />
        : person.name.split(' ').slice(-1)[0].charAt(0)}
    </div>
    <div className="es-community__info">
      <h3 className="es-community__name">{person.name}</h3>
    </div>
  </li>
);

// One marquee row: the cards are rendered twice so the -50% loop is seamless.
const MarqueeRow = ({ people, dir }) => (
  <div className="es-community__row">
    <ul className={`es-community__track es-community__track--${dir}`} role="list">
      {people.map((p) => <Card key={p.name} person={p} />)}
      {people.map((p) => <Card key={`${p.name}-dup`} person={p} />)}
    </ul>
  </div>
);

const CommunitySection = () => {
  const root = useRef(null);
  const { community } = homeContent;

  const rowOne = community.people.slice(0, 8);
  const rowTwo = community.people.slice(8);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(root.current, '.es-community__row', { stagger: 0.15 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section className="es-section es-community-net" ref={root} aria-label="Global network">
      <div className="container">
        <div className="es-section__head es-section__head--center">
          <h2 className="es-h2">{community.title}</h2>
          <p className="es-section__lead">{community.subtitle}</p>
        </div>
      </div>

      {/* Full-bleed two-row marquee */}
      <div className="es-community__marquee" aria-hidden="true">
        <MarqueeRow people={rowOne} dir="fwd" />
        <MarqueeRow people={rowTwo} dir="rev" />
      </div>
    </section>
  );
};

export default CommunitySection;
