import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { registerGsap, prefersReducedMotion } from '../../../utils/animations';
import homeContent from '../../../data/homeContent';

const { tag, title, steps } = homeContent.process;

// Lightweight stroke icons (Lucide-style) revealed as each milestone activates.
const ICONS = {
  learner: (
    <>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5" />
    </>
  ),
  consult: (
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
  ),
  evaluate: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  onboard: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </>
  ),
  mentor: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  execute: (
    <>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </>
  ),
  success: (
    <>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M6 4h12v5a6 6 0 0 1-12 0V4Z" />
      <path d="M9 20h6M12 15v5" />
    </>
  ),
};

const StepIcon = ({ name }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {ICONS[name]}
  </svg>
);

// Bold, filled glyphs (white on a colorful gradient tile) shown below each step.
const ART = {
  learner: (
    <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3Zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9ZM17 16l-5 2.73L7 16v-3.73L12 15l5-2.73V16Z" />
  ),
  consult: (
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2ZM9 11H7V9h2v2Zm4 0h-2V9h2v2Zm4 0h-2V9h2v2Z" />
  ),
  evaluate: (
    <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z" />
  ),
  onboard: (
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-9 15-4-4 1.41-1.41L10 15.17l6.59-6.59L18 10l-8 8ZM12 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Z" />
  ),
  mentor: (
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19Z" />
  ),
  execute: (
    <path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z" />
  ),
  success: (
    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 18.9V21H7v2h10v-2h-4v-2.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2ZM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8Zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1Z" />
  ),
};

const StepArt = ({ name }) => (
  <div className="es-process__art" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="currentColor">
      {ART[name]}
    </svg>
  </div>
);

const ProcessSection = () => {
  const rootRef = useRef(null);
  const fillRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const fill = fillRef.current;
    if (!root || !fill) return;

    const stepEls = Array.from(root.querySelectorAll('.es-process__step'));

    // Guard: jsdom / SSR / reduced-motion → show everything in its final, active state
    const canAnimate =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      !prefersReducedMotion();

    if (!canAnimate) {
      fill.style.transformOrigin = 'left center';
      fill.style.transform = 'scaleX(1)';
      stepEls.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.classList.add('is-active');
      });
      return;
    }

    registerGsap();
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia('(min-width: 768px)').matches;
      const scaleAxis = isDesktop ? 'scaleX' : 'scaleY';
      const origin = isDesktop ? 'left center' : 'top center';
      const lastIdx = Math.max(stepEls.length - 1, 1);

      // Toggle each milestone active as the scrubbed fill reaches it.
      const syncActive = (progress) => {
        stepEls.forEach((el, i) => {
          const threshold = i / lastIdx;
          el.classList.toggle('is-active', progress >= threshold - 0.02);
        });
      };

      // Animate the fill line with scroll scrub + drive icon reveals
      gsap.fromTo(
        fill,
        { [scaleAxis]: 0, transformOrigin: origin },
        {
          [scaleAxis]: 1,
          transformOrigin: origin,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top 72%',
            end: 'bottom 62%',
            scrub: 0.6,
            onUpdate: (self) => syncActive(self.progress),
            onRefresh: (self) => syncActive(self.progress),
          },
        }
      );

      // Staggered step entrance
      gsap.from('.es-process__step', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: root,
          start: 'top 80%',
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="es-section es-process" ref={rootRef} aria-label="How it works">
      <div className="container">
        <div className="es-process__intro">
          <span className="es-tag">{tag}</span>
          <h2 className="es-h2">{title}</h2>
        </div>

        <div className="es-process__timeline">
          {/* Progress track (background) + animated fill */}
          <div className="es-process__track" aria-hidden="true">
            <div className="es-process__fill" ref={fillRef} />
          </div>

          {/* Steps */}
          <ol className="es-process__steps">
            {steps.map((step) => (
              <li key={step.n} className="es-process__step">
                <div className="es-process__badge" aria-hidden="true">
                  <span className="es-process__ring" />
                  <span className="es-process__num">{step.n}</span>
                  <span className="es-process__icon">
                    <StepIcon name={step.icon} />
                  </span>
                </div>
                <div className="es-process__content">
                  <span className="es-process__step-index">Step {step.n}</span>
                  <h3 className="es-process__step-title">{step.title}</h3>
                  <StepArt name={step.icon} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
