import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import Seo from '../../components/Seo';

const RefundPolicy = () => (
  <>
    <Seo
      title="Refund Policy | Explore S Research Solutions"
      description="Read the Refund Policy for Explore S Research Solutions covering eligibility, timelines, and the refund process for our services."
      path="/refund-policy"
      keywords="refund policy, Explore S Research Solutions, cancellation"
    />
    <Header parentMenu="home" topbarEnable="enable" />

    <div className="react-wrapper">
      <div className="react-wrapper-inner">
        <section className="es-section es-svc-banner">
          <div className="es-svc-banner__blob" aria-hidden="true" />
          <div className="es-svc-banner__inner">
            <h1 className="es-svc-banner__h1">
              Refund <span className="es-svc-banner__accent">Policy</span>
            </h1>
            <p className="es-svc-banner__lead">Last Updated: January 2026</p>
          </div>
        </section>

        <section className="es-section es-legal">
          <div className="container">
            <div className="es-legal__prose">
              <div className="es-legal__notice">
                <strong>Note:</strong> This is a template for the Client's review by legal counsel.
              </div>
              <h2>1. Eligibility</h2>
              <p>
                Refund requests are considered on a case-by-case basis and must be raised within the
                timeline specified in your service agreement. Work already delivered or in progress
                may be subject to deductions.
              </p>
              <h2>2. Non-Refundable Items</h2>
              <p>
                Certain services — including completed deliverables, third-party fees, plagiarism
                reports, and admission-processing charges — are non-refundable.
              </p>
              <h2>3. Process</h2>
              <p>
                To request a refund, contact us at support@exploresresearchsolutions.in with your
                order details. Approved refunds are processed to the original payment method within
                7–14 business days.
              </p>
              <h2>4. Contact</h2>
              <p>
                For any questions about this policy, reach us at
                {' '}support@exploresresearchsolutions.in or +91 9289441168.
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

export default RefundPolicy;
