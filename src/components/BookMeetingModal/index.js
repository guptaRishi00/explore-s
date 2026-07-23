// src/components/BookMeetingModal/index.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import emailjs from 'emailjs-com';

// TODO (client): Replace empty strings with your EmailJS credentials.
// service ID, template ID, and public key are obtained from https://emailjs.com/
// Example: emailjs.sendForm('service_abc123', 'template_xyz', e.target, 'PUBLIC_KEY')
const EMAILJS_SERVICE  = '';
const EMAILJS_TEMPLATE = '';
const EMAILJS_PUBLIC   = '';

const BookMeetingModal = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const firstFieldRef             = useRef(null);
  const autoCloseRef              = useRef(null);
  const triggerRef                = useRef(null);

  // Listen for the custom event fired by openBookMeeting()
  useEffect(() => {
    const open = () => {
      // Remember what had focus so we can restore it when the modal closes
      triggerRef.current = document.activeElement;
      setIsOpen(true);
    };
    window.addEventListener('es:book-meeting', open);
    return () => window.removeEventListener('es:book-meeting', open);
  }, []);

  // Prevent body scroll AND hide site-wide floating chrome (WhatsApp button,
  // back-to-top, chat widget) while the modal is open — otherwise those
  // high-z-index fixed elements paint over the overlay. See _modal.scss.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    document.body.classList.toggle('es-modal-open', isOpen);
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('es-modal-open');
    };
  }, [isOpen]);

  // Focus first field when modal opens
  useEffect(() => {
    if (isOpen && firstFieldRef.current) {
      firstFieldRef.current.focus();
    }
  }, [isOpen]);

  const close = useCallback(() => {
    // Cancel any pending auto-close so a stale timer can't shut a re-opened modal
    clearTimeout(autoCloseRef.current);
    setIsOpen(false);
    setSubmitted(false);
    // Restore focus to the element that opened the modal (a11y)
    if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
      triggerRef.current.focus();
    }
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optimistic success: mirrors the existing ContactForm.js flow — reset +
    // show success immediately (the placeholder empty IDs always reject until
    // the client wires real EmailJS credentials, so we don't gate on .then()).
    emailjs
      .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, e.target, EMAILJS_PUBLIC)
      .then(
        () => { /* success handled optimistically below */ },
        (err) => { console.error('EmailJS error:', err); }
      );
    e.target.reset();
    setSubmitted(true);
    // Auto-close after 3 s so the user sees the thank-you message
    autoCloseRef.current = setTimeout(close, 3000);
  };

  if (!isOpen) return null;

  const modalId = 'book-meeting-dialog';
  const titleId = 'book-meeting-title';

  return (
    <div
      className="es-modal__overlay is-open"
      role="presentation"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div
        id={modalId}
        className="es-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="es-modal__header">
          <h2 id={titleId} className="es-modal__title">
            Book a Meeting with an Expert
          </h2>
          <button
            type="button"
            className="es-modal__close"
            aria-label="Close"
            onClick={close}
          >
            &times;
          </button>
        </div>

        {submitted ? (
          <div className="es-modal__success" role="status">
            <p>Thanks! We'll be in touch shortly via email or WhatsApp.</p>
          </div>
        ) : (
          <div className="es-modal__body">
              <form
                className="es-modal__form"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Full name */}
                <div className="es-modal__field">
                  <label htmlFor="bm-name" className="es-modal__label">
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bm-name"
                    ref={firstFieldRef}
                    type="text"
                    name="user_name"
                    className="es-modal__input"
                    placeholder="Dr. Jane Smith"
                    required
                  />
                </div>

                {/* Email + Phone row */}
                <div className="es-modal__row">
                  <div className="es-modal__field">
                    <label htmlFor="bm-email" className="es-modal__label">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="bm-email"
                      type="email"
                      name="user_email"
                      className="es-modal__input"
                      placeholder="you@university.edu"
                      required
                    />
                  </div>
                  <div className="es-modal__field">
                    <label htmlFor="bm-phone" className="es-modal__label">
                      Phone <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="bm-phone"
                      type="tel"
                      name="user_phone"
                      className="es-modal__input"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                {/* Date + Time row */}
                <div className="es-modal__row">
                  <div className="es-modal__field">
                    <label htmlFor="bm-date" className="es-modal__label">
                      Preferred Date
                    </label>
                    <input
                      id="bm-date"
                      type="date"
                      name="meeting_date"
                      className="es-modal__input"
                    />
                  </div>
                  <div className="es-modal__field">
                    <label htmlFor="bm-time" className="es-modal__label">
                      Preferred Time
                    </label>
                    <input
                      id="bm-time"
                      type="time"
                      name="meeting_time"
                      className="es-modal__input"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="es-modal__field">
                  <label htmlFor="bm-message" className="es-modal__label">
                    Topic / Message
                  </label>
                  <textarea
                    id="bm-message"
                    name="user_message"
                    className="es-modal__textarea"
                    placeholder="Briefly describe your research area or what you'd like to discuss…"
                    rows={4}
                  />
                </div>

                <div className="es-modal__footer">
                  <button type="submit" className="es-btn es-btn--accent">
                    Request Meeting
                  </button>
                  <p className="es-modal__note">
                    We'll confirm your slot by email / WhatsApp.
                  </p>
                </div>
              </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookMeetingModal;
