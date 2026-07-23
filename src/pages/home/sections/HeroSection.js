import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { registerGsap, prefersReducedMotion } from '../../../utils/animations';
import homeContent from '../../../data/homeContent';

const HeroSection = () => {
  const root = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const { eyebrow, title, titleSegments, subtitle, primaryCta, secondaryCta, video } =
    homeContent.hero;

  // Autoplay on first load — browsers only allow autoplay when muted.
  // If the browser still blocks it, the poster + play button remain as fallback.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    const attempt = el.play();
    if (attempt && typeof attempt.catch === 'function') {
      attempt.catch(() => {});
    }
  }, []);

  const unmute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    setMuted(false);
    if (el.paused) {
      el.play();
    }
  };

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    // First interaction while auto-playing muted: just turn the sound on,
    // don't pause — otherwise the tap feels broken.
    if (el.muted) {
      unmute();
      return;
    }
    if (el.paused) {
      el.play();
    } else {
      el.pause();
    }
  };

  const renderTitle = () => {
    if (!titleSegments) return title;
    return titleSegments.map((seg, i) =>
      seg.c ? (
        <span key={i} className={`es-hero__hl es-hero__hl--${seg.c}`}>
          {seg.t}
        </span>
      ) : (
        <span key={i}>{seg.t}</span>
      )
    );
  };

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-rise]', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
      });
      gsap.from('[data-hero-media]', {
        y: 30,
        opacity: 0,
        scale: 0.98,
        duration: 1,
        ease: 'power3.out',
        delay: 0.15,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="es-hero es-section" ref={root} aria-label="Hero">
      <div className="es-hero__bg" aria-hidden="true" />
      <div className="container">
        <div className="es-hero__grid">
          <div className="es-hero__copy">
            <span className="es-tag" data-hero-rise>{eyebrow}</span>
            <h1 className="es-hero__title" data-hero-rise>{renderTitle()}</h1>
            <p className="es-hero__subtitle" data-hero-rise>{subtitle}</p>
            <div className="es-hero__ctas" data-hero-rise>
              <Link to={primaryCta.to} className="es-btn es-btn--accent">
                {primaryCta.label}
              </Link>
              <Link to={secondaryCta.to} className="es-btn es-btn--ghost-light">
                {secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="es-hero__media" data-hero-media>
            <div className="es-hero__blob" aria-hidden="true" />
            <div className={`es-hero__video-wrap${playing ? ' is-playing' : ''}`}>
              <video
                ref={videoRef}
                className="es-hero__video"
                src={video.src}
                poster={video.poster}
                playsInline
                preload="metadata"
                onClick={togglePlay}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
              />
              <button
                type="button"
                className="es-hero__playbtn"
                onClick={togglePlay}
                aria-label={playing ? 'Pause video' : 'Play video'}
                aria-pressed={playing}
              >
                {playing ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7L8 5Z" />
                  </svg>
                )}
              </button>
              {muted && (
                <button
                  type="button"
                  className="es-hero__unmute"
                  onClick={unmute}
                  aria-label="Turn sound on"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                  Tap for sound
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
