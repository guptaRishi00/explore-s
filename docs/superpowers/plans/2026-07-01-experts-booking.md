# Experts Section + Book a Meeting Modal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a global "Book a Meeting" popup modal (triggered via custom event) and a "Talk to the Experts" homepage section whose cards open that modal.

**Architecture:** The modal is decoupled via a CustomEvent (`es:book-meeting`) so any component can trigger it with `openBookMeeting()` from a helper util. The modal mounts once in App.js alongside WhatsAppButton/LiveChat. The ExpertsSection reads from a static data file and wires each card's CTA to the helper. SCSS partials are added and imported in main.scss after `programs`.

**Tech Stack:** React (CRA), GSAP + ScrollTrigger (via existing `fadeUp`), EmailJS (`emailjs-user`), SCSS (BEM, brand tokens), RTL + Jest

## Global Constraints

- Brand tokens ONLY: `$primaryColor #004E9E`, `$accentColor #E00112`, `$titleColor #0A2540`, `$bodyColor #454F5B`, `$surfaceColor #F5F8FC`, `$hairline #E3E8EF`, `$whiteColor`, `$titlefont` (Sora), `$bodyfont` (Inter), `--es-radius`, `--es-shadow`, `$transition`
- Reuse existing classes — `.es-section`, `.es-eyebrow`, `.es-h2`, `.es-btn`, `.es-btn--primary`, `.es-btn--accent`, `.es-btn--ghost` — do NOT redefine them
- Mobile-first, no horizontal overflow, visible focus rings, `prefers-reduced-motion` must disable all GSAP transforms (use existing `fadeUp`/`prefersReducedMotion` from `src/utils/animations.js`)
- No h1 in any new section; existing hero owns the page's only h1
- EmailJS IDs are intentional empty-string placeholders (matching `src/pages/contact/ContactForm.js`) — add a comment telling the client to fill in their service/template/public-key IDs
- Build: `npm run build` must produce no errors; tests: `CI=true npm test -- src/pages/home` must pass
- Dev server on :3000 — do NOT kill it

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `src/utils/bookMeeting.js` | Exports `openBookMeeting()` that fires the custom event |
| Create | `src/components/BookMeetingModal/index.js` | Modal component — listens for event, renders overlay+form |
| Create | `src/assets/scss/_modal.scss` | `.es-modal*` BEM styles |
| Create | `src/data/experts.js` | Static array of 4 expert objects |
| Create | `src/pages/home/sections/ExpertsSection.js` | Experts grid section component |
| Create | `src/assets/scss/_experts.scss` | `.es-expert*` BEM styles |
| Create | `src/pages/home/sections/ExpertsSection.test.js` | RTL tests for ExpertsSection |
| Create | `src/components/BookMeetingModal/BookMeetingModal.test.js` | RTL tests for BookMeetingModal |
| Modify | `src/app/App.js` | Import + mount `<BookMeetingModal />` next to WhatsAppButton/LiveChat |
| Modify | `src/assets/scss/main.scss` | Add `@import 'modal';` and `@import 'experts';` after `programs` |
| Modify | `src/pages/home/HomeMain.js` | Import + insert `<ExpertsSection />` before `<TestimonialsSection />` |

---

## Task 1: `bookMeeting.js` helper utility

**Files:**
- Create: `src/utils/bookMeeting.js`

**Interfaces:**
- Produces: `openBookMeeting(): void` — dispatches `window.dispatchEvent(new CustomEvent('es:book-meeting'))`

- [ ] **Step 1: Create the helper**

```js
// src/utils/bookMeeting.js
// Fire the custom event that BookMeetingModal listens for.
// Call this from any button/link to open the booking modal.
export function openBookMeeting() {
  window.dispatchEvent(new CustomEvent('es:book-meeting'));
}
```

- [ ] **Step 2: Verify file exists**

```bash
cat /Users/david/explore-s/src/utils/bookMeeting.js
```
Expected: file printed with the function definition.

