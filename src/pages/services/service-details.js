import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import ScrollToTop from '../../components/ScrollTop';
import servicesData from '../../data/Services.json';

import footerLogo from '../../assets/images/logos/footer-logo.png';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    
    // Find the service from the data
    const allServices = [...servicesData.mainServices, ...servicesData.detailedOfferings];
    const service = allServices.find(s => s.id === serviceId) || allServices[0]; // Fallback to first service
    
    // Find related services (excluding current service)
    const relatedServices = allServices.filter(s => s.id !== serviceId).slice(0, 3);

    // Dynamic content based on service type
    const getServiceContent = (serviceId) => {
        const contentMap = {
            'paper-writing': {
                introduction: {
                    title: "Paper Writing Assistance – Learn, Grow & Excel!",
                    description: "Writing a high-quality academic paper requires in-depth research, strong analytical skills, and precise formatting. Whether you are a student, researcher, or professional, our Paper Writing Assistance service is designed to help you craft well-structured, original, and compelling papers that meet academic and professional standards."
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
                    title: "Why Choose Our Paper Writing Assistance?",
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
                    title: "Get Professional Paper Writing Assistance Today!",
                    text: "Let us help you achieve academic and professional excellence with a well-researched, high-quality paper. Contact us now to discuss your requirements and get expert guidance tailored to your needs!",
                    button: {
                        text: "Contact us now"
                    }
                }
            },
            'thesis-writing': {
                introduction: {
                    title: "Thesis Writing Assistance – Your Path to Academic Success!",
                    description: "Completing a thesis is a significant milestone in your academic journey. Our comprehensive Thesis Writing Assistance service provides expert guidance, research support, and professional writing assistance to help you create a compelling, well-structured thesis that meets the highest academic standards."
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
                            title: "Thesis Writing & Structuring",
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
                    title: "Why Choose Our Thesis Writing Assistance?",
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
                    text: "Don't let thesis writing challenges hold you back. Our expert team is here to guide you through every step of your thesis journey, from research design to final submission. Contact us today!",
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

    return (
        <>
            <Header
                parentMenu='home'
                topbarEnable='enable'
            />

            <div className="react-wrapper">
                <div className="react-wrapper-inner">
                    
                    <Breadcrumb pageTitle={service.title} />

                    <div className="service-details__area pt---100 pb---120">
                        <div className="container">
                            {/* Hero Section */}
                            <div className="service-hero mb---60">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <h1 className="hero-title mb---30">{serviceContent.introduction.title}</h1>
                                        <p className="hero-description">{serviceContent.introduction.description}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="hero-image">
                                            <img src={service.image} alt={service.title} className="w-100 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="service-details__content">
                                        {/* What We Offer Section */}
                                        <div className="service-offerings mb---60">
                                            <h2 className="section-title mb---40">{serviceContent.offerings.title}</h2>
                                            <div className="offerings-grid">
                                                {serviceContent.offerings.services.map((offering, index) => (
                                                    <div key={index} className="offering-item mb---30">
                                                        <div className="offering-icon">
                                                            <div className="icon-number">{index + 1}</div>
                                                        </div>
                                                        <div className="offering-content">
                                                            <h4 className="offering-title">{offering.title}</h4>
                                                            <p className="offering-description">{offering.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Types of Papers/Service Areas Section */}
                                        <div className="service-types mb---60">
                                            <h2 className="section-title mb---40">{serviceContent.paperTypes.title}</h2>
                                            <div className="types-grid">
                                                {serviceContent.paperTypes.types.map((type, index) => (
                                                    <div key={index} className="type-card">
                                                        <h5 className="type-name">{type.name}</h5>
                                                        <p className="type-description">{type.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Why Choose Us Section */}
                                        <div className="why-choose-us mb---60">
                                            <h2 className="section-title mb---40">{serviceContent.whyChooseUs.title}</h2>
                                            <div className="reasons-grid">
                                                {serviceContent.whyChooseUs.reasons.map((reason, index) => (
                                                    <div key={index} className="reason-item">
                                                        <div className="reason-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                                <polyline points="22,4 12,14.01 9,11.01"></polyline>
                                                            </svg>
                                                        </div>
                                                        <div className="reason-content">
                                                            <h5 className="reason-title">{reason.title}</h5>
                                                            <p className="reason-description">{reason.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4">
                                    <div className="service-sidebar">
                                        <div className="sidebar-widget mb---40">
                                            <h3 className="widget-title mb---25">Service Overview</h3>
                                            <div className="service-info">
                                                <div className="info-item">
                                                    <span className="label">Service Type:</span>
                                                    <span className="value">Professional</span>
                                                </div>
                                                <div className="info-item">
                                                    <span className="label">Delivery Time:</span>
                                                    <span className="value">As per requirement</span>
                                                </div>
                                                <div className="info-item">
                                                    <span className="label">Support:</span>
                                                    <span className="value">24/7 Available</span>
                                                </div>
                                                <div className="info-item">
                                                    <span className="label">Quality:</span>
                                                    <span className="value">100% Guaranteed</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="sidebar-widget mb---40">
                                            <h3 className="widget-title mb---25">Quick Contact</h3>
                                            <div className="contact-info">
                                                <div className="contact-item">
                                                    <div className="contact-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="contact-text">
                                                        <span className="label">Phone</span>
                                                        <span className="value">+1 (555) 123-4567</span>
                                                    </div>
                                                </div>
                                                <div className="contact-item">
                                                    <div className="contact-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                            <polyline points="22,6 12,13 2,6"></polyline>
                                                        </svg>
                                                    </div>
                                                    <div className="contact-text">
                                                        <span className="label">Email</span>
                                                        <span className="value">info@company.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="sidebar-widget">
                                            <h3 className="widget-title mb---25">Need Help?</h3>
                                            <p className="help-text mb---20">
                                                Have questions about this service? Our experts are here to help you.
                                            </p>
                                            <Link to="/contact" className="help-btn">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* CTA Section - Full Width */}
                            <div className="service-cta mt---80">
                                <div className="cta-content text-center">
                                    <h3 className="cta-title mb---20">{serviceContent.cta.title}</h3>
                                    <p className="cta-text mb---30">{serviceContent.cta.text}</p>
                                    <Link to="/contact" className="contact-btn">
                                        {serviceContent.cta.button.text}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            
                            {relatedServices.length > 0 && (
                                <div className="related-services mt---80">
                                    <h3 className="section-title mb---40">Related Services</h3>
                                    <div className="row">
                                        {relatedServices.map((relatedService, index) => (
                                            <div key={index} className="col-lg-4 col-md-6 mb---30">
                                                <div className="related-service-card">
                                                    <div className="service-image">
                                                        <img src={relatedService.image} alt={relatedService.title} />
                                                    </div>
                                                    <div className="service-content">
                                                        <h4 className="service-title">{relatedService.title}</h4>
                                                        <p className="service-description">{relatedService.description}</p>
                                                        <Link to={`/service/${relatedService.id || index}`} className="view-details-btn">
                                                            View Details
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                <polyline points="12 5 19 12 12 19"></polyline>
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
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
}

export default ServiceDetails;
