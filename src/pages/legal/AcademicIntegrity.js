import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import Seo from '../../components/Seo';

const AcademicIntegrity = () => (
  <>
    <Seo
      title="Academic Integrity Policy | Explore S Research Solutions"
      description="Our Academic Integrity Policy outlines the ethical use of Explore S Research Solutions' guidance, mentorship, and research-support services."
      path="/academic-integrity"
      keywords="academic integrity, ethics, plagiarism, Explore S Research Solutions"
    />
    <Header parentMenu="home" topbarEnable="enable" />

    <div className="react-wrapper">
      <div className="react-wrapper-inner">
        <section className="es-section es-svc-banner">
          <div className="es-svc-banner__blob" aria-hidden="true" />
          <div className="es-svc-banner__inner">
            <h1 className="es-svc-banner__h1">
              Academic <span className="es-svc-banner__accent">Integrity</span>
            </h1>
            <p className="es-svc-banner__lead">Our commitment to ethical, original scholarship.</p>
          </div>
        </section>

        <section className="es-section es-legal">
          <div className="container">
            <div className="es-legal__prose">
              <div className="es-legal__notice">
                <strong>Note:</strong> This is a template for the Client's review by legal counsel.
              </div>
              <h2>1. Guidance, Not Ghostwriting</h2>
              <p>
                Explore S Research Solutions provides mentorship, editing, formatting, and
                reference materials to help learners produce their own original work. Our services
                are intended to strengthen — never to replace — the student's independent effort.
              </p>
              <h2>2. Originality &amp; Plagiarism</h2>
              <p>
                We uphold a strict zero-plagiarism standard, using premium tools such as Turnitin to
                ensure all supporting materials meet global academic standards.
              </p>
              <h2>3. Learner Responsibility</h2>
              <p>
                Clients must comply with the academic integrity rules of their institutions and use
                our deliverables ethically and appropriately.
              </p>
              <h2>4. Confidentiality</h2>
              <p>
                All engagements are handled with strict confidentiality and data integrity.
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

export default AcademicIntegrity;