---

## Task 2: `_modal.scss` styles

**Files:**
- Create: `src/assets/scss/_modal.scss`

**Interfaces:**
- Produces: `.es-modal__overlay`, `.es-modal`, `.es-modal__header`, `.es-modal__title`, `.es-modal__close`, `.es-modal__body`, `.es-modal__form`, `.es-modal__field`, `.es-modal__label`, `.es-modal__input`, `.es-modal__textarea`, `.es-modal__footer`, `.es-modal__success`

- [ ] **Step 1: Create `_modal.scss`**

```scss
// _modal.scss — Book a Meeting modal styles
// Uses brand tokens from _variables.scss and _tokens.scss

.es-modal__overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 37, 64, 0.6);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.2s ease;

  &.is-open {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
}

.es-modal {
  background: $whiteColor;
  border-radius: var(--es-radius);
  box-shadow: var(--es-shadow), 0 20px 60px rgba(10, 37, 64, 0.18);
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  transform: translateY(24px);
  transition: transform 0.25s ease;

  .es-modal__overlay.is-open & {
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 28px 0;
    gap: 12px;
  }

  &__title {
    font: 700 20px/1.2 $titlefont;
    color: $titleColor;
    margin: 0;
  }

  &__close {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 22px;
    line-height: 1;
    color: $bodyColor;
    padding: 6px;
    border-radius: 6px;
    transition: $transition;
    flex-shrink: 0;

    &:hover,
    &:focus-visible {
      background: $surfaceColor;
      color: $titleColor;
    }

    &:focus-visible {
      outline: 2px solid $primaryColor;
      outline-offset: 2px;
    }
  }

  &__body {
    padding: 20px 28px 24px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media (min-width: 480px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__label {
    font: 600 13px/1 $bodyfont;
    color: $titleColor;
  }

  &__input,
  &__textarea {
    width: 100%;
    padding: 11px 14px;
    border: 1.5px solid $hairline;
    border-radius: 8px;
    font: 400 15px/1.5 $bodyfont;
    color: $titleColor;
    background: $whiteColor;
    transition: border-color 0.2s ease;
    box-sizing: border-box;

    &::placeholder {
      color: lighten($bodyColor, 20%);
    }

    &:focus {
      outline: none;
      border-color: $primaryColor;
      box-shadow: 0 0 0 3px rgba($primaryColor, 0.12);
    }
  }

  &__textarea {
    resize: vertical;
    min-height: 90px;
  }

  &__footer {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    padding: 0 28px 24px;
    border-top: 1px solid $hairline;
    padding-top: 20px;
    margin-top: -4px;
  }

  &__note {
    font: 400 13px/1.4 $bodyfont;
    color: $bodyColor;
    margin: 0;
  }

  &__success {
    padding: 32px 28px;
    text-align: center;

    p {
      font: 600 17px/1.5 $titlefont;
      color: $primaryColor;
      margin: 0;
    }
  }
}
```

---

## Task 3: `BookMeetingModal` component

**Files:**
- Create: `src/components/BookMeetingModal/index.js`

**Interfaces:**
- Consumes: `openBookMeeting()` event via `window` (`es:book-meeting` CustomEvent)
- Consumes: `emailjs` from `emailjs-com` (same as ContactForm.js)
- Produces: default export `BookMeetingModal` — mounts globally, no props required

- [ ] **Step 1: Create the component**

```jsx
// src/components/BookMeetingModal/index.js
import React, { useState, useEffect, useRef } from 'react';
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

  // Listen for the custom event fired by openBookMeeting()
  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener('es:book-meeting', open);
    return () => window.removeEventListener('es:book-meeting', open);
  }, []);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Focus first field when modal opens
  useEffect(() => {
    if (isOpen && firstFieldRef.current) {
      firstFieldRef.current.focus();
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, e.target, EMAILJS_PUBLIC)
      .then(
        () => { /* success handled below */ },
        (err) => { console.error('EmailJS error:', err); }
      );
    e.target.reset();
    setSubmitted(true);
    // Auto-close after 3 s so the user sees the thank-you message
    setTimeout(close, 3000);
  };

  if (!isOpen) return null;

  const modalId = 'book-meeting-dialog';
  const titleId = 'book-meeting-title';

  return (
    <div
      className={`es-modal__overlay is-open`}
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
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default BookMeetingModal;
```

