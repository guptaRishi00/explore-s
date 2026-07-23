# Explore S Research Solutions — Website Redesign

**Date:** 2026-06-29
**Status:** Design approved (pending written-spec review)

## 1. Goal & Context

Redesign the existing **Explore S Research Solutions** site (a PhD/academic research-writing service) from the inherited "echooling" education template into a distinctive, modern, animation-rich, SEO-optimized, fully responsive site.

The current site is a Create React App (CRA) project (React 18, Bootstrap 5, SCSS) carrying heavy template cruft (courses, instructors, events, blog, auth) and severe performance problems (multi-megabyte unoptimized media in `public/`).

**Constraints**
- Stay on CRA (no framework migration).
- Do **not** push/commit to the GitHub remote. Local commits of design/spec docs are fine.
- Preserve the real business content, contact details, and existing integrations (EmailJS contact form, Meta Pixel, payment page).

## 2. Approved Decisions

| Area | Decision |
|------|----------|
| Redesign scope | **Full visual overhaul** — new design language |
| Pages kept | **Home, About, Services + Service Detail, Domain, Contact, Pay Now** |
| Pages removed | Course(s), Instructor(s), Event(s), Blog, Login/Signup, home-2, home-3 |
| Animation | **GSAP + ScrollTrigger** (replacing wowjs / animate.css) |
| SEO | **Stay CRA, optimize hard** (per-page meta, JSON-LD, sitemap, image optimization, lazy-load, prerender) |
| Visual direction | **C · Clean Professional** |
| Hero layout | **D · Asymmetric editorial** |

## 3. Visual Design Language ("Clean Professional")

- **Palette**
  - Primary / brand: emerald-teal `#0D9488`
  - Deep ink / headings: `#0F2E25`
  - Body text: `#42584F`
  - Surface base (light): `#F6F8F7`
  - White: `#FFFFFF`
  - Accent (sparingly, for highlights/CTAs): amber `#F59E0B`
  - Borders/hairlines: `#E2E8E5`
- **Typography**
  - Headings: a crisp geometric sans — **Inter** (or Sora for display headlines), weights 700–800, tight letter-spacing (`-0.02em`).
  - Body: **Inter**, 400/500.
  - Replaces the current `Source Sans Pro`. Self-host or load via a single optimized Google Fonts `<link>` with `display=swap`.
- **Tone:** airy, generous whitespace, crisp cards with soft shadows, large headlines, calm and credible.
- These tokens are defined once in `_variables.scss` (SCSS variables + matching CSS custom properties on `:root` so GSAP/JS can read them).

## 4. Animation System (GSAP)

- Add `gsap` dependency; remove `wowjs`. Keep `animate.css` only if still referenced elsewhere, otherwise drop the CDN link.
- Create a small **animation utility module** (`src/utils/animations.js` or a `useGsap` hook) that registers `ScrollTrigger` once and exposes reusable helpers: `fadeUp`, `stagger`, `countUp`, `parallax`, `revealMask`, `marquee`, `pinTimeline`.
- Animations are attached per-component via `useLayoutEffect` + `gsap.context(... , ref)` for safe cleanup (StrictMode-safe).
- **Respect `prefers-reduced-motion`**: when set, disable transforms/parallax and snap elements to their final state (accessibility + SEO/UX).
- Per-section animation plan defined in §5.

## 5. Homepage Section Blueprint (approved)

| # | Section | Content | Animation |
|---|---------|---------|-----------|
| 01 | **Hero** (asymmetric editorial) | Oversized headline ("Your trusted research partner." / "We can write anything for you."), eyebrow, primary CTA (Explore services) + secondary (Book a call), offset image grid | Staggered headline line reveal, image-grid parallax, animated gradient blob |
| 02 | **Trust bar** | Stats: projects delivered, acceptance rate, domains, years | Count-up on scroll into view |
| 03 | **Services** | 4 cards: PhD Research Assistance · Data Analysis & Statistics · Academic Writing · Publication & Review Support | Staggered fade+rise, hover lift/tilt |
| 04 | **About** | Welcome intro, trust copy, link to About page | Image reveal mask, text lines slide-in |
| 05 | **Process** | 3–4 steps: Consult → Plan → Execute → Deliver | ScrollTrigger pinned timeline / progress line draw |
| 06 | **Domains** | Marquee/grid of research disciplines | Infinite marquee, hover highlight |
| 07 | **Testimonials** | Carousel of scholar quotes | Auto-slide, fade transitions (reuse react-slick) |
| 08 | **CTA band** | Full-width emerald band, single strong CTA → Contact | Parallax background, magnetic button hover |
| 09 | **Footer** | Contact, quick links, email, phone, social, copyright | Subtle reveal on scroll |

