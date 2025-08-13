import React from 'react';
import contactData from '../../data/Contact.json';

const ContactDetailsSection = () => {
    const { companyName, address, phone, email } = contactData;

    return (
        <div className="contact-details__area">
            <div className="contact-content wow animate__fadeInRight" data-wow-duration="0.5s">
                <div className="section-title mb---50">
                    <h2 className="title">Get in <span style={{color: '#3270FC'}}>Touch</span></h2>
                    <div className="title-line"></div>
                    <p className="subtitle">We'd love to hear from you. Contact us for any inquiries or support.</p>
                </div>
                
                <div className="contact-info">
                    <div className="info-item">
                        <div className="info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div className="info-content">
                            <h4>{address.label}</h4>
                            <p>{address.line1}</p>
                            <p>{address.area}</p>
                            <p>{address.city}, {address.state}</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <div className="info-content">
                            <h4>{phone.label}</h4>
                            <p><a href={`tel:${phone.number}`}>{phone.number}</a></p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div className="info-content">
                            <h4>{email.label}</h4>
                            <p><a href={`mailto:${email.address}`}>{email.address}</a></p>
                        </div>
                    </div>
                </div>

                <div className="contact-cta mt---40">
                    <h3>Ready to Get Started?</h3>
                    <p>Contact us today to discuss your research needs and how we can help you achieve academic success.</p>
                    <div className="cta-buttons">
                        <a href={`tel:${phone.number}`} className="btn-primary">Call Now</a>
                        <a href={`mailto:${email.address}`} className="btn-secondary">Send Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactDetailsSection;