---

## Task 4: Mount `BookMeetingModal` in `App.js`

**Files:**
- Modify: `src/app/App.js`

**Interfaces:**
- Consumes: default export from `src/components/BookMeetingModal/index.js`

- [ ] **Step 1: Add import and JSX to App.js**

Add the import after the LiveChat import:
```js
import BookMeetingModal from '../components/BookMeetingModal';
```

Add `<BookMeetingModal />` directly after `<LiveChat />`:
```jsx
<WhatsAppButton />
<LiveChat />
<BookMeetingModal />
```

The full updated `App.js` should look like:
```jsx
import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Preloader from "../components/Preloader";

import Home from '../pages/home';
import About from '../pages/about';
import Services from '../pages/services';
import ServiceDetails from '../pages/services/service-details';
import Domain from '../pages/domain';
import Contact from '../pages/contact';
import PayNow from '../pages/paynow';
import Error from '../pages/404';
import LoadTop from '../components/ScrollTop/LoadTop'
import WhatsAppButton from '../components/WhatsAppButton';
import LiveChat from '../components/LiveChat';
import BookMeetingModal from '../components/BookMeetingModal';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <div className='App'>
            {isLoading ? <Preloader /> : ''}
            <>
                <LoadTop />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/service/:serviceId" element={<ServiceDetails />} />
                    <Route path="/domain" element={<Domain />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/paynow" element={<PayNow />} />
                    <Route path='*' element={<Error />} />
                </Routes>
                <WhatsAppButton />
                <LiveChat />
                <BookMeetingModal />
            </>
        </div>
    );
}

export default App;
```

---

## Task 5: Add `@import 'modal'` to `main.scss`

**Files:**
- Modify: `src/assets/scss/main.scss`

**Interfaces:**
- Consumes: `src/assets/scss/_modal.scss` (Task 2)

- [ ] **Step 1: Add the import after `programs`**

In `src/assets/scss/main.scss`, after the line `@import 'programs';`, add:
```scss
@import 'modal';
```

The file should now have in sequence:
```scss
@import 'programs';
@import 'modal';
```

---

## Task 6: `experts.js` data file

**Files:**
- Create: `src/data/experts.js`

**Interfaces:**
- Produces: named export `experts` — array of 4 objects with shape `{ id, name, designation, experience, rating, reviews, specialties }`

- [ ] **Step 1: Create the data file**

```js
// src/data/experts.js
// Placeholder expert data — client can update names, photos, and stats.
export const experts = [
  {
    id: 1,
    name: 'Dr. A. Sharma',
    designation: 'Senior Research Consultant',
    experience: '12+ years',
    rating: 4.9,
    reviews: 180,
    specialties: ['PhD Guidance', 'Thesis Writing', 'Publications'],
  },
  {
    id: 2,
    name: 'Dr. R. Iyer',
    designation: 'Data & Statistics Lead',
    experience: '10+ years',
    rating: 4.8,
    reviews: 140,
    specialties: ['SPSS / R', 'Quantitative Analysis', 'Regression Models'],
  },
  {
    id: 3,
    name: 'Dr. M. Khan',
    designation: 'Academic Writing Expert',
    experience: '9+ years',
    rating: 4.9,
    reviews: 160,
    specialties: ['Thesis & Dissertations', 'Editing & Proofreading', 'Literature Review'],
  },
  {
    id: 4,
    name: 'Dr. S. Nair',
    designation: 'Publications Specialist',
    experience: '11+ years',
    rating: 5.0,
    reviews: 120,
    specialties: ['SCOPUS / SCI Journals', 'Peer Review', 'Research Methodology'],
  },
];
```

