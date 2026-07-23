# Explore S Redesign — Plan 2: Homepage Rebuild

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the inherited education-template homepage with the approved 9-section "Explore S" design — an asymmetric editorial hero, trust bar, services, about, process timeline, domains marquee, testimonials, CTA band, footer — each with GSAP scroll animation, in the Clean Professional brand language.

**Architecture:** Build one focused section component per task under `src/pages/home/sections/`, each with its own JSX, a smoke test, and styles in a new `_home.scss` partial (using the brand tokens + `--es-*` CSS variables from Plan 1). Wire each new section into `HomeMain.js` as it is built (replacing an old section), so the live preview improves incrementally. All copy lives in one `src/data/homeContent.js` module. Animations use the Plan 1 `src/utils/animations.js` helpers and are `prefers-reduced-motion` safe. A final task does the responsive pass and deletes the obsolete template sections.

**Tech Stack:** React 18 (CRA), SCSS, GSAP + ScrollTrigger (via `src/utils/animations.js`), react-slick (already a dep, for testimonials), React Testing Library + Jest.

## Global Constraints

- **NO-COMMIT mode:** all work stays in the working tree. Do NOT run `git commit`/`git add`. (carried from Plan 1)
- **Tooling is npm** (yarn not installed): build = `npm run build`; tests = `CI=true npm test -- <path>`.
- **Brand tokens only** — never hardcode hex. Use SCSS vars (`$primaryColor` #0D9488, `$titleColor`/`$secondaryColor` #0F2E25, `$bodyColor` #42584F, `$surfaceColor` #F6F8F7, `$accentColor` #F59E0B, `$hairline` #E2E8E5) or the `--es-*` CSS custom properties. Hover/dark-teal accent: #0F766E. (A redesign must NOT reintroduce the old blue palette.)
- Fonts: headings `$titlefont` (Sora/Inter), body `$bodyfont` (Inter).
- **Every animation must honor `prefers-reduced-motion`** — always via the `src/utils/animations.js` helpers (`fadeUp`, `countUp`, `registerGsap`, `prefersReducedMotion`), which already snap to final state when reduced motion is set. Attach GSAP in a `useLayoutEffect` with `gsap.context(..., scopeRef)` and clean up on unmount.
- **Mobile-first responsive**: every section must look correct at 360 / 768 / 1024 / 1440 px. No horizontal overflow.
- Single `<h1>` on the page — it lives in the Hero. All other sections use `<h2>`.
- Preserve business facts: brand "Explore S Research Solutions", email `support@exploresresearchsolutions.in`, phone `+91-9289441168`.
- Reuse `<ResponsiveImage>` (Plan 1) for every image; serve the optimized `.webp` siblings where available (e.g. `2.webp`, `guidance.webp`).
- Each section component: one file, one responsibility, default export, props-driven from `homeContent`. Keep files focused (< ~150 lines).
- Visual polish: follow the approved direction — Clean Professional, generous whitespace, crisp cards with soft shadows (`--es-shadow`), rounded corners (`--es-radius`), large tight-tracked headings. Use the `frontend-design` skill for aesthetic decisions.

## File Structure

- Create: `src/data/homeContent.js` — all homepage copy/data (hero, stats, services, about, process, domains, testimonials, cta).
- Create: `src/pages/home/sections/HeroSection.js`, `TrustBar.js`, `ServicesSection.js`, `AboutSection.js`, `ProcessSection.js`, `DomainsSection.js`, `TestimonialsSection.js`, `CtaBand.js` (+ a `.test.js` beside each).
- Create: `src/assets/scss/_home.scss` — all homepage section styles (imported once in `main.scss`).
- Modify: `src/pages/home/HomeMain.js` — rewire to the new sections (incrementally per task).
- Modify: `src/assets/scss/main.scss` — add `@import 'home';`.
- Delete (final task): obsolete `src/pages/home/SliderSection.js`, `CampusSection.js`, `CourseSection.js`, `EventSection.js`, `CounterSection.js`, and the old `ServiceSection.js`, `AboutSection.js`, `TestimonialSection.js`, `BlogSection.js` once replaced; plus now-orphaned `components/Course/`, `components/Event/`, `data/Courses.json`, `data/Events.json` (deferred from Plan 1).

---

### Task 1: Homepage content module + `_home.scss` scaffold + Hero section

**Files:**
- Create: `src/data/homeContent.js`
- Create: `src/assets/scss/_home.scss`
- Create: `src/pages/home/sections/HeroSection.js`, `src/pages/home/sections/HeroSection.test.js`
- Modify: `src/assets/scss/main.scss` (add `@import 'home';`)
- Modify: `src/pages/home/HomeMain.js` (replace `<HomeSlider />` with `<HeroSection />`)

**Interfaces:**
- Produces: `homeContent` (default export object) with at least `hero`, `stats`, `services`, `about`, `process`, `domains`, `testimonials`, `cta` keys (later tasks consume their slice). `HeroSection` default export — the asymmetric editorial hero, the page's single `<h1>`.

- [ ] **Step 1: Create `src/data/homeContent.js`** — one object with all section copy. Hero slice example (fill the rest with the content used by later tasks; keep copy from the current site where it exists):

```js
const homeContent = {
  hero: {
    eyebrow: 'Academic Research Partner',
    titleLines: ['Your trusted', 'research partner.'],
    highlight: 'research',
    subtitle:
      'Expert PhD research assistance, data analysis, academic writing, and publication support — from first draft to final defense.',
    primaryCta: { label: 'Explore services', to: '/services' },
    secondaryCta: { label: 'Book a consult', to: '/contact' },
    image: { src: '/2.png', webp: '/2.webp', alt: 'Researchers collaborating' },
  },
  stats: [
    { value: 500, suffix: '+', label: 'Projects delivered' },
    { value: 98, suffix: '%', label: 'Acceptance rate' },
    { value: 50, suffix: '+', label: 'Research domains' },
    { value: 12, suffix: '+', label: 'Years of expertise' },
  ],
  services: [
    { title: 'PhD Research Assistance', desc: 'End-to-end guidance from proposal to defense.', to: '/services' },
    { title: 'Data Analysis & Statistics', desc: 'Rigorous quantitative and qualitative analysis.', to: '/services' },
    { title: 'Academic Writing Services', desc: 'Clear, original, publication-ready manuscripts.', to: '/services' },
    { title: 'Publication & Review Support', desc: 'Journal selection, submission, and revisions.', to: '/services' },
  ],
  about: {
    title: 'Welcome to Explore S Research Solutions',
    body:
      'Your trusted partner in academic excellence. Our seasoned experts deliver personalized, high-quality research support across a broad spectrum of disciplines.',
    points: ['Domain experts across 50+ fields', 'Confidential & plagiarism-free', 'On-time delivery, every time'],
    cta: { label: 'Read more about us', to: '/about' },
    image: { src: '/guidance.jpg', webp: '/guidance.webp', alt: 'Academic guidance session' },
  },
  process: {
    title: 'How it works',
    steps: [
      { n: '01', title: 'Consultation', desc: 'Share your requirements and academic goals.' },
      { n: '02', title: 'Expert match', desc: 'We assign a specialist in your field.' },
      { n: '03', title: 'Progress updates', desc: 'Regular check-ins and feedback loops.' },
      { n: '04', title: 'Final delivery', desc: 'Polished work with revision support.' },
    ],
  },
  domains: {
    title: 'Research domains we cover',
    items: ['Engineering', 'Life Sciences', 'Management', 'Computer Science', 'Social Sciences',
            'Medicine & Health', 'Economics', 'Environmental Science', 'Mathematics', 'Education'],
  },
  testimonials: {
    title: 'What scholars say',
    items: [
      { quote: 'They turned my scattered research into a defense-ready thesis.', name: 'A. Sharma', role: 'PhD, Management' },
      { quote: 'Rigorous analysis and on-time delivery. Highly recommended.', name: 'R. Iyer', role: 'PhD, Life Sciences' },
      { quote: 'Clear communication and genuine subject expertise.', name: 'M. Khan', role: 'PhD, Engineering' },
    ],
  },
  cta: {
    title: 'Ready to move your research forward?',
    subtitle: 'Talk to an expert today — no obligation.',
    button: { label: 'Book a consult', to: '/contact' },
  },
};

export default homeContent;
```

- [ ] **Step 2: Create `src/assets/scss/_home.scss`** with a base + hero block. Use tokens; mobile-first. The hero is **asymmetric editorial**: oversized headline (clamp), eyebrow label, an offset image grid on the right (desktop) that stacks below on mobile, primary + secondary CTAs, and a soft decorative gradient blob behind the image. Skeleton:

```scss
.es-home { overflow-x: hidden; }

.es-section { padding: clamp(56px, 8vw, 120px) 0; }
.es-eyebrow {
  font: 700 12px/1 $bodyfont; letter-spacing: .16em; text-transform: uppercase;
  color: $primaryColor; display: inline-block; margin-bottom: 14px;
}
.es-h2 { font: 800 clamp(26px, 4vw, 44px)/1.1 $titlefont; letter-spacing: -.02em; color: $titleColor; margin: 0 0 16px; }

.es-hero {
  position: relative; padding-top: clamp(48px, 7vw, 96px);
  &__grid { display: grid; gap: 40px; grid-template-columns: 1fr; align-items: center; }
  &__title { font: 800 clamp(40px, 8vw, 84px)/1.04 $titlefont; letter-spacing: -.03em; color: $titleColor; margin: 8px 0 18px; }
  &__title em { color: $primaryColor; font-style: normal; }
  &__subtitle { font: 400 clamp(15px, 1.6vw, 18px)/1.6 $bodyfont; color: $bodyColor; max-width: 52ch; margin-bottom: 28px; }
  &__ctas { display: flex; flex-wrap: wrap; gap: 14px; }
  &__media { position: relative; }
  &__blob { position: absolute; inset: -8% -6% auto auto; width: 70%; aspect-ratio: 1; filter: blur(40px);
            background: radial-gradient(closest-side, rgba(13,148,136,.35), transparent); z-index: 0; }
  @media (min-width: 992px) { &__grid { grid-template-columns: 1.05fr .95fr; } }
}
.es-btn {
  display: inline-flex; align-items: center; gap: 8px; font: 600 15px/1 $bodyfont;
  padding: 14px 26px; border-radius: 10px; text-decoration: none; transition: $transition;
  &--primary { background: $primaryColor; color: #fff; &:hover { background: #0F766E; color: #fff; } }
  &--ghost { border: 1.5px solid $primaryColor; color: $primaryColor; &:hover { background: $primaryColor; color: #fff; } }
}
```

Add `@import 'home';` at the end of the partial list in `src/assets/scss/main.scss`.

- [ ] **Step 3: Write the smoke test `src/pages/home/sections/HeroSection.test.js`** (RED — component doesn't exist yet). Hero renders inside a Router (it uses `<Link>`):

```js
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroSection from './HeroSection';

test('hero renders the headline and CTAs', () => {
  render(<MemoryRouter><HeroSection /></MemoryRouter>);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getByText('Explore services')).toBeInTheDocument();
  expect(screen.getByText('Book a consult')).toBeInTheDocument();
});
```

- [ ] **Step 4: Run the test — confirm RED.** `CI=true npm test -- src/pages/home/sections/HeroSection.test.js` → FAIL (Cannot find module './HeroSection').

- [ ] **Step 5: Implement `src/pages/home/sections/HeroSection.js`.** Render the `<h1>` from `homeContent.hero.titleLines` (wrap the `highlight` word in `<em>`), eyebrow, subtitle, the two CTAs as `<Link className="es-btn ...">`, and the media (`<ResponsiveImage eager>` for the hero image — it is LCP, so eager + the webp) inside `&__media` with the `&__blob`. Attach GSAP in `useLayoutEffect`:

```js
import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { registerGsap, prefersReducedMotion } from '../../../utils/animations';
import ResponsiveImage from '../../../components/ResponsiveImage';
import homeContent from '../../../data/homeContent';

const HeroSection = () => {
  const root = useRef(null);
  const { eyebrow, titleLines, highlight, subtitle, primaryCta, secondaryCta, image } = homeContent.hero;
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-rise]', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12 });
      gsap.from('[data-hero-media]', { y: 30, opacity: 0, scale: 0.98, duration: 1, ease: 'power3.out', delay: 0.15 });
    }, root);
    return () => ctx.revert();
  }, []);
  // ...render: each text element gets data-hero-rise; media wrapper gets data-hero-media...
};
export default HeroSection;
```

(Render the title so the `highlight` word is wrapped: e.g. map `titleLines`, replacing `highlight` with `<em>{highlight}</em>`.)

- [ ] **Step 6: Run the test — confirm GREEN.** `CI=true npm test -- src/pages/home/sections/HeroSection.test.js` → PASS (3 assertions), output pristine.

- [ ] **Step 7: Wire into `HomeMain.js`.** Add `import HeroSection from './sections/HeroSection';`, wrap the page in `<div className="es-home">`, and replace `<HomeSlider />` with `<HeroSection />`. Leave the other old sections for now.

- [ ] **Step 8: Build.** `npm run build` → Compiled, no errors. (Manual: load http://localhost:3000 — hero shows new headline, teal CTAs, animates in.)

---

### Task 2: Trust bar (animated count-up stats)

**Files:**
- Create: `src/pages/home/sections/TrustBar.js`, `src/pages/home/sections/TrustBar.test.js`
- Modify: `src/assets/scss/_home.scss` (add `.es-trust` block), `src/pages/home/HomeMain.js` (insert `<TrustBar />` after Hero)

**Interfaces:**
- Consumes: `homeContent.stats`, `countUp` from `utils/animations`.
- Produces: `TrustBar` default export — a 4-up stat strip that counts up on scroll into view.

- [ ] **Step 1: Smoke test (RED).** `TrustBar.test.js`: renders all 4 stat labels and, with reduced motion mocked on, the final numbers. Mock `window.matchMedia` → reduce=true so `countUp` snaps to final value synchronously:

```js
import { render, screen } from '@testing-library/react';
import TrustBar from './TrustBar';
beforeEach(() => { window.matchMedia = jest.fn().mockImplementation(q => ({ matches: true, media: q, addEventListener(){}, removeEventListener(){} })); });
test('shows all stat labels and final values', () => {
  render(<TrustBar />);
  expect(screen.getByText('Projects delivered')).toBeInTheDocument();
  expect(screen.getByText(/500/)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run → RED** (`Cannot find module './TrustBar'`). Command: `CI=true npm test -- src/pages/home/sections/TrustBar.test.js`.

- [ ] **Step 3: Implement `TrustBar.js`.** Render each stat as `{value}{suffix}` + label. On mount, for each stat number ref, call `countUp(el, value)` (it no-ops to final value under reduced motion, and animates on scroll otherwise). Render the suffix as a separate sibling span so `countUp` only drives the number text node. Use `useLayoutEffect` + cleanup (`ScrollTrigger` tweens via `gsap.context`).

- [ ] **Step 4: Run → GREEN.** Same command. PASS, pristine.

- [ ] **Step 5: Style `.es-trust`** in `_home.scss`: a card/band with 4 columns (grid, 2-cols on mobile), big teal numbers (`font: 800 clamp(28px,4vw,44px) $titlefont; color: $primaryColor`), muted labels, `--es-shadow`, `--es-radius`, sitting slightly overlapping the hero (negative top margin on desktop) for an editorial feel.

- [ ] **Step 6: Wire + build.** Insert `<TrustBar />` after `<HeroSection />` in HomeMain. `npm run build` → compiled, no errors.

---

### Task 3: Services section (staggered cards)

**Files:**
- Create: `src/pages/home/sections/ServicesSection.js` + `.test.js`
- Modify: `_home.scss` (`.es-services`), `HomeMain.js` (replace old `<Service />`)

**Interfaces:**
- Consumes: `homeContent.services`, `fadeUp` from `utils/animations`.
- Produces: `ServicesSection` default export — section title + 4 cards (title, desc, "View details" link), staggered reveal, hover lift.

- [ ] **Step 1: Smoke test (RED).** Renders the section heading "Our Expertise, Your Success" (h2) and all 4 service titles; wrap in `MemoryRouter` (cards link to `/services`).
- [ ] **Step 2: Run → RED.**
- [ ] **Step 3: Implement.** `<section className="es-section es-services">` with `.es-eyebrow` + `<h2 className="es-h2">Our Expertise, Your Success</h2>`, a responsive grid of 4 `.es-card`s from `homeContent.services`. Use `fadeUp(root.current, '.es-card', { stagger: 0.12 })` in `useLayoutEffect` (handles reduced motion). Each card: icon/number, title, desc, `<Link>` "View details".
- [ ] **Step 4: Run → GREEN.**
- [ ] **Step 5: Style `.es-services` / `.es-card`** — grid (1/2/4 cols at 360/768/1024), white cards, `--es-shadow`, `--es-radius`, `1px solid $hairline`, `transition: transform .2s`; `&:hover { transform: translateY(-6px); }`; accent top-border or icon in `$primaryColor`.
- [ ] **Step 6: Wire + build.** Replace `<Service />` with `<ServicesSection />` in HomeMain. `npm run build` → ok.

---

### Task 4: About section (reveal)

**Files:**
- Create: `src/pages/home/sections/AboutSection.js` + `.test.js`
- Modify: `_home.scss` (`.es-about`), `HomeMain.js` (replace old `<About />`)

**Interfaces:**
- Consumes: `homeContent.about`, `fadeUp`, `<ResponsiveImage>`.
- Produces: `AboutSection` default export — split layout: image left (reveal), copy + bullet points + CTA right (lines slide in).

- [ ] **Step 1: Smoke test (RED).** Renders the about title (h2), the 3 bullet points, and the "Read more about us" link (in `MemoryRouter`).
- [ ] **Step 2: Run → RED.**
- [ ] **Step 3: Implement.** Two-column grid (stacks on mobile). Left: `<ResponsiveImage>` with the about webp inside a rounded, shadowed frame. Right: eyebrow, `<h2>`, body, a `<ul>` of `points` (teal check markers), CTA `<Link className="es-btn es-btn--primary">`. Animate with `fadeUp(root.current, '[data-about-rise]', { stagger: 0.1 })`.
- [ ] **Step 4: Run → GREEN.**
- [ ] **Step 5: Style `.es-about`** — `grid-template-columns: 1fr` mobile → `.9fr 1.1fr` at ≥992px; image frame `--es-radius`/`--es-shadow`; checklist with `$primaryColor` markers.
- [ ] **Step 6: Wire + build.** Replace `<About />` with the new section. `npm run build` → ok.

---

### Task 5: Process section (ScrollTrigger progress timeline)

**Files:**
- Create: `src/pages/home/sections/ProcessSection.js` + `.test.js`
- Modify: `_home.scss` (`.es-process`), `HomeMain.js` (replace `<HowItWorks />`)

**Interfaces:**
- Consumes: `homeContent.process`, gsap + `registerGsap`/`prefersReducedMotion`.
- Produces: `ProcessSection` default export — 4-step horizontal (desktop) / vertical (mobile) timeline; a connecting line that draws/fills as the section scrolls into view, steps fading in in sequence.

- [ ] **Step 1: Smoke test (RED).** Renders "How it works" (h2) and all 4 step titles (Consultation, Expert match, Progress updates, Final delivery).
- [ ] **Step 2: Run → RED.**
- [ ] **Step 3: Implement.** Steps from `homeContent.process.steps` (number badge, title, desc). A progress line element (`.es-process__line-fill`) animated via GSAP `scrollTrigger` with `scrub` (scaleX 0→1 on desktop, scaleY on mobile) plus staggered step reveal. Guard with `prefersReducedMotion()` (set line to final scale, show steps) and `gsap.context` cleanup. Do NOT use `pin` (avoids layout jank on mobile) — a scrubbed progress line is the chosen effect.
- [ ] **Step 4: Run → GREEN.**
- [ ] **Step 5: Style `.es-process`** — desktop: 4 columns with a horizontal track behind the number badges; mobile: vertical track on the left. Number badges in `$primaryColor`; track base `$hairline`, fill `$primaryColor`.
- [ ] **Step 6: Wire + build.** Replace `<HowItWorks />` with `<ProcessSection />`. `npm run build` → ok.

---

### Task 6: Domains marquee

**Files:**
- Create: `src/pages/home/sections/DomainsSection.js` + `.test.js`
- Modify: `_home.scss` (`.es-domains`), `HomeMain.js` (replace `<Campus />` and `<Course />` with this single section)

**Interfaces:**
- Consumes: `homeContent.domains`, gsap.
- Produces: `DomainsSection` default export — section title + an infinite horizontal marquee of domain chips (two rows, opposite directions), CSS-driven, pausing on hover.

- [ ] **Step 1: Smoke test (RED).** Renders "Research domains we cover" (h2) and at least the first few domain names (e.g. "Engineering", "Life Sciences"). Note: if the marquee duplicates items for seamless looping, use `getAllByText(...).length >= 1`.
- [ ] **Step 2: Run → RED.**
- [ ] **Step 3: Implement.** Two marquee rows; each row renders `items` twice (for a seamless loop). Prefer a **pure CSS** keyframe marquee (`@keyframes es-marquee { to { transform: translateX(-50%); } }`) so it needs no JS and is reduced-motion-safe via `@media (prefers-reduced-motion: reduce) { animation: none; }`. Chips: pill style, `$surfaceColor` bg, `1px solid $hairline`, hover → `$primaryColor` text/border.
- [ ] **Step 4: Run → GREEN.**
- [ ] **Step 5: Style `.es-domains`** including the marquee keyframes, row masks (fade edges with a gradient), and the reduced-motion stop.
- [ ] **Step 6: Wire + build.** Remove `<Campus />` and `<Course />` from HomeMain, insert `<DomainsSection />` in their place. `npm run build` → ok.

---

### Task 7: Testimonials carousel

**Files:**
- Create: `src/pages/home/sections/TestimonialsSection.js` + `.test.js`
- Modify: `_home.scss` (`.es-testimonials`), `HomeMain.js` (replace old `<Testimonial />`)

**Interfaces:**
- Consumes: `homeContent.testimonials`, `react-slick` (already a dep; slick CSS is already loaded via the CDN links in `public/index.html`).
- Produces: `TestimonialsSection` default export — heading + a slick carousel of quote cards (quote, name, role), autoplay, fade.

- [ ] **Step 1: Smoke test (RED).** Renders "What scholars say" (h2) and at least one quote's author name. (react-slick renders all slides in the DOM, so `getByText` for an author works; if duplicated by clones use `getAllByText(...)[0]`.)
- [ ] **Step 2: Run → RED.**
- [ ] **Step 3: Implement.** `import Slider from 'react-slick';` with settings `{ dots: true, arrows: false, infinite: true, autoplay: true, autoplaySpeed: 5000, fade: true, slidesToShow: 1, pauseOnHover: true }`. Map `testimonials.items` to quote cards. (No extra slick CSS import needed — it's already in index.html.)
- [ ] **Step 4: Run → GREEN.**
- [ ] **Step 5: Style `.es-testimonials`** — centered, large serif-ish quote (use `$titlefont`), author name in `$titleColor`, role in `$bodyColor`, teal dots. Card on `$surfaceColor` or white with `--es-shadow`.
- [ ] **Step 6: Wire + build.** Replace `<Testimonial />` with `<TestimonialsSection />`. `npm run build` → ok.

---

### Task 8: CTA band (parallax + magnetic button)

**Files:**
- Create: `src/pages/home/sections/CtaBand.js` + `.test.js`
- Modify: `_home.scss` (`.es-cta`), `HomeMain.js` (replace `<ContactUs />`)

**Interfaces:**
- Consumes: `homeContent.cta`, gsap.
- Produces: `CtaBand` default export — full-width teal band, headline + subtitle + single strong CTA; subtle parallax on the background and a magnetic hover on the button (both reduced-motion-guarded).

- [ ] **Step 1: Smoke test (RED).** Renders the CTA title "Ready to move your research forward?" and the button label "Book a consult" (in `MemoryRouter`).
- [ ] **Step 2: Run → RED.**
- [ ] **Step 3: Implement.** Full-bleed band (`background: linear-gradient(120deg, $titleColor, $primaryColor)`, white text), centered content, `<Link>` button. Magnetic effect: on `mousemove` over the button, translate it toward the cursor a few px (gsap quickTo), reset on leave — only when `!prefersReducedMotion()`. Optional gsap parallax on a decorative layer via scrollTrigger scrub. Clean up listeners on unmount.
- [ ] **Step 4: Run → GREEN.**
- [ ] **Step 5: Style `.es-cta`** — full-width band (break out of container or use a full-width wrapper), generous padding, white button with `$primaryColor` text, large heading.
- [ ] **Step 6: Wire + build.** Replace `<ContactUs />` with `<CtaBand />`. `npm run build` → ok.

---

### Task 9: Final assembly — order, responsive pass, footer reveal, cleanup

**Files:**
- Modify: `src/pages/home/HomeMain.js` (final section order), `src/assets/scss/_home.scss` (responsive fixes), `src/components/Footer/*` (subtle reveal — optional, low-risk)
- Delete: obsolete `src/pages/home/SliderSection.js`, `CampusSection.js`, `CourseSection.js`, `EventSection.js`, `CounterSection.js`, old `ServiceSection.js`, `AboutSection.js`, `TestimonialSection.js`, `BlogSection.js`; then now-orphaned `src/components/Course/`, `src/components/Event/`, `src/data/Courses.json`, `src/data/Events.json` (deferred from Plan 1).

**Interfaces:**
- Consumes: all Task 1–8 sections.
- Produces: a `HomeMain` rendering exactly, in order: Hero → TrustBar → Services → About → Process → Domains → Testimonials → CtaBand → (existing Footer) → ScrollToTop. No references to deleted sections.

- [ ] **Step 1: Set final order in `HomeMain.js`** — imports + render order per the Interfaces above. Remove every import/usage of the old sections. Ensure the existing `<Footer>` (rendered by the page `index.js` or add it here if not already present) follows the CtaBand.
- [ ] **Step 2: Confirm no dangling imports.** Run: `grep -rnE "SliderSection|CampusSection|CourseSection|EventSection|CounterSection|BlogSection" src/pages/home/HomeMain.js` → expect no matches.
- [ ] **Step 3: Delete obsolete section files** with `rm` (NOT git rm). Then run the Plan-1-style grep guard before deleting `components/Course`, `components/Event`, `data/Courses.json`, `data/Events.json`:
  `grep -rn -E "components/(Course|Event)|Courses\.json|Events\.json" src` → must be empty before deleting them.
- [ ] **Step 4: Build.** `npm run build` → Compiled, no "Module not found".
- [ ] **Step 5: Responsive + reduced-motion pass.** In `_home.scss`, fix any overflow / cramped spacing at 360/768/1024/1440. Verify (note in the report) the page has exactly one `<h1>`, no horizontal scrollbar, and that with `prefers-reduced-motion: reduce` all sections render in their final state (no missing/invisible content). Add a subtle `fadeUp` reveal to the footer if low-risk.
- [ ] **Step 6: Full test + build.** `CI=true npm test -- src/pages/home` (all section smoke tests pass) and `npm run build` (clean). Report final section list and the responsive/reduced-motion verification.

---

## Self-Review Notes

- **Spec coverage:** blueprint sections 01–09 → Tasks 1–9 (Hero=1, TrustBar=2, Services=3, About=4, Process=5, Domains=6, Testimonials=7, CTA=8, footer+assembly=9). All use brand tokens + reduced-motion-safe GSAP per Global Constraints.
- **No placeholders:** content lives in `homeContent.js` (Task 1); each task has a concrete smoke test and explicit wiring + build step. CSS values within tasks are intentionally given as token-based skeletons with design latitude (visual polish per the approved Clean Professional direction / `frontend-design` skill) rather than pixel-frozen — this is deliberate for visual work, not a placeholder.
- **Incremental wiring:** each task swaps one new section into `HomeMain` so the live preview improves task-by-task and the build stays green throughout.
- **Deferred to Plan 3:** Header/navbar restyle (+ adding "Domain" to the menu), and the About/Services/Domain/Contact/PayNow inner pages. Deferred to Plan 4: per-page `<Seo>` wiring, JSON-LD, sitemap/robots, react-snap, `3.mp4` handling, Lighthouse pass.
