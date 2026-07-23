import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Footer = (props) => {
    return (
        <footer id="react-footer" className="es-footer">
            <div className="es-footer__main">
                <div className="container">
                    <div className="es-footer__grid">

                        {/* Column 1 — Brand */}
                        <div className="es-footer__col">
                            <div className="es-footer__logo">
                                <img src={logo} alt="Explore S Research Solutions" />
                            </div>
                            <p className="es-footer__tagline">
                                Explore S Research Solutions is a premier global education and academic
                                assistance platform, empowering scholars, professionals and institutions
                                with research support, mentorship and future-ready skills.
                            </p>
                            <p className="es-footer__office"><strong>Head Office:</strong> Explore S Solutions Private Limited</p>
                            <ul className="es-footer__contact">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    <span aria-hidden="true">🇮🇳</span>
                                    <a href="tel:+919289441168" aria-label="Call our India office">+91-9289441168</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    <span aria-hidden="true">🇫🇯</span>
                                    <a href="tel:+6799404027" aria-label="Call our Fiji office">+679 9404027</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    <a href="mailto:support@exploresresearchsolutions.in">support@exploresresearchsolutions.in</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Second Floor Plot Number 4, Minarch Tower, Sector 44, Gurgaon, Haryana</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Plot No. 21 &amp; 21A, Noida-Greater Noida Expressway, Sector 142, Noida, Uttar Pradesh 201304</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Raviravi Ba, P.O. Box 196, Ba, Fiji</span>
                                </li>
                            </ul>
                            {/* Map embed — client can replace with their exact Google Maps embed link */}
                            <div className="es-footer__map">
                                <iframe
                                    src="https://www.google.com/maps?q=Minarch%20Tower%20Sector%2044%20Gurgaon%20Haryana&output=embed"
                                    title="Explore S location"
                                    loading="lazy"
                                    style={{ border: 0 }}
                                    aria-label="Office location map"
                                    allowFullScreen=""
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Column 2 — Services */}
                        <div className="es-footer__col">
                            <h3 className="es-footer__title">Services</h3>
                            <ul className="es-footer__links">
                                <li><Link to="/services">PhD Assistance</Link></li>
                                <li><Link to="/services">Thesis &amp; Dissertation Writing</Link></li>
                                <li><Link to="/services">Research Paper Writing</Link></li>
                                <li><Link to="/services">Journal Publication</Link></li>
                                <li><Link to="/services">Plagiarism Removal</Link></li>
                                <li><Link to="/services">AI &amp; Machine Learning</Link></li>
                                <li><Link to="/services">Data Science Training</Link></li>
                                <li><Link to="/services">Digital Marketing</Link></li>
                                <li><Link to="/services">Skill Development</Link></li>
                            </ul>
                        </div>

                        {/* Column 3 — Feature Links */}
                        <div className="es-footer__col">
                            <h3 className="es-footer__title">Feature Links</h3>
                            <ul className="es-footer__links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">Our Services</Link></li>
                                <li><Link to="/blogs">Knowledge Hub</Link></li>
                                <li><Link to="/blogs">Media &amp; Spotlight</Link></li>
                                <li><Link to="/about">Our Experts</Link></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                                <li><Link to="/career">Careers</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Column 4 — Quick Links */}
                        <div className="es-footer__col">
                            <h3 className="es-footer__title">Quick Links</h3>
                            <ul className="es-footer__links">
                                <li><Link to="/become-a-partner">Become a Partner</Link></li>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link to="/disclaimer">Disclaimer</Link></li>
                                <li><Link to="/terms">Terms &amp; Conditions</Link></li>
                                <li><Link to="/refund-policy">Refund Policy</Link></li>
                                <li><Link to="/academic-integrity">Academic Integrity Policy</Link></li>
                                <li><Link to="/contact">Client Connect</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="es-footer__bottom">
                <div className="container es-footer__bottom-inner">
                    <p className="es-footer__copyright">
                        Copyright &copy; 2026. <Link to="/">Explore S Solutions Private Limited</Link>. All Rights Reserved.
                    </p>
                    <div className="es-footer__legal-links">
                        <Link to="/contact">FAQ's</Link>
                        <span aria-hidden="true">·</span>
                        <a href="/sitemap.xml">Sitemap</a>
                        <span aria-hidden="true">·</span>
                        <Link to="/disclaimer">Disclaimer</Link>
                        <span aria-hidden="true">·</span>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <span aria-hidden="true">·</span>
                        <Link to="/terms">Terms &amp; Conditions</Link>
                    </div>
                    <div className="es-footer__social">
                        <span className="es-footer__follow">Follow us</span>
                        <a href="#" aria-label="Facebook" className="es-footer__social-btn es-footer__social-btn--facebook">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram" className="es-footer__social-btn es-footer__social-btn--instagram"> {/* client to add real URL */}
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn" className="es-footer__social-btn es-footer__social-btn--linkedin">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="YouTube" className="es-footer__social-btn es-footer__social-btn--youtube"> {/* client to add real URL */}
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="X (Twitter)" className="es-footer__social-btn es-footer__social-btn--x">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