---

## Task 7: `_experts.scss` styles

**Files:**
- Create: `src/assets/scss/_experts.scss`

**Interfaces:**
- Produces: `.es-experts`, `.es-experts__intro`, `.es-experts__lead`, `.es-experts__grid`, `.es-expert`, `.es-expert__avatar`, `.es-expert__initials`, `.es-expert__name`, `.es-expert__desig`, `.es-expert__pill`, `.es-expert__stars`, `.es-expert__rating`, `.es-expert__tags`, `.es-expert__tag`

- [ ] **Step 1: Create `_experts.scss`**

```scss
// _experts.scss — Talk to the Experts section
// Uses brand tokens from _variables.scss and _tokens.scss

.es-experts {
  background: $surfaceColor;

  &__intro {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 56px;
  }

  &__lead {
    font: 400 17px/1.6 $bodyfont;
    color: $bodyColor;
    margin: 16px 0 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 28px;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

.es-expert {
  background: $whiteColor;
  border: 1px solid $hairline;
  border-radius: var(--es-radius);
  padding: 32px 24px;
  box-shadow: var(--es-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: $transition;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    border-color: $primaryColor;
  }

  // ── Avatar ──────────────────────────────────────────────────────────────────
  &__avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 20px;
    flex-shrink: 0;
    // When the client swaps in a real <img>, it will fill this circle naturally.
    // The gradient below is only shown when the initials span is rendered.
    background: linear-gradient(135deg, $primaryColor 0%, darken($primaryColor, 15%) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__initials {
    font: 700 26px/1 $titlefont;
    color: $whiteColor;
    letter-spacing: 0.02em;
    user-select: none;
  }

  // ── Text ────────────────────────────────────────────────────────────────────
  &__name {
    font: 700 18px/1.2 $titlefont;
    color: $titleColor;
    margin: 0 0 4px;
  }

  &__desig {
    font: 400 14px/1.4 $bodyfont;
    color: $bodyColor;
    margin: 0 0 12px;
  }

  // ── Experience pill ─────────────────────────────────────────────────────────
  &__pill {
    display: inline-block;
    font: 600 12px/1 $bodyfont;
    padding: 4px 12px;
    border-radius: 20px;
    background: rgba($primaryColor, 0.08);
    color: $primaryColor;
    margin-bottom: 14px;
  }

  // ── Star rating ─────────────────────────────────────────────────────────────
  &__stars {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom: 6px;
  }

  &__star {
    font-size: 16px;
    color: #F59E0B; // amber — a universal "gold star" colour, not a brand token
    line-height: 1;

    &--empty {
      color: $hairline;
    }
  }

  &__rating {
    font: 600 13px/1 $bodyfont;
    color: $bodyColor;
    margin: 0 0 16px;
  }

  // ── Specialty tags ───────────────────────────────────────────────────────────
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: center;
    margin-bottom: 24px;
  }

  &__tag {
    font: 500 12px/1 $bodyfont;
    padding: 4px 10px;
    border-radius: 6px;
    background: $surfaceColor;
    color: $bodyColor;
    border: 1px solid $hairline;
  }

  // ── CTA button ───────────────────────────────────────────────────────────────
  .es-btn {
    margin-top: auto;
    width: 100%;
    justify-content: center;
  }
}
```

---

## Task 8: `ExpertsSection` component

**Files:**
- Create: `src/pages/home/sections/ExpertsSection.js`

**Interfaces:**
- Consumes: `experts` from `src/data/experts.js` (Task 6)
- Consumes: `openBookMeeting` from `src/utils/bookMeeting.js` (Task 1)
- Consumes: `fadeUp`, `prefersReducedMotion` from `src/utils/animations.js`
- Produces: default export `ExpertsSection` React component

- [ ] **Step 1: Create the component**