Header: sticky modern navbar (logo left; Home · About · Services · Domain · Contact; **Pay Now** as a pill button), with a slim topbar above it carrying the existing phone (`+91-9289441168`) and email (`support@exploresresearchsolutions.in`). On mobile the topbar collapses and the nav becomes a slide-in drawer.

## 6. Page-by-Page Plan

- **Home** — rebuilt per §5. Replace `SliderSection`, `CampusSection`, `EventSection` with new Hero, Process, Domains sections. Reuse data from `src/data/*.json` where present.
- **About** — restyle to new language; mission/vision, team/expertise, why-trust-us, CTA.
- **Services** + **Service Detail** — card grid → detail pages driven by `Services.json`. New card and detail styling.
- **Domain** — research domains grid, driven by `Domains.json`.
- **Contact** — keep EmailJS integration; restyle form, add map/contact cards, validation states.
- **Pay Now** — keep payment flow/integration; restyle to match.
- **404** — restyle lightly.

## 7. Routing & Cleanup

- Remove routes and page folders for: `home-2`, `home-3`, `course*`, `instructor*`, `event*`, `blog*`, `authentication` (login/signup). Remove now-dead components (`Course/*`, `Event/*`, `Blog/*`, `Team` if unused, etc.) and their data files once confirmed unreferenced.
- Update `Header/MenuItems.js` to the new nav.
- Update SCSS `main.scss` imports — drop styles for removed sections, add new partials (`_hero.scss`, `_process.scss`, `_domains-marquee.scss`, `_trustbar.scss`, `_cta-band.scss`, `_tokens.scss`).

## 8. SEO Optimization Plan (CRA)

1. **Per-page metadata** via `react-helmet` (already a dependency): unique `<title>`, `<meta description>`, canonical, Open Graph + Twitter cards per route. Centralize in a `<Seo>` component.
2. **Structured data (JSON-LD):** `Organization` + `ProfessionalService` on home; `Service` on service pages; `BreadcrumbList`; `WebSite` with sitelinks search where relevant.
3. **`public/index.html`:** fix the generic description, add lang, theme-color, proper OG defaults, preconnect for fonts.
4. **Crawlability:** generate `sitemap.xml`, fix `robots.txt`, ensure semantic headings (single `<h1>` per page), descriptive `alt` text, accessible link text.
5. **Prerendering:** add `react-snap` (postbuild) so crawlers/social get static HTML for each kept route — the practical SSR substitute on CRA.
6. **Semantic HTML & a11y:** landmarks (`header/main/nav/footer`), focus states, color-contrast check against the palette.

## 9. Performance / Core Web Vitals

- **Critical:** the `public/` mega-assets (`guidance.jpg` ~20MB, `2.png` ~13MB, `3.mp4` ~20MB, `1.jpeg` ~3.8MB, `payment.jpg`) must be compressed and converted to modern formats (WebP/AVIF), resized to actual display dimensions, and served responsively (`srcset`/`sizes`). Target hero image < 200KB.
- Lazy-load below-the-fold images (`loading="lazy"`) and the testimonial/marquee media.
- Code-split routes with `React.lazy` + `Suspense`.
- Defer/trim third-party scripts where possible; keep Meta Pixel but load non-blocking.
- Self-host fonts or limit to needed weights; `font-display: swap`.
- Re-run Lighthouse before/after; goal: green LCP/CLS/INP on mobile.

## 10. Component Boundaries

Each section is an isolated component with a single purpose, its own SCSS partial, and data passed via props/JSON — independently understandable and testable. New shared pieces:
- `<Seo>` — meta/JSON-LD wrapper.
- `useGsap` / `animations.js` — animation helpers.
- `<ResponsiveImage>` — `srcset`/WebP/lazy wrapper used everywhere images appear.
- `<SectionTitle>` — reuse/restyle existing.

## 11. Out of Scope (YAGNI)

- No backend/CMS changes; content stays in `src/data/*.json`.
- No framework migration (no Next.js).
- No new business features (booking system, dashboards) — CTAs link to Contact/Pay Now.
- No multi-language.

## 12. Risks / Open Questions

- **GSAP + React StrictMode** double-invoke — mitigated via `gsap.context` cleanup.
- **react-snap** can choke on some dynamic code; verify each route prerenders.
- Real testimonial/stat content needed — placeholders used until provided.
- Image re-optimization needs the original high-res sources kept somewhere safe before compression.

## 13. Verification

- `yarn build` succeeds; `react-snap` emits static HTML per route.
- Manual responsive pass at 360 / 768 / 1024 / 1440 widths.
- Lighthouse (mobile) Performance, SEO, Accessibility, Best-Practices ≥ 90.
- `prefers-reduced-motion` honored.
- All kept pages render with correct meta + no broken links to removed routes.
