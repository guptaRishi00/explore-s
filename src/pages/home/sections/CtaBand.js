import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { registerGsap, prefersReducedMotion } from '../../../utils/animations';
import homeContent from '../../../data/homeContent';

const { title, subtitle, button } = homeContent.cta;

export default function CtaBand() {
  const sectionRef = useRef(null);
  const btnRef = useRef(null);
  const decorRef = useRef(null);

  useLayoutEffect(() => {
    const canAnimate =
      typeof window.matchMedia === 'function' && !prefersReducedMotion();

    if (!canAnimate) {
      // Static final state — full opacity, no transforms
      return;
    }

    registerGsap();
    const ctx = gsap.context(() => {
      // ── Parallax on decorative blob ──────────────────────────────────────
      const { ScrollTrigger } = require('gsap/ScrollTrigger');
      if (decorRef.current) {
        gsap.to(decorRef.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    // ── Magnetic button ──────────────────────────────────────────────────────
    const btn = btnRef.current;
    let xTo, yTo;

    if (btn) {
      xTo = gsap.quickTo(btn, 'x', { duration: 0.3, ease: 'power2.out' });
      yTo = gsap.quickTo(btn, 'y', { duration: 0.3, ease: 'power2.out' });

      const handleMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        xTo((e.clientX - cx) * 0.3);
        yTo((e.clientY - cy) * 0.3);
      };

      const handleLeave = () => {
        xTo(0);
        yTo(0);
      };

      btn.addEventListener('mousemove', handleMove);
      btn.addEventListener('mouseleave', handleLeave);

      // Store cleanup refs on the element so ctx.revert + manual cleanup both work
      btn._ctaMoveCleanup = () => {
        btn.removeEventListener('mousemove', handleMove);
        btn.removeEventListener('mouseleave', handleLeave);
      };
    }

    return () => {
      xTo?.tween?.kill?.();
      yTo?.tween?.kill?.();
      ctx.revert();
      if (btn && btn._ctaMoveCleanup) {
        btn._ctaMoveCleanup();
        delete btn._ctaMoveCleanup;
      }
    };
  }, []);

  return (
    <section className="es-cta" ref={sectionRef} aria-label="Call to action">
      {/* Decorative parallax blob */}
      <span className="es-cta__decor" ref={decorRef} aria-hidden="true" />

      <div className="container">
        <div className="es-cta__inner">
          <h2 className="es-cta__title">{title}</h2>
          {subtitle && <p className="es-cta__subtitle">{subtitle}</p>}
          <Link
            to={button.to}
            className="es-cta__btn"
            ref={btnRef}
          >
            {button.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