```jsx
// src/pages/home/sections/ExpertsSection.js
import { useLayoutEffect, useRef } from 'react';
import { experts } from '../../../data/experts';
import { openBookMeeting } from '../../../utils/bookMeeting';
import { fadeUp } from '../../../utils/animations';

// Derive initials from a full name string, e.g. "Dr. A. Sharma" → "AS"
function getInitials(name) {
  return name
    .replace(/^Dr\.?\s*/i, '')      // strip "Dr." prefix
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .join('')
    .slice(0, 2);
}

// Render filled/empty stars from a numeric rating (e.g. 4.9 → 5 filled)
function StarRating({ rating }) {
  const full = Math.round(rating);
  return (
    <div className="es-expert__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`es-expert__star${i < full ? '' : ' es-expert__star--empty'}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

// A single expert card.
//
// AVATAR NOTE: currently renders an initials circle.
// To swap in a real photo, replace the <div className="es-expert__avatar"> contents with:
//   <img src={expert.photo} alt={expert.name} className="es-expert__avatar-img" />
// and remove the <span className="es-expert__initials"> element.
const ExpertCard = ({ expert }) => (
  <li className="es-expert">
    {/* Avatar — swap contents with <img> once client provides photos */}
    <div className="es-expert__avatar" aria-hidden="true">
      <span className="es-expert__initials">{getInitials(expert.name)}</span>
    </div>

    <h3 className="es-expert__name">{expert.name}</h3>
    <p className="es-expert__desig">{expert.designation}</p>
    <span className="es-expert__pill">{expert.experience}</span>

    <StarRating rating={expert.rating} />
    <p className="es-expert__rating">
      {expert.rating} ({expert.reviews} reviews)
    </p>

    <ul className="es-expert__tags" aria-label="Specialties">
      {expert.specialties.map((s) => (
        <li key={s} className="es-expert__tag">{s}</li>
      ))}
    </ul>

    <button
      type="button"
      className="es-btn es-btn--accent"
      onClick={openBookMeeting}
    >
      Book a Call Now
    </button>
  </li>
);

const ExpertsSection = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    // Guard: ScrollTrigger needs window.matchMedia — skip in tests / SSR
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '.es-expert', { stagger: 0.12 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section
      className="es-section es-experts"
      id="experts"
      ref={rootRef}
      aria-label="Talk to the Experts"
    >
      <div className="container">
        <div className="es-experts__intro">
          <span className="es-eyebrow">Our Mentors</span>
          <h2 className="es-h2">Talk to the Experts</h2>
          <p className="es-experts__lead">
            Connect directly with our domain specialists — PhD holders and senior
            researchers who've guided hundreds of scholars to successful submissions.
          </p>
        </div>

        <ul className="es-experts__grid" role="list">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExpertsSection;
```

---

## Task 9: Wire `ExpertsSection` into `HomeMain.js`

**Files:**
- Modify: `src/pages/home/HomeMain.js`

- [ ] **Step 1: Add import**

After the existing `import DomainsSection from './sections/DomainsSection';` line, add:
```js
import ExpertsSection from './sections/ExpertsSection';
```

- [ ] **Step 2: Insert JSX before TestimonialsSection**

Replace the existing Domains→Testimonials block with:
```jsx
{/* Domains-area-start */}
<DomainsSection />
{/* Domains-area-end */}

{/* Experts-area-start */}
<ExpertsSection />
{/* Experts-area-end */}

{/* testmonial-area-start */}
<TestimonialsSection />
{/* testmonial-area-end */}
```

---

## Task 10: Add `@import 'experts'` to `main.scss`

**Files:**
- Modify: `src/assets/scss/main.scss`

- [ ] **Step 1: Add the import after `modal`**

After the `@import 'modal';` line added in Task 5, add:
```scss
@import 'experts';
```

The sequence should now be:
```scss
@import 'programs';
@import 'modal';
@import 'experts';
```

---

## Task 11: Tests — `BookMeetingModal`

**Files:**
- Create: `src/components/BookMeetingModal/BookMeetingModal.test.js`

- [ ] **Step 1: Create the test file**

```jsx
// src/components/BookMeetingModal/BookMeetingModal.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import BookMeetingModal from './index';

// Mock emailjs-com so tests don't make real network calls
jest.mock('emailjs-com', () => ({
  sendForm: jest.fn(() => Promise.resolve({ text: 'OK' })),
}));

// Helper: fire the custom event that opens the modal
function openModal() {
  window.dispatchEvent(new CustomEvent('es:book-meeting'));
}

test('modal is not visible before the event fires', () => {
  render(<BookMeetingModal />);
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('modal opens when es:book-meeting event fires', () => {
  render(<BookMeetingModal />);
  openModal();
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /Book a Meeting with an Expert/i })
  ).toBeInTheDocument();
});

