import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import Seo from '../../components/Seo';

const Disclaimer = () => (
  <>
    <Seo
      title="Disclaimer | Explore S Research Solutions"
      description="Read the disclaimer for Explore S Research Solutions regarding the use of our academic guidance and research support services."
      path="/disclaimer"
      keywords="disclaimer, Explore S Research Solutions, academic guidance"
    />
    <Header parentMenu="home" topbarEnable="enable" />

    <div className="react-wrapper">
      <div className="react-wrapper-inner">
        <section className="es-section es-svc-banner">
          <div className="es-svc-banner__blob" aria-hidden="true" />
          <div className="es-svc-banner__inner">
            <h1 className="es-svc-banner__h1">Disclaimer</h1>
            <p className="es-svc-banner__lead">Last Updated: January 2026</p>
          </div>
        </section>

        <section className="es-section es-legal">
          <div className="container">
            <div className="es-legal__prose">
              <div className="es-legal__notice">
                <strong>Note:</strong> This is a template for the Client's review by legal counsel.
              </div>
              <h2>1. Educational Support Only</h2>
              <p>
                Explore S Research Solutions provides academic guidance, mentorship, research
                assistance, and skill-development training strictly for reference, learning, and
                educational purposes. All materials and guidance are intended to support the
                learner's own original work.
              </p>
              <h2>2. No Guarantee of Outcomes</h2>
              <p>
                While we strive for the highest quality, we do not guarantee specific academic
                results, admissions, publication acceptance, grades, or career outcomes, as these
                depend on factors outside our control.
              </p>
              <h2>3. Third-Party Content</h2>
              <p>
                Our website may reference third-party tools, journals, and institutions. We are not
                responsible for the content, policies, or practices of any third parties.
              </p>
              <h2>4. Academic Integrity</h2>
              <p>
                Clients are responsible for using our services in accordance with the academic
                integrity policies of their respective institutions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <Footer />
    <ScrollToTop />
  </>
);

export default Disclaimer;
