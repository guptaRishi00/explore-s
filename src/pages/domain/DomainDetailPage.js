import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import Seo from '../../components/Seo';
import { DOMAINS } from '../../data/domainPickerData';

import footerLogo from '../../assets/logo.png';

// Feature icons
const FEATURE_ICONS = {
  programs: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3Zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9ZM17 16l-5 2.73L7 16v-3.73L12 15l5-2.73V16Z" />
    </svg>
  ),
  expert: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm7 4H5a3 3 0 0 0-3 3v1a1 1 0 0 0 2 0v-1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0v-1a3 3 0 0 0-3-3z" />
    </svg>
  ),
  future: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 17v3h3l9.33-9.33-3-3L3 17zm15.41-9.08a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  ),
};

const PROGRAM_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
    <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
  </svg>
);

const COUNTRIES = ['India', 'United States', 'United Kingdom', 'Australia', 'Canada', 'UAE', 'Other'];
const QUALIFICATIONS = ['10th', '12th', 'Diploma', "Bachelor's Degree", "Master's Degree", 'PhD'];

const DomainDetailPage = () => {
  const { slug } = useParams();
  const domain = DOMAINS.find((d) => d.slug === slug);

  const [form, setForm] = useState({
    name: '', email: '', mobile: '', program: '', qualification: '',
  });
  const [sent, setSent] = useState(false);

  if (!domain) return <Navigate to="/domain" replace />;

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    window.open('https://forms.cloud.microsoft/r/CkrBXvynrJ?origin=lprLink', '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  // Split programs into two columns
  const half = Math.ceil(domain.programs.length / 2);
  const col1 = domain.programs.slice(0, half);
  const col2 = domain.programs.slice(half);

  return (
    <>
      <Seo
        title={`${domain.name} Programs | Explore S Research Solutions`}
        description={domain.heroSubtitle}
        path={`/domain/${domain.slug}`}
        keywords={`${domain.name} programs, ${domain.name} admission guidance, ${domain.name} courses India`}
      />
      <Header parentMenu="home" topbarEnable="enable" />

      <div className="react-wrapper">
        <div className="react-wrapper-inner">
          <main className="dd-page">
            {/* ── Two-col layout ── */}
            <div className="dd-layout">
              {/* Left content */}
              <div className="dd-content">
                {/* Breadcrumb */}
                <nav className="dd-breadcrumb" aria-label="Breadcrumb">
                  <Link to="/">Home</Link>
                  <span aria-hidden="true"> › </span>
                  <Link to="/domain">Domains</Link>
                  <span aria-hidden="true"> › </span>
                  <span>{domain.name}</span>
                </nav>

                {/* Tag */}
                <p className="dd-tagline">{domain.tagline}</p>

                {/* Hero headline */}
                <h1 className="dd-headline">
                  {domain.heroHeadline.map((line, i) => {
                    if (i === domain.heroHeadline.length - 1) {
                      // Highlight the accent word on the last line
                      const parts = line.split(domain.heroAccent);
                      return (
                        <span key={i} className="dd-headline__line">
                          {parts[0]}
                          <span className="dd-headline__accent">{domain.heroAccent}</span>
                          {parts[1]}
                        </span>
                      );
                    }
                    return <span key={i} className="dd-headline__line">{line}</span>;
                  })}
                </h1>

                <p className="dd-subtitle">{domain.heroSubtitle}</p>

                {/* Feature chips */}
                <div className="dd-features">
                  {domain.features.map((f) => (
                    <div key={f.title} className="dd-feature">
                      <span className="dd-feature__icon">{FEATURE_ICONS[f.icon]}</span>
                      <div>
                        <strong className="dd-feature__title">{f.title}</strong>
                        <span className="dd-feature__desc">{f.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Programs list */}
                <div className="dd-programs">
                  <p className="dd-programs__label">
                    <span className="dd-programs__arrow" aria-hidden="true">⟶</span>
                    {domain.sectionLabel}
                    <span className="dd-programs__arrow" aria-hidden="true">⟵</span>
                  </p>
                  <div className="dd-programs__grid">
                    <ul className="dd-programs__col">
                      {col1.map((p) => (
                        <li key={p.name} className="dd-program-item">
                          <span className="dd-program-item__icon">{PROGRAM_ICON}</span>
                          <div>
                            <strong className="dd-program-item__name">{p.name}</strong>
                            <span className="dd-program-item__dur">{p.duration}</span>
                          </div>
                          <span className="dd-program-item__arrow" aria-hidden="true">›</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="dd-programs__col">
                      {col2.map((p) => (
                        <li key={p.name} className="dd-program-item">
                          <span className="dd-program-item__icon">{PROGRAM_ICON}</span>
                          <div>
                            <strong className="dd-program-item__name">{p.name}</strong>
                            <span className="dd-program-item__dur">{p.duration}</span>
                          </div>
                          <span className="dd-program-item__arrow" aria-hidden="true">›</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA box */}
                <div className="dd-cta-box">
                  <span className="dd-cta-box__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="dd-cta-box__note">{domain.ctaBoxNote}</strong>
                  </div>
                  <Link to="/contact" className="dd-cta-box__btn">
                    {domain.ctaBoxLabel} <span aria-hidden="true">›</span>
                  </Link>
                </div>
              </div>

              {/* Right — lead form */}
              <div className="dd-form-panel">
                <div className="dd-form-card">
                  <h2 className="dd-form-card__title">{domain.formTitle}</h2>
                  <p className="dd-form-card__sub">Fill out the form and our experts will help you with the best options.</p>

                  {sent ? (
                    <div className="dd-form-card__success" role="status">
                      <span aria-hidden="true">✓</span>
                      <p>Thank you! Your enquiry email is ready — please send it to connect with our team.</p>
                    </div>
                  ) : (
                    <form className="dd-form" onSubmit={submit} noValidate>
                      <div className="dd-form__field">
                        <label htmlFor="dd-name">Full Name</label>
                        <input id="dd-name" name="name" type="text" value={form.name} onChange={update}
                          placeholder="Enter your full name" required aria-required="true" />
                      </div>
                      <div className="dd-form__field">
                        <label htmlFor="dd-email">Email Address</label>
                        <input id="dd-email" name="email" type="email" value={form.email} onChange={update}
                          placeholder="Enter your email address" required aria-required="true" />
                      </div>
                      <div className="dd-form__field">
                        <label htmlFor="dd-mobile">Mobile Number</label>
                        <input id="dd-mobile" name="mobile" type="tel" value={form.mobile} onChange={update}
                          placeholder="Enter your mobile number" required aria-required="true" />
                      </div>
                      <div className="dd-form__field">
                        <label htmlFor="dd-program">Select Program</label>
                        <select id="dd-program" name="program" value={form.program} onChange={update} required aria-required="true">
                          <option value="" disabled>Select your program</option>
                          {domain.programs.map((p) => (
                            <option key={p.name} value={p.name}>{p.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="dd-form__field">
                        <label htmlFor="dd-qual">Current Qualification</label>
                        <select id="dd-qual" name="qualification" value={form.qualification} onChange={update} required aria-required="true">
                          <option value="" disabled>Select your qualification</option>
                          {QUALIFICATIONS.map((q) => (
                            <option key={q} value={q}>{q}</option>
                          ))}
                        </select>
                      </div>
                      <button type="submit" className="dd-form__submit">
                        Get Free Guidance <span aria-hidden="true">›</span>
                      </button>
                      <p className="dd-form__trust">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
                          <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm-1.2 14.2L7 11.4l1.4-1.4 2.4 2.4 4.8-4.8L17 9l-6.2 6.2Z" />
                        </svg>
                        100% Free &amp; No Obligation
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </main>

          <ScrollToTop scrollClassName="react__up___scroll" />
        </div>
      </div>

      <Footer footerLogo={footerLogo} />
    </>
  );
};

export default DomainDetailPage;