test('modal closes when × button is clicked', () => {
  render(<BookMeetingModal />);
  openModal();
  fireEvent.click(screen.getByRole('button', { name: /close/i }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('modal closes when overlay is clicked', () => {
  const { container } = render(<BookMeetingModal />);
  openModal();
  // Click the overlay (the outermost div), not the modal card
  fireEvent.click(container.querySelector('.es-modal__overlay'));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('modal closes on Escape key', () => {
  render(<BookMeetingModal />);
  openModal();
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('form has required fields with correct name attributes', () => {
  render(<BookMeetingModal />);
  openModal();
  expect(screen.getByLabelText(/Full Name/i)).toHaveAttribute('name', 'user_name');
  expect(screen.getByLabelText(/Email/i)).toHaveAttribute('name', 'user_email');
  expect(screen.getByLabelText(/Phone/i)).toHaveAttribute('name', 'user_phone');
});
```

- [ ] **Step 2: Run the tests**

```bash
cd /Users/david/explore-s && CI=true npm test -- --testPathPattern="BookMeetingModal" --watchAll=false
```
Expected: all 6 tests PASS.

---

## Task 12: Tests — `ExpertsSection`

**Files:**
- Create: `src/pages/home/sections/ExpertsSection.test.js`

- [ ] **Step 1: Create the test file**

```jsx
// src/pages/home/sections/ExpertsSection.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import ExpertsSection from './ExpertsSection';

// openBookMeeting dispatches a window event — mock it to observe calls
jest.mock('../../../utils/bookMeeting', () => ({
  openBookMeeting: jest.fn(),
}));
import { openBookMeeting } from '../../../utils/bookMeeting';

test('renders eyebrow, h2 heading, and lead paragraph', () => {
  render(<ExpertsSection />);
  expect(screen.getByText(/Our Mentors/i)).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: /Talk to the Experts/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/Connect directly with our domain specialists/i)).toBeInTheDocument();
});

test('renders all 4 expert names', () => {
  render(<ExpertsSection />);
  expect(screen.getByText('Dr. A. Sharma')).toBeInTheDocument();
  expect(screen.getByText('Dr. R. Iyer')).toBeInTheDocument();
  expect(screen.getByText('Dr. M. Khan')).toBeInTheDocument();
  expect(screen.getByText('Dr. S. Nair')).toBeInTheDocument();
});

test('each expert card has a "Book a Call Now" button', () => {
  render(<ExpertsSection />);
  const buttons = screen.getAllByRole('button', { name: /Book a Call Now/i });
  expect(buttons).toHaveLength(4);
});

test('clicking "Book a Call Now" calls openBookMeeting', () => {
  render(<ExpertsSection />);
  const [firstBtn] = screen.getAllByRole('button', { name: /Book a Call Now/i });
  fireEvent.click(firstBtn);
  expect(openBookMeeting).toHaveBeenCalledTimes(1);
});

test('renders initials avatar for each expert', () => {
  render(<ExpertsSection />);
  // Dr. A. Sharma → "AS", Dr. R. Iyer → "RI", etc.
  expect(screen.getByText('AS')).toBeInTheDocument();
  expect(screen.getByText('RI')).toBeInTheDocument();
  expect(screen.getByText('MK')).toBeInTheDocument();
  expect(screen.getByText('SN')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the tests**

```bash
cd /Users/david/explore-s && CI=true npm test -- --testPathPattern="ExpertsSection" --watchAll=false
```
Expected: all 5 tests PASS.

---

## Task 13: Full build + home test suite

- [ ] **Step 1: Run the full home test suite**

```bash
cd /Users/david/explore-s && CI=true npm test -- src/pages/home --watchAll=false
```
Expected: all existing tests (11 existing + 5 new ExpertsSection) PASS. Zero failures.

- [ ] **Step 2: Production build**

```bash
cd /Users/david/explore-s && npm run build
```
Expected: `Compiled successfully.` with no errors (warnings about bundle size are acceptable).

---

## Task 14: Write report

**Files:**
- Create: `/Users/david/explore-s/.superpowers/sdd/experts-booking-report.md`

- [ ] **Step 1: Create the report directory if needed**

```bash
mkdir -p /Users/david/explore-s/.superpowers/sdd
```

- [ ] **Step 2: Write the report**

```markdown
# Experts & Booking Features — Implementation Report

## Features Delivered

### Feature 1 — Book a Meeting Modal (global)
- `src/utils/bookMeeting.js`: exports `openBookMeeting()` — fires `es:book-meeting` CustomEvent
- `src/components/BookMeetingModal/index.js`: listens for the event; renders overlay + dialog with form
- `src/assets/scss/_modal.scss`: `.es-modal*` BEM styles, reduced-motion safe
- Mounted once in `src/app/App.js` alongside WhatsAppButton/LiveChat

### Feature 2 — Talk to the Experts Section
- `src/data/experts.js`: 4 placeholder expert objects
- `src/pages/home/sections/ExpertsSection.js`: grid of expert cards with initials avatar, star rating, specialty tags, "Book a Call Now" CTA
- `src/assets/scss/_experts.scss`: `.es-expert*` BEM styles, mobile-first grid
- Wired into `src/pages/home/HomeMain.js` before TestimonialsSection

### SCSS Imports
- `src/assets/scss/main.scss`: added `@import 'modal'` and `@import 'experts'` after `programs`

## Files Changed

| Type | Path |
|------|------|
| Created | `src/utils/bookMeeting.js` |
| Created | `src/components/BookMeetingModal/index.js` |
| Created | `src/components/BookMeetingModal/BookMeetingModal.test.js` |
| Created | `src/assets/scss/_modal.scss` |
| Created | `src/data/experts.js` |
| Created | `src/pages/home/sections/ExpertsSection.js` |
| Created | `src/pages/home/sections/ExpertsSection.test.js` |
| Created | `src/assets/scss/_experts.scss` |
| Modified | `src/app/App.js` |
| Modified | `src/assets/scss/main.scss` |
| Modified | `src/pages/home/HomeMain.js` |

## Modal Accessibility

- `role="dialog"` + `aria-modal="true"` + `aria-labelledby` pointing to `<h2 id="book-meeting-title">`
- Opens on `es:book-meeting` custom event; closes on × click, overlay click, and Escape key
- Focus moves to first field (Full Name) on open via `useEffect` + `useRef`
- Body scroll locked while open via `document.body.style.overflow = 'hidden'`; restored on close
- Reduced-motion: CSS `transition: none` when `prefers-reduced-motion: reduce`; no JS transforms in the modal

## EmailJS Note

`BookMeetingModal` uses `emailjs.sendForm('', '', e.target, '')` — identical to `ContactForm.js`. Constants `EMAILJS_SERVICE`, `EMAILJS_TEMPLATE`, and `EMAILJS_PUBLIC` are empty-string placeholders with an inline comment directing the client to fill in their credentials from https://emailjs.com.

## Build & Test Summary

- `npm run build`: Compiled successfully, zero errors
- `CI=true npm test -- src/pages/home`: all tests pass (11 pre-existing + 5 new ExpertsSection)
- `CI=true npm test -- BookMeetingModal`: all 6 tests pass

## Self-Review

- Modal opens/closes via event, ×, overlay click, and Escape: confirmed
- Focus management on open: confirmed (`firstFieldRef`)
- Body-scroll lock and restore: confirmed
- Reduced-motion: modal uses CSS-only fade with `transition: none` guard; ExpertsSection uses existing `fadeUp` which already calls `prefersReducedMotion()`
- ExpertsSection "Book a Call Now" fires `openBookMeeting()`: confirmed
- Only one h1 on homepage (hero): ExpertsSection uses h2/h3 only
- No old teal/blue tokens: all colours are brand tokens from `_variables.scss`
- EmailJS pattern matches ContactForm exactly: confirmed
- Mobile-first: grid is `1fr` → 2-col → 4-col via breakpoints

## Concerns & Notes

- **Placeholder content**: All expert names, designations, ratings and specialties are realistic placeholders. The client must replace them with real consultant profiles.
- **Avatar swap**: Code comment in `ExpertCard` explains how to replace initials with real `<img>` tags.
- **EmailJS credentials**: The client must add their service ID, template ID, and public key to `BookMeetingModal/index.js` before the form sends emails.
- **Star colour**: `#F59E0B` (amber) is used for stars — this is a conventional "gold star" colour and is not a brand token. The spec does not define a star colour.
- **Date server**: Dev server on :3000 was not killed.
```

---

## Self-Review Against Spec

| Spec Requirement | Covered by Task |
|---|---|
| `openBookMeeting()` helper in `src/utils/bookMeeting.js` | Task 1 |
| Modal listens for `es:book-meeting` custom event | Task 3 |
| Mount once in App.js next to WhatsAppButton/LiveChat | Task 4 |
| Overlay rgba dark, click-to-close | Task 3 |
| Centered card, white, rounded, --es-shadow, max-width 520px, scrollable | Tasks 2+3 |
| Header: title + close button (×, aria-label) | Task 3 |
| Form fields: name/email/phone (required), date/time, textarea | Task 3 |
| Field name attributes: user_name, user_email, user_phone, meeting_date, meeting_time, user_message | Task 3 |
| Submit: es-btn es-btn--accent "Request Meeting" | Task 3 |
| Footer note: "We'll confirm your slot by email/WhatsApp" | Task 3 |
| EmailJS pattern matches ContactForm, empty IDs, comment | Task 3 |
| Accessibility: role=dialog, aria-modal, aria-labelledby | Task 3 |
| Close on ×, overlay, Escape | Task 3 |
| Focus first field on open | Task 3 |
| Body scroll lock on open | Task 3 |
| Reduced-motion: fade/no transition | Tasks 2+3 |
| _modal.scss, imported after programs | Tasks 2+5 |
| experts.js with 4 realistic objects | Task 6 |
| ExpertsSection id="experts", eyebrow, h2, lead | Task 8 |
| Initials avatar with swap comment | Task 8 |
| h3 name, designation, experience pill | Task 8 |
| Star rating row with numeric + reviews | Tasks 7+8 |
| Specialty tags | Tasks 7+8 |
| "Book a Call Now" es-btn--accent calls openBookMeeting() | Task 8 |
| fadeUp stagger with useLayoutEffect + matchMedia guard + cleanup | Task 8 |
| _experts.scss imported after modal | Task 10 |
| ExpertsSection wired before TestimonialsSection | Task 9 |
| @import modal + experts after programs | Tasks 5+10 |
| npm run build → clean | Task 13 |
| CI=true npm test -- src/pages/home → pass | Task 13 |
| Report written to .superpowers/sdd/ | Task 14 |
| No new h1 | Task 8 (uses h2/h3 only) |
| Brand tokens only | Tasks 2+7 |
| Mobile-first | Tasks 2+7 |
