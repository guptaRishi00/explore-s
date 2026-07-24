import React, { useRef, useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import ResponsiveImage from '../../components/ResponsiveImage';
import Seo from '../../components/Seo';
import { fadeUp } from '../../utils/animations';
import servicesData from '../../data/Services.json';

import footerLogo from '../../assets/logo.png';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const rootRef = useRef(null);

    // Find the service from the data
    const allServices = [...servicesData.mainServices, ...servicesData.detailedOfferings];
    const service = allServices.find(s => s.id === serviceId) || allServices[0]; // Fallback to first service

    // Find related services (excluding current service)
    const relatedServices = allServices.filter(s => s.id !== serviceId).slice(0, 3);

    useLayoutEffect(() => {
        // Guard: ScrollTrigger needs window.matchMedia — skip in tests / SSR
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
        const ctx = fadeUp(rootRef.current, '[data-svc-rise]', { stagger: 0.1 });
        return () => ctx?.revert?.();
    }, [serviceId]);

    // Dynamic content based on service type
    const getServiceContent = (serviceId) => {
        const contentMap = {
            'paper-writing': {
                introduction: {
                    title: "Research Paper Guidance & Mentorship – Learn, Grow & Excel!",
                    description: "Getting your research paper right requires in-depth expertise, strong analytical skills, and precise formatting. Whether you are a student, researcher, or professional, our Research Paper Guidance & Mentorship service is designed to help you craft well-structured, original, and compelling papers that meet academic and professional standards."
                },
                offerings: {
                    title: "What We Offer",
                    services: [
                        {
                            title: "Topic Selection & Research Proposal",
                            description: "If you are unsure about the right topic for your paper, our experts help you choose a relevant, research-worthy subject. We also assist in developing a well-structured research proposal to outline your study's objectives and methodology."
                        },
                        {
                            title: "Comprehensive Research & Literature Review",
                            description: "A strong academic paper requires extensive research and analysis of credible sources. We conduct a thorough literature review to provide a solid foundation for your paper, ensuring relevance and scholarly credibility."
                        },
                        {
                            title: "Paper Structuring & Writing",
                            description: "We assist in writing well-organized academic papers with a clear introduction, body, and conclusion. Our writing process ensures logical flow, coherence, and clarity while maintaining an academic tone."
                        },
                        {
                            title: "Data Collection & Analysis",
                            description: "For research-based papers, we help with data collection, survey structuring, and statistical analysis using tools like SPSS, STATA, and Excel. Our experts provide detailed interpretations of findings to strengthen your paper's argument."
                        }
                    ]
                },
                paperTypes: {
                    title: "Types of Papers We Assist With",
                    types: [
                        {
                            name: "Essays & Assignments",
                            description: "Well-researched, structured, and argument-driven papers for academic success."
                        },
                        {
                            name: "Research Papers",
                            description: "Data-driven and analytically strong papers for publication and coursework."
                        },
                        {
                            name: "Case Studies",
                            description: "In-depth analysis of real-world scenarios with critical insights."
                        },
                        {
                            name: "Term Papers",
                            description: "Comprehensive academic papers covering semester coursework."
                        },
                        {
                            name: "Conference Papers",
                            description: "Professionally written papers prepared for academic conferences and symposiums."
                        },
                        {
                            name: "Technical & Business Reports",
                            description: "Formal reports with detailed analysis and professional formatting."
                        }
                    ]
                },
                whyChooseUs: {
                    title: "Why Choose Our Research Paper Guidance?",
                    reasons: [
                        {
                            title: "Subject-Matter Experts",
                            description: "Writers with expertise in various academic disciplines."
                        },
                        {
                            title: "Customized Support",
                            description: "Tailored assistance based on your specific guidelines."
                        },
                        {
                            title: "100% Plagiarism-Free Work",
                            description: "Guaranteed originality with thorough plagiarism checks."
                        },
                        {
                            title: "On-Time Delivery",
                            description: "Timely submission to meet your academic or professional deadlines."
                        },
                        {
                            title: "Affordable & Confidential",
                            description: "High-quality service at competitive prices with full confidentiality."
                        }
                    ]
                },
                cta: {
                    title: "Get Professional Research Paper Guidance Today!",
                    text: "Let us help you achieve academic and professional excellence with a well-researched, high-quality paper. Contact us now to discuss your requirements and get expert guidance tailored to your needs!",
                    button: {
                        text: "Contact us now"
                    }
                }
            },
            'thesis-writing': {
                introduction: {
                    title: "Thesis Guidance & Consultation – Your Path to Academic Success!",
                    description: "Completing a thesis is a significant milestone in your academic journey. Our comprehensive Thesis Guidance & Consultation service provides expert guidance, research support, and mentorship to help you create a compelling, well-structured thesis that meets the highest academic standards."
                },
                offerings: {
                    title: "What We Offer",
                    services: [
                        {
                            title: "Research Design & Methodology",
                            description: "We help you design robust research methodologies and select appropriate research methods for your thesis, ensuring scientific rigor and validity."
                        },
                        {
                            title: "Literature Review & Gap Analysis",
                            description: "Comprehensive literature review to identify research gaps and establish the foundation for your thesis contribution to the field."
                        },
                        {
                            title: "Data Collection & Analysis",
                            description: "Expert assistance in data collection, statistical analysis, and interpretation to support your thesis arguments with solid evidence."
                        },
                        {
                            title: "Thesis Guidance & Structuring",
                            description: "Professional writing support with proper academic structure, clear arguments, and compelling conclusions that meet university requirements."
                        }
                    ]
                },
                paperTypes: {
                    title: "Types of Thesis We Support",
                    types: [
                        {
                            name: "Master's Thesis",
                            description: "Comprehensive research projects for master's degree completion."
                        },
                        {
                            name: "PhD Dissertation",
                            description: "Original research contributions for doctoral degree requirements."
                        },
                        {
                            name: "Research Proposals",
                            description: "Detailed proposals outlining research objectives and methodology."
                        },
                        {
                            name: "Literature Reviews",
                            description: "Critical analysis of existing research in your field."
                        },
                        {
                            name: "Methodology Chapters",
                            description: "Detailed research design and methodology sections."
                        },
                        {
                            name: "Results & Discussion",
                            description: "Analysis and interpretation of research findings."
                        }
                    ]
                },
                whyChooseUs: {
                    title: "Why Choose Our Thesis Guidance & Consultation?",
                    reasons: [
                        {
                            title: "PhD-Level Expertise",
                            description: "Writers with advanced degrees in various academic fields."
                        },
                        {
                            title: "Research Methodology Specialists",
                            description: "Experts in quantitative and qualitative research methods."
                        },
                        {
                            title: "Academic Standards Compliance",
                            description: "Ensures your thesis meets university and academic requirements."
                        },
                        {
                            title: "Statistical Analysis Support",
                            description: "Professional assistance with data analysis and interpretation."
                        },
                        {
                            title: "Plagiarism-Free Guarantee",
                            description: "Original content with comprehensive plagiarism checking."
                        }
                    ]
                },
                cta: {
                    title: "Start Your Thesis Journey with Expert Guidance!",
                    text: "Don't let thesis challenges hold you back. Our expert team is here to guide you through every step of your thesis journey, from research design to final submission. Contact us today!",
                    button: {
                        text: "Get Started Today"
                    }
                }
            }
        };

        return contentMap[serviceId] || {
            introduction: {
                title: `${service.title} – Professional Academic Support`,
                description: service.description
            },
            offerings: {
                title: "What We Offer",
                services: [
                    {
                        title: "Expert Consultation",
                        description: "Professional guidance from experienced academic experts in your field."
                    },
                    {
                        title: "Comprehensive Support",
                        description: "End-to-end assistance throughout your academic project."
                    },
                    {
                        title: "Quality Assurance",
                        description: "Rigorous quality checks to ensure academic excellence."
                    },
                    {
                        title: "Timely Delivery",
                        description: "Commitment to meeting your deadlines and requirements."
                    }
                ]
            },
            paperTypes: {
                title: "Our Service Areas",
                types: [
                    {
                        name: "Academic Writing",
                        description: "Professional academic writing services for all levels."
                    },
                    {
                        name: "Research Support",
                        description: "Comprehensive research assistance and guidance."
                    },
                    {
                        name: "Editing & Proofreading",
                        description: "Professional editing and proofreading services."
                    },
                    {
                        name: "Consultation",
                        description: "Expert consultation and academic guidance."
                    }
                ]
            },
            whyChooseUs: {
                title: "Why Choose Our Services?",
                reasons: [
                    {
                        title: "Expert Team",
                        description: "Qualified professionals with extensive academic experience."
                    },
                    {
                        title: "Quality Focus",
                        description: "Commitment to delivering high-quality academic work."
                    },
                    {
                        title: "Timely Delivery",
                        description: "Reliable service that respects your deadlines."
                    },
                    {
                        title: "Affordable Pricing",
                        description: "Competitive rates for professional academic services."
                    },
                    {
                        title: "24/7 Support",
                        description: "Round-the-clock customer support and assistance."
                    }
                ]
            },
            cta: {
                title: "Get Professional Academic Support Today!",
                text: "Let our expert team help you achieve academic excellence. Contact us now to discuss your requirements and get started on your academic journey!",
                button: {
                    text: "Contact Us Now"
                }
            }
        };
    };

    const serviceContent = getServiceContent(serviceId);

    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "Organization",
            "name": "Explore S Research Solutions"
        },
        "areaServed": "IN"
    };

    return (
        <>
            <Seo
                title={`${service.title} | Explore S Research Solutions`}
                description={service.description}
                path={`/service/${serviceId}`}
                jsonLd={serviceJsonLd}
            />
            <Header
                parentMenu='home'
                topbarEnable='enable'
            />

            <div className="react-wrapper">
                <div className="react-wrapper-inner">

                    <div className="service-details__area" ref={rootRef}>

                        {/* ── 1. HERO — owns the single h1 ── */}
                        <section className="svc-hero" data-svc-rise>
                            <div className="container">
                                <div className="svc-hero__grid">

                                    {/* Left: copy + CTAs */}
                                    <div className="svc-hero__left">
                                        <span className="es-eyebrow">Academic Service</span>

                                        <h1 className="svc-hero__title">
                                            {serviceContent.introduction.title}
                                        </h1>

                                        <p className="svc-hero__lead">
                                            {serviceContent.introduction.description}
                                        </p>

                                        {/* Trust chips */}
                                        <div className="svc-trust-chips" aria-label="Service guarantees">
                                            <span className="svc-trust-chip">
                                                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                Plagiarism-free
                                            </span>
                                            <span className="svc-trust-chip">
                                                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                On-time delivery
                                            </span>
                                            <span className="svc-trust-chip">
                                                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                Expert-led
                                            </span>
                                        </div>

                                        {/* Action row */}
                                        <div className="svc-hero__actions">
                                            <Link to="/contact" className="es-btn es-btn--primary">
                                                Book a consult
                                                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>
                                            </Link>
                                            <a href="tel:+91-9289441168" className="svc-btn-ghost">
                                                Call us
                                            </a>
                                        </div>
                                    </div>

                                    {/* Right: image with floating badge */}
                                    <div className="svc-hero__right">
                                        <div className="svc-hero__frame">
                                            <ResponsiveImage
                                                src={service.image}
                                                alt={service.title}
                                                className="svc-hero__img"
                                            />
                                            <div className="svc-hero__badge" aria-hidden="true">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                                </svg>
                                                100% Confidential
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                        {/* ── 2. BODY: main content + sticky sidebar ── */}
                        <section className="es-section svc-body-section">
                            <div className="container">
                                <div className="svc-layout">

                                    {/* Main content column */}
                                    <div className="svc-main">

                                        {/* What We Offer */}
                                        <div className="svc-block" data-svc-rise>
                                            <h2 className="svc-h2">{serviceContent.offerings.title}</h2>
                                            <div className="svc-offerings-grid">
                                                {serviceContent.offerings.services.map((offering, index) => (
                                                    <div key={index} className="svc-offering-card">
                                                        <span className="svc-offering-num" aria-hidden="true">
                                                            {String(index + 1).padStart(2, '0')}
                                                        </span>
                                                        <h3 className="svc-offering-title">{offering.title}</h3>
                                                        <p className="svc-offering-desc">{offering.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Service / Paper Types */}
                                        <div className="svc-block" data-svc-rise>
                                            <h2 className="svc-h2">{serviceContent.paperTypes.title}</h2>
                                            <div className="svc-types-grid">
                                                {serviceContent.paperTypes.types.map((type, index) => (
                                                    <div key={index} className="svc-type-tile">
                                                        <strong className="svc-type-name">{type.name}</strong>
                                                        <p className="svc-type-desc">{type.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Why Choose Us */}
                                        <div className="svc-block" data-svc-rise>
                                            <h2 className="svc-h2">{serviceContent.whyChooseUs.title}</h2>
                                            <div className="svc-reasons-grid">
                                                {serviceContent.whyChooseUs.reasons.map((reason, index) => (
                                                    <div key={index} className="svc-reason-card">
                                                        <span className="svc-reason-icon" aria-hidden="true">
                                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                                <polyline points="20 6 9 17 4 12" />
                                                            </svg>
                                                        </span>
                                                        <div className="svc-reason-body">
                                                            <h4 className="svc-reason-title">{reason.title}</h4>
                                                            <p className="svc-reason-desc">{reason.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>

                                    {/* Sticky sidebar */}
                                    <aside className="svc-sidebar" aria-label="Service information">

                                        {/* CTA card */}
                                        <div className="svc-sidebar__cta">
                                            <p className="svc-sidebar__cta-label">Ready to get started?</p>
                                            <p className="svc-sidebar__cta-headline">Start your project today</p>
                                            <Link to="/contact" className="svc-sidebar__cta-btn">
                                                Get a Free Quote
                                                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>
                                            </Link>
                                        </div>

                                        {/* Service Overview card */}
                                        <div className="svc-sidebar__widget">
                                            <h3 className="svc-sidebar__widget-title">Service Overview</h3>
                                            <ul className="svc-info-list">
                                                <li className="svc-info-item">
                                                    <span className="svc-info-label">Service Type</span>
                                                    <span className="svc-info-value">Professional</span>
                                                </li>
                                                <li className="svc-info-item">
                                                    <span className="svc-info-label">Delivery Time</span>
                                                    <span className="svc-info-value">As per requirement</span>
                                                </li>
                                                <li className="svc-info-item">
                                                    <span className="svc-info-label">Support</span>
                                                    <span className="svc-info-value">24/7 Available</span>
                                                </li>
                                                <li className="svc-info-item">
                                                    <span className="svc-info-label">Quality</span>
                                                    <span className="svc-info-value">100% Guaranteed</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Quick Contact card */}
                                        <div className="svc-sidebar__widget">
                                            <h3 className="svc-sidebar__widget-title">Quick Contact</h3>
                                            <div className="svc-contact-list">
                                                <a href="tel:+91-9289441168" className="svc-contact-item">
                                                    <span className="svc-contact-icon" aria-hidden="true">
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                                        </svg>
                                                    </span>
                                                    <span className="svc-contact-text">
                                                        <span className="svc-contact-label">Phone</span>
                                                        <span className="svc-contact-value">+91-9289441168</span>
                                                    </span>
                                                </a>
                                                <a href="mailto:support@exploresresearchsolutions.in" className="svc-contact-item">
                                                    <span className="svc-contact-icon" aria-hidden="true">
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                            <polyline points="22,6 12,13 2,6" />
                                                        </svg>
                                                    </span>
                                                    <span className="svc-contact-text">
                                                        <span className="svc-contact-label">Email</span>
                                                        <span className="svc-contact-value">support@exploresresearchsolutions.in</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>

                                    </aside>
                                </div>
                            </div>
                        </section>

                        {/* ── 3. FULL-WIDTH CTA BAND ── */}
                        <div className="svc-cta-band" data-svc-rise>
                            <div className="container">
                                <div className="svc-cta-band__panel">
                                    <h2 className="svc-cta-band__title">{serviceContent.cta.title}</h2>
                                    <p className="svc-cta-band__text">{serviceContent.cta.text}</p>
                                    <Link to="/contact" className="svc-cta-band__btn">
                                        {serviceContent.cta.button.text}
                                        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ── 4. RELATED SERVICES ── */}
                        {relatedServices.length > 0 && (
                            <section className="es-section svc-related-section" data-svc-rise>
                                <div className="container">
                                    <h2 className="svc-h2 svc-related-heading">Related Services</h2>
                                    <div className="svc-related-grid">
                                        {relatedServices.map((relatedService, index) => (
                                            <div key={index} className="es-svc-card">
                                                <div className="es-svc-card__media">
                                                    <ResponsiveImage
                                                        src={relatedService.image}
                                                        alt={relatedService.title}
                                                        className="es-svc-card__img"
                                                    />
                                                </div>
                                                <div className="es-svc-card__body">
                                                    <h3 className="es-card__title">{relatedService.title}</h3>
                                                    <p className="es-card__desc">{relatedService.description}</p>
                                                    <Link to={`/service/${relatedService.id}`} className="es-card__link">
                                                        View details
                                                        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                                                            <path d="M3 8h10M9 4l4 4-4 4" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                    </div>

                    {/* scrolltop-start */}
                    <ScrollToTop
                        scrollClassName="react__up___scroll"
                    />
                    {/* scrolltop-end */}
                </div>
            </div>

            <Footer
                footerLogo={footerLogo}
            />
        </>
    );
};

export default ServiceDetails;
