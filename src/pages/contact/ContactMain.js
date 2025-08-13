import React from 'react';
import GoogleMapSection from './GoogleMapSection';
import ContactDetailsSection from './ContactDetailsSection';

const ContactMain = () => {
    return (
        <div className="contact-page__area pt---100 pb---120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <GoogleMapSection />
                    </div>
                    <div className="col-lg-6">
                        <ContactDetailsSection />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMain;