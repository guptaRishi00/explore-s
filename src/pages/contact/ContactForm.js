import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('', '', e.target, '')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  }

  return (
    <div className="es-contact__form-wrap">
      <form
        id="contact-form"
        className="es-contact-form"
        onSubmit={sendEmail}
        noValidate
      >
        <div className="es-contact-form__row">
          <div className="es-contact-form__field">
            <label htmlFor="cf-name" className="es-contact-form__label">Name</label>
            <input
              id="cf-name"
              type="text"
              name="user_name"
              required
              placeholder="Your full name"
              className="es-contact-form__input"
            />
          </div>

          <div className="es-contact-form__field">
            <label htmlFor="cf-email" className="es-contact-form__label">Email</label>
            <input
              id="cf-email"
              type="email"
              name="user_email"
              required
              placeholder="your@email.com"
              className="es-contact-form__input"
            />
          </div>
        </div>

        <div className="es-contact-form__row">
          <div className="es-contact-form__field">
            <label htmlFor="cf-subject" className="es-contact-form__label">Subject</label>
            <input
              id="cf-subject"
              type="text"
              name="user_subject"
              required
              placeholder="How can we help?"
              className="es-contact-form__input"
            />
          </div>

          <div className="es-contact-form__field">
            <label htmlFor="cf-phone" className="es-contact-form__label">Phone</label>
            <input
              id="cf-phone"
              type="text"
              name="user_phone"
              required
              placeholder="+91 XXXXX XXXXX"
              className="es-contact-form__input"
            />
          </div>
        </div>

        <div className="es-contact-form__field es-contact-form__field--full">
          <label htmlFor="cf-message" className="es-contact-form__label">Message</label>
          <textarea
            id="cf-message"
            name="user_message"
            required
            placeholder="Tell us about your research needs…"
            className="es-contact-form__textarea"
            rows="5"
          />
        </div>

        <div className="es-contact-form__footer">
          <button type="submit" className="es-btn es-btn--primary es-contact-form__submit">
            Send Message
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <p className="es-contact-form__privacy">
            We respect your privacy — your details are never shared.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
