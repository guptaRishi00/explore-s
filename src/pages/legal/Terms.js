import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import Seo from '../../components/Seo';
import footerLogo from '../../assets/logo.png';

const Terms = () => (
    <>
        <Seo
            title="Terms & Conditions | Explore S Research Solutions"
            description="Read the Terms and Conditions governing your use of Explore S Research Solutions' website and academic research support services."
            path="/terms"
            keywords="terms and conditions, Explore S Research Solutions, service agreement, research support"
            noindex={false}
        />
        <Header parentMenu='home' topbarEnable='enable' />

        <div className="react-wrapper">
            <div className="react-wrapper-inner">

                {/* Hero Banner */}
                <section className="es-section es-svc-banner">
                    <div className="es-svc-banner__blob" aria-hidden="true" />
                    <div className="es-svc-banner__inner">
                        <h1 className="es-svc-banner__h1">
                            Terms <span className="es-svc-banner__accent">&amp; Conditions</span>
                        </h1>
                        <p className="es-svc-banner__lead">Last Updated: January 2025</p>
                    </div>
                </section>

                {/* Prose Section */}
                <section className="es-section es-legal">
                    <div className="container">
                        <div className="es-legal__prose">

                            <div className="es-legal__notice">
                                <strong>Note:</strong> This is a template for the Client's review by legal counsel.
                            </div>

                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using the website of Explore S Research Solutions
                                ("Company," "we," "us," or "our") at{' '}
                                <a href="https://www.exploresresearchsolutions.in">
                                    www.exploresresearchsolutions.in
                                </a>
                                , or by engaging our services, you ("User" or "Client") agree to be bound by these
                                Terms &amp; Conditions. If you do not agree to all of these terms, please do not
                                use our website or services.
                            </p>
                            <p>
                                We reserve the right to revise these Terms at any time. Continued use of our
                                website or services after any revision constitutes your acceptance of the updated
                                Terms.
                            </p>

                            <h2>2. Services</h2>
                            <p>
                                Explore S Research Solutions provides academic research support services, including
                                but not limited to thesis writing assistance, research paper support, literature
                                reviews, data analysis, and publication guidance.
                            </p>
                            <ul>
                                <li>
                                    Our services are intended to assist and guide academic researchers; they are
                                    not a substitute for formal institutional guidance, academic supervision, or
                                    professional advice.
                                </li>
                                <li>
                                    Users remain solely responsible for the integrity, accuracy, and originality
                                    of any work they submit to academic institutions.
                                </li>
                                <li>
                                    We reserve the right to decline any project that violates academic integrity
                                    policies or applicable laws.
                                </li>
                            </ul>

                            <h2>3. Payments &amp; Refunds</h2>
                            <p>
                                All payments for our services are processed securely through Razorpay, a
                                third-party payment gateway. By making a payment, you agree to Razorpay's
                                terms of service and privacy policy.
                            </p>
                            <ul>
                                <li>
                                    Service fees are agreed upon prior to commencement of work and confirmed in
                                    a written service agreement or quotation.
                                </li>
                                <li>
                                    Refunds, if applicable, are governed by the terms set out in the individual
                                    service agreement provided at the time of engagement.
                                </li>
                                <li>
                                    We do not offer blanket refunds once work has commenced unless a material
                                    breach of the service agreement has occurred on our part.
                                </li>
                                <li>
                                    For any payment disputes, please contact us within 7 days of the transaction
                                    date.
                                </li>
                            </ul>

                            <h2>4. Intellectual Property</h2>
                            <p>
                                All content on this website — including text, graphics, logos, images, audio
                                clips, and software — is the property of Explore S Research Solutions or its
                                content suppliers and is protected by applicable Indian and international
                                intellectual property laws.
                            </p>
                            <ul>
                                <li>
                                    You may not reproduce, distribute, modify, or create derivative works from
                                    any content on this website without our express written permission.
                                </li>
                                <li>
                                    Research deliverables created specifically for a Client are transferred to
                                    the Client upon full payment, subject to the terms of the applicable service
                                    agreement.
                                </li>
                            </ul>

                            <h2>5. User Responsibilities</h2>
                            <p>
                                By using our website and services, you agree to:
                            </p>
                            <ul>
                                <li>
                                    Provide accurate, current, and complete information when submitting enquiries
                                    or entering into a service agreement.
                                </li>
                                <li>
                                    Use our website and services only for lawful purposes and in a manner that
                                    does not infringe the rights of others.
                                </li>
                                <li>
                                    Refrain from uploading or transmitting any content that is unlawful,
                                    defamatory, obscene, or otherwise objectionable.
                                </li>
                                <li>
                                    Not attempt to gain unauthorised access to any part of our website, servers,
                                    or related systems.
                                </li>
                            </ul>

                            <h2>6. Limitation of Liability</h2>
                            <p>
                                To the fullest extent permitted by applicable law, Explore S Research Solutions
                                shall not be liable for any indirect, incidental, special, consequential, or
                                punitive damages — including loss of profits, data, goodwill, or business
                                opportunities — arising out of or in connection with your use of our website or
                                services, even if we have been advised of the possibility of such damages.
                            </p>
                            <p>
                                Our total aggregate liability for any claim arising under these Terms shall not
                                exceed the amount paid by you to us in the three (3) months preceding the event
                                giving rise to the claim.
                            </p>

                            <h2>7. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party websites for your convenience and
                                information. These links do not constitute an endorsement by Explore S Research
                                Solutions of those websites or their content. We have no control over third-party
                                websites and accept no responsibility for them or for any loss or damage that may
                                arise from your use of them.
                            </p>

                            <h2>8. Changes to Terms</h2>
                            <p>
                                We reserve the right to update or modify these Terms &amp; Conditions at any time
                                without prior notice. The revised Terms will be effective from the date they are
                                posted on this page with an updated "Last Updated" date. We encourage you to
                                review these Terms periodically to stay informed of any changes.
                            </p>

                            <h2>9. Governing Law</h2>
                            <p>
                                These Terms &amp; Conditions shall be governed by and construed in accordance with
                                the laws of India. Any disputes arising out of or in connection with these Terms
                                shall be subject to the exclusive jurisdiction of the courts located in Haryana,
                                India.
                            </p>

                            <h2>10. Contact Us</h2>
                            <p>
                                If you have any questions about these Terms &amp; Conditions, please contact us:
                            </p>
                            <ul>
                                <li>
                                    <strong>Email:</strong>{' '}
                                    <a href="mailto:support@exploresresearchsolutions.in">
                                        support@exploresresearchsolutions.in
                                    </a>
                                </li>
                                <li>
                                    <strong>Phone:</strong>{' '}
                                    <a href="tel:+919289441168">+91-9289441168</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </section>

                <ScrollToTop scrollClassName="react__up___scroll" />
            </div>
        </div>

        <Footer footerLogo={footerLogo} />
    </>
);

export default Terms;
