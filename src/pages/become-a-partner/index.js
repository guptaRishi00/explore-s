import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import Seo from '../../components/Seo';

const perks = [
  { title: 'Recurring Revenue', desc: 'Earn attractive, recurring commissions for every scholar or professional you refer to our programs and services.' },
  { title: 'Co-Branded Growth', desc: 'Leverage our academic ecosystem, mentors, and tools under a trusted, co-branded partnership.' },
  { title: 'Dedicated Support', desc: 'Get a dedicated partner manager, marketing collateral, and onboarding assistance from day one.' },
  { title: 'Global Reach', desc: 'Tap into a network spanning 35+ countries and 80+ academic institutions.' },
];

const BecomeAPartner = () => (
  <>
    <Seo
      title="Become a Partner | Explore S Research Solutions"
      description="Partner with Explore S Research Solutions and grow together. Recurring revenue, co-branded growth, and dedicated support for academic and skill-development referrals."
      path="/become-a-partner"
      keywords="become a partner, academic partnership, referral program, Explore S Research Solutions"
    />
    <Header parentMenu="home" topbarEnable="enable" />

    <div className="react-wrapper">
      <div className="react-wrapper-inner">
        <section className="es-section es-svc-banner">
          <div className="es-svc-banner__blob" aria-hidden="true" />
          <div className="es-svc-banner__inner">
            <h1 className="es-svc-banner__h1">
              Become a <span className="es-svc-banner__accent">Partner</span>
            </h1>
            <p className="es-svc-banner__lead">
              Join hands with a premier global education and academic assistance platform.
            </p>
          </div>
        </section>

        <section className="es-section">
          <div className="container">
            <div className="es-section__head es-section__head--center">
              <span className="es-tag">Partnership Program</span>
              <h2 className="es-h2">Grow With Explore S Research Solutions</h2>
              <p className="es-section__lead">
                Whether you are a consultant, institution, or influencer, our partnership program
                helps you deliver real value to scholars and professionals — while you grow.
              </p>
            </div>

            <ul className="es-global__stats" role="list" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {perks.map((p) => (
                <li key={p.title} className="es-global__stat" style={{ textAlign: 'left' }}>
                  <h3 className="es-pillar__title">{p.title}</h3>
                  <p className="es-pillar__desc">{p.desc}</p>
                </li>
              ))}
            </ul>

            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link to="/contact" className="es-btn es-btn--accent">Apply to Partner</Link>
            </div>
          </div>
        </section>
      </div>
    </div>

    <Footer />
    <ScrollToTop />
  </>
);

export default BecomeAPartner;
