import React from 'react';

const ContactUs = () => {

    return (
        <>
            <div className="react-contact__area contact__area pt---120 pb---120 graybg-home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow animate__fadeInUp" data-wow-duration="0.3s">
                            <div className="contact-content">
                                <h2 className="contact-title">
                                    Contact <span style={{color: '#ff0000', textDecoration: 'underline'}}>Us</span>
                                </h2>
                                <div className="contact-text">
                                    <h3 className="contact-question">
                                        Ready to achieve your academic goals with confidence?
                                    </h3>
                                    <p className="contact-description">
                                        Contact us today to learn more about how Explore S Research Solutions can assist you on your academic journey. Together, we can pave the way for your success.
                                    </p>
                                    <div className="contact-tagline">
                                        <strong>Explore S Research Solutions - Turning complexity into clarity</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate__fadeInUp" data-wow-duration="0.5s">
                            <div className="contact-form-wrapper">
                                <form className="contact-form">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Your Name *" 
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <div className="phone-input-wrapper">
                                            <div className="country-code">
                                                <span className="flag-icon">🇮🇳</span>
                                                <span className="code">+91</span>
                                                <span className="dropdown-arrow">▼</span>
                                            </div>
                                            <input 
                                                type="tel" 
                                                className="form-control phone-input" 
                                                placeholder="Your Number *" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="Your Email ID *" 
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            className="form-control message-textarea" 
                                            rows="4" 
                                            placeholder="Type Your Message.. *" 
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="submit" className="btn submit-btn">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;