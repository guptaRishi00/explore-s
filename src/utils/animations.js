import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;
export function registerGsap() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;

  // Async content (images, web fonts) can finish loading AFTER the remaining
  // ScrollTrigger-based animations (countUp stat counters, ProcessSection,
  // CtaBand) are created, shifting the page layout and leaving their cached
  // start/end positions stale. Recalculate once everything has loaded.
  // (fadeUp no longer relies on ScrollTrigger — see below.)
  if (typeof window !== 'undefined') {
    const refresh = () => ScrollTrigger.refresh();
    if (document.readyState === 'complete') {
      refresh();
    } else {
      window.addEventListener('load', refresh, { once: true });
    }
    if (document.fonts && typeof document.fonts.ready?.then === 'function') {
      document.fonts.ready.then(refresh);
    }
  }
}

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

// Reveal elements matching `selector` within `scope` (a DOM node/ref) as they
// scroll into view.
//
// This intentionally uses IntersectionObserver (not ScrollTrigger) to decide
// WHEN to reveal. ScrollTrigger caches each trigger's start/end position when it
// is created, and this app creates those triggers during a fragile window —
// behind a 500ms <Preloader> that reflows the page, under React.StrictMode
// (which mounts → reverts → re-mounts every effect), and before images/fonts
// finish loading. Any of those shift the layout after the positions are cached,
// so the reveal could silently never fire and content stayed stuck at
// opacity:0 ("data sometimes not visible"). IntersectionObserver is evaluated
// by the browser against the LIVE layout, so it is immune to all of that and
// always fires when the element is actually on screen. gsap still performs the
// tween, so the visual (fade + rise + stagger) is unchanged.
export function fadeUp(scope, selector, opts = {}) {
  if (!scope || typeof scope.querySelectorAll !== 'function') return null;
  const nodes = Array.from(scope.querySelectorAll(selector));
  if (nodes.length === 0) return null;

  const reveal = () => {
    gsap.to(nodes, {
      y: 0,
      opacity: 1,
      duration: opts.duration ?? 0.8,
      ease: opts.ease ?? 'power3.out',
      stagger: opts.stagger ?? 0.12,
      overwrite: 'auto',
    });
  };

  // Reduced-motion or no IntersectionObserver support → show immediately.
  if (prefersReducedMotion() || typeof IntersectionObserver !== 'function') {
    nodes.forEach((n) => {
      n.style.opacity = '1';
      n.style.transform = 'none';
    });
    return null;
  }

  // Hidden starting state — set before paint (called from useLayoutEffect).
  gsap.set(nodes, { y: opts.y ?? 40, opacity: 0 });

  let revealed = false;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      if (!revealed && entries.some((e) => e.isIntersecting)) {
        revealed = true;
        obs.disconnect();
        reveal();
      }
    },
    // Fire as soon as any part of the section enters, nudged up ~10% so the
    // reveal starts just before it is fully in view (mirrors the old feel).
    { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0 }
  );
  observer.observe(scope);

  // Matches the existing callers' cleanup contract: `ctx?.revert?.()`.
  return {
    revert() {
      observer.disconnect();
      if (!revealed) gsap.set(nodes, { clearProps: 'opacity,transform' });
    },
  };
}

// Count an element's text 0 -> end when it scrolls into view.
export function countUp(el, end, opts = {}) {
  if (!el) return null;
  if (prefersReducedMotion()) {
    el.textContent = String(end);
    return null;
  }
  registerGsap();
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: end,
    duration: opts.duration ?? 2,
    ease: 'power1.out',
    snap: { val: 1 },
    onUpdate: () => { el.textContent = String(Math.round(obj.val)); },
    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
  });
}
