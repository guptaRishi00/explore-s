import React from 'react';
import contactData from '../../data/Contact.json';

const ContactDetailsSection = () => {
  const { address, phone, email } = contactData;

  return (
    <aside className="es-contact__aside">
      {/* Decorative blurred blobs */}
      <div className="es-contact__aside-blob es-contact__aside-blob--1" aria-hidden="true"></div>
      <div className="es-contact__aside-blob es-contact__aside-blob--2" aria-hidden="true"></div>

      <div className="es-contact__aside-content">
        <h2 className="es-contact__aside-heading">Contact information</h2>
        <p className="es-contact__aside-lead">
          Fill up the form and our team will get back within 24 hours.
        </p>

        {/* Address */}
        <div className="es-contact__aside-row">
          <div className="es-contact__aside-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="es-contact__aside-detail">
            <span className="es-contact__aside-label">{address.label}</span>
            <span className="es-contact__aside-value">
              {address.line1},<br />{address.area},<br />{address.city}, {address.state}
            </span>
          </div>
        </div>

        {/* Phone */}
        <div className="es-contact__aside-row">
          <div className="es-contact__aside-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="es-contact__aside-detail">
            <span className="es-contact__aside-label">{phone.label}</span>
            <a href={`tel:${phone.number}`} className="es-contact__aside-value es-contact__aside-link">
              {phone.number}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="es-contact__aside-row">
          <div className="es-contact__aside-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className="es-contact__aside-detail">
            <span className="es-contact__aside-label">{email.label}</span>
            <a href={`mailto:${email.address}`} className="es-contact__aside-value es-contact__aside-link">
              {email.address}
            </a>
          </div>
        </div>

        {/* Social follow */}
        <div className="es-contact__aside-social">
          <span className="es-contact__aside-social-label">Follow us</span>
          <div className="es-contact__aside-social-icons">
            <a href="#" aria-label="Facebook" className="es-contact__aside-social-icon">
              <span aria-hidden="true" className="social_facebook"></span>
            </a>
            <a href="#" aria-label="Twitter" className="es-contact__aside-social-icon">
              <span aria-hidden="true" className="social_twitter"></span>
            </a>
            <a href="#" aria-label="LinkedIn" className="es-contact__aside-social-icon">
              <span aria-hidden="true" className="social_linkedin"></span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ContactDetailsSection;
