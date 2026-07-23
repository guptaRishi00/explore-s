import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import Seo from '../../components/Seo';
import footerLogo from '../../assets/logo.png';

const PrivacyPolicy = () => (
    <>
        <Seo
            title="Privacy Policy | Explore S Research Solutions"
            description="Read the Privacy Policy for Explore S Research Solutions. Learn how we collect, use, and protect your personal information."
            path="/privacy-policy"
            keywords="privacy policy, Explore S Research Solutions, data protection, personal information"
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
                            Privacy <span className="es-svc-banner__accent">Policy</span>
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

                            <h2>1. Introduction</h2>
                            <p>
                                Welcome to Explore S Research Solutions ("we," "us," or "our"). We are committed to
                                protecting your personal information and your right to privacy. This Privacy Policy
                                explains how we collect, use, disclose, and safeguard your information when you visit
                                our website or use our academic research support services.
                            </p>
                            <p>
                                Please read this policy carefully. If you disagree with its terms, please discontinue
                                use of our site. We reserve the right to make changes to this policy at any time; any
                                updates will be reflected by a revised "Last Updated" date.
                            </p>

                            <h2>2. Information We Collect</h2>
                            <p>We may collect the following categories of personal information:</p>
                            <ul>
                                <li>
                                    <strong>Contact Form Data:</strong> Your name, email address, and phone number
                                    when you submit an enquiry through our contact form.
                                </li>
                                <li>
                                    <strong>Payment Information:</strong> Transaction details processed securely
                                    through Razorpay. We do not store your card or banking credentials on our servers.
                                </li>
                                <li>
                                    <strong>Usage Data:</strong> Pages visited, time spent on pages, referring URLs,
                                    browser type, and device information collected automatically via analytics tools.
                                </li>
                                <li>
                                    <strong>Chat Data:</strong> Messages exchanged through our live-chat widget
                                    (Tawk.to) if you initiate a conversation.
                                </li>
                            </ul>

                            <h2>3. How We Use Your Information</h2>
                            <p>We use the information we collect for the following purposes:</p>
                            <ul>
                                <li>
                                    <strong>Service Delivery:</strong> To process your enquiry, deliver the requested
                                    research support services, and fulfil your order.
                                </li>
                                <li>
                                    <strong>Communication:</strong> To respond to your messages, send service updates,
                                    and follow up on your enquiries.
                                </li>
                                <li>
                                    <strong>Website Improvement:</strong> To analyse usage trends and improve the
                                    content, structure, and performance of our website.
                                </li>
                                <li>
                                    <strong>Legal Compliance:</strong> To comply with applicable laws and resolve any
                                    disputes that may arise.
                                </li>
                            </ul>

                            <h2>4. Cookies</h2>
                            <p>
                                Our website uses cookies — small text files placed on your device — to enhance your
                                browsing experience and gather analytical data. We use two categories of cookies:
                            </p>
                            <ul>
                                <li>
                                    <strong>Functional Cookies:</strong> Essential for core site features such as
                                    navigation and live-chat functionality.
                                </li>
                                <li>
                                    <strong>Analytics Cookies:</strong> Used by Google Analytics to help us understand
                                    visitor behaviour in aggregate, anonymised form.
                                </li>
                            </ul>
                            <p>
                                You can disable cookies through your browser settings at any time. Note that
                                disabling certain cookies may affect the functionality of parts of this website.
                            </p>

                            <h2>5. Third-Party Services</h2>
                            <p>
                                We engage the following third-party providers to deliver and support our services.
                                Each provider operates under its own privacy policy:
                            </p>
                            <ul>
                                <li>
                                    <strong>Razorpay</strong> — Payment processing. Your financial data is handled
                                    exclusively by Razorpay in accordance with PCI-DSS standards.
                                </li>
                                <li>
                                    <strong>EmailJS</strong> — Delivery of contact-form submissions to our inbox.
                                </li>
                                <li>
                                    <strong>Tawk.to</strong> — Live-chat support widget embedded on our website.
                                </li>
                                <li>
                                    <strong>Google Analytics</strong> — Website traffic and behaviour analytics.
                                </li>
                                <li>
                                    <strong>Google Maps</strong> — Embedded map for displaying our office location.
                                </li>
                            </ul>
                            <p>
                                We are not responsible for the privacy practices of these third parties and encourage
                                you to review their respective privacy policies.
                            </p>

                            <h2>6. Data Security</h2>
                            <p>
                                We implement reasonable administrative, technical, and physical safeguards designed to
                                protect your personal information against unauthorised access, disclosure, alteration,
                                or destruction. All data transmitted between your browser and our website is
                                encrypted via HTTPS/TLS.
                            </p>
                            <p>
                                However, no method of transmission over the internet or electronic storage is 100%
                                secure. While we strive to protect your personal information, we cannot guarantee its
                                absolute security.
                            </p>

                            <h2>7. Your Rights</h2>
                            <p>
                                Subject to applicable law, you have the right to:
                            </p>
                            <ul>
                                <li>
                                    <strong>Access</strong> the personal information we hold about you.
                                </li>
                                <li>
                                    <strong>Correct</strong> any inaccurate or incomplete personal information.
                                </li>
                                <li>
                                    <strong>Delete</strong> your personal information, where we are not required by
                                    law to retain it.
                                </li>
                                <li>
                                    <strong>Object</strong> to or restrict certain types of processing of your data.
                                </li>
                            </ul>
                            <p>
                                To exercise any of these rights, please contact us using the details below. We will
                                respond to your request within a reasonable timeframe.
                            </p>

                            <h2>8. Contact Us</h2>
                            <p>
                                If you have any questions, concerns, or requests relating to this Privacy Policy,
                                please reach out to us:
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

export default PrivacyPolicy;
