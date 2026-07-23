import { useLayoutEffect, useRef, useState } from 'react';
import { fadeUp } from '../../../utils/animations';
import homeContent from '../../../data/homeContent';

// Filled white glyphs for the four value pillars.
const PILLAR_ICONS = {
  guidance: (
    <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3Zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9ZM17 16l-5 2.73L7 16v-3.73L12 15l5-2.73V16Z" />
  ),
  global: (
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8ZM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96ZM4.26 14a7.82 7.82 0 0 1 0-4h3.38a16.5 16.5 0 0 0 0 4H4.26Zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.99 7.99 0 0 1 5.08 16Zm2.95-8H5.08a7.99 7.99 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8ZM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82A15.65 15.65 0 0 1 12 19.96ZM14.34 14H9.66a14.7 14.7 0 0 1 0-4h4.68a14.7 14.7 0 0 1 0 4Zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a7.99 7.99 0 0 1-4.33 3.56ZM16.36 14a16.5 16.5 0 0 0 0-4h3.38a7.82 7.82 0 0 1 0 4h-3.38Z" />
  ),
  tech: (
    <path d="M9 3v2H7a2 2 0 0 0-2 2v2H3v2h2v2H3v2h2v2a2 2 0 0 0 2 2h2v2h2v-2h2v2h2v-2h2a2 2 0 0 0 2-2v-2h2v-2h-2v-2h2V9h-2V7a2 2 0 0 0-2-2h-2V3h-2v2h-2V3H9Zm-2 4h10v10H7V7Zm2 2v6h6V9H9Z" />
  ),
  quality: (
    <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm-1.2 14.2L7 11.4l1.4-1.4 2.4 2.4 4.8-4.8L17 9l-6.2 6.2Z" />
  ),
};

const AboutPillars = () => {
  const root = useRef(null);
  const { about, leadForm } = homeContent;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', mobile: '', service: '', country: '', message: '', consent: false,
  });

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(root.current, '.es-pillar', { stagger: 0.1 });
    return () => ctx?.revert?.();
  }, []);

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nMobile: ${form.mobile}\nService: ${form.service}\nCountry: ${form.country}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:support@exploresresearchsolutions.in?subject=Consultation Request&body=${body}`;
    setSent(true);
  };

  return (
    <section className="es-section es-about" ref={root} aria-label="About Explore S">
      <div className="container">
        <div className="es-about__grid">
          {/* Left — copy + pillars */}
          <div className="es-about__copy">
            <span className="es-tag">{about.tag}</span>
            <h2 className="es-h2">
              {about.titleSegments
                ? about.titleSegments.map((seg, i) =>
                    seg.c ? (
                      <span key={i} className={`es-hl--${seg.c}`}>{seg.t}</span>
                    ) : (
                      <span key={i}>{seg.t}</span>
                    )
                  )
                : about.title}
            </h2>
            <p className="es-about__intro">{about.intro}</p>

            <ul className="es-pillars" role="list">
              {about.pillars.map((p) => (
                <li key={p.title} className="es-pillar">
                  <span className="es-pillar__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      {PILLAR_ICONS[p.icon]}
                    </svg>
                  </span>
                  <div>
                    <h3 className="es-pillar__title">{p.title}</h3>
                    <p className="es-pillar__desc">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — lead form */}
          <div className="es-leadform">
            <div className="es-leadform__head">
              <h3 className="es-leadform__title">{leadForm.title}</h3>
              <p className="es-leadform__subtitle">{leadForm.subtitle}</p>
            </div>

            {sent ? (
              <div className="es-leadform__success" role="status">
                <span aria-hidden="true">✓</span>
                <p>Thank you! Your request has been prepared — please send the email to reach our team.</p>
              </div>
            ) : (
              <form className="es-leadform__form" onSubmit={submit}>
                <input name="name" value={form.name} onChange={update} type="text" placeholder="Your Name*" required aria-label="Your Name" />
                <input name="email" value={form.email} onChange={update} type="email" placeholder="Your Email*" required aria-label="Your Email" />
                <input name="mobile" value={form.mobile} onChange={update} type="tel" placeholder="Mobile Number*" required aria-label="Mobile Number" />
                <select name="service" value={form.service} onChange={update} required aria-label="Choose your service">
                  <option value="" disabled>-- Choose Your Service --</option>
                  {leadForm.services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <select name="country" value={form.country} onChange={update} required aria-label="Select country">
                  <option value="" disabled>-- Select Country --</option>
                  {leadForm.countries.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <textarea name="message" value={form.message} onChange={update} rows="3" placeholder="Type Your Message" aria-label="Message" />
                <label className="es-leadform__consent">
                  <input name="consent" checked={form.consent} onChange={update} type="checkbox" required />
                  <span>{leadForm.consent}</span>
                </label>
                <button type="submit" className="es-btn es-btn--accent es-leadform__submit">
                  {leadForm.submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPillars;
