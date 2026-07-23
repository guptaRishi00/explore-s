# Explore S Redesign — Plan 3: Inner Pages + Header/Footer

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the inner pages (About, Services + Service Detail, Domain, Contact, Pay Now, 404) and the global Header/Footer up to the homepage's design language — the `.es-*` primitives, brand tokens, GSAP scroll reveals, and `<ResponsiveImage>` — while preserving all existing content and functionality (EmailJS contact form, the Pay Now payment flow, all business copy).

**Architecture:** These pages already exist and already render teal (from the Plan 1 color sweep); this is a **restyle + polish**, not a rebuild. Each page is composed of section components under `src/pages/<page>/`. For each, wrap section content in the shared `.es-section` / `.es-eyebrow` / `.es-h2` primitives (defined in `_home.scss`), restyle cards/forms/lists to the brand card style, add reduced-motion-safe `fadeUp` reveals via `src/utils/animations.js`, and swap raw `<img>` for `<ResponsiveImage>`. Section-specific styles live in the existing partials (`_about*`/`_mission-vision`/`_services`/`_domains`/`_contact`/`_contact-page`/PayNow.scss); promote shared primitives rather than duplicating. The Header gets a structural cleanup (remove dead template menus, add Domain) plus a modern sticky restyle; the Footer gets a restyle.

**Tech Stack:** React 18 (CRA), SCSS, GSAP via `src/utils/animations.js`, react-slick (existing testimonial reuse), EmailJS (existing, untouched logic), React Testing Library + Jest.

## Global Constraints

- **NO-COMMIT mode:** all work stays in the working tree. No `git commit`/`git add`. Use `rm` (not `git rm`) for any deletion.
- **npm tooling:** build = `npm run build`; tests = `CI=true npm test -- <path>`.
- **Brand tokens only** — never hardcode hex; never reintroduce old blue (`#3270fc`/`#00306e`/rgb 50,112,252 / 0,48,110). Use `$primaryColor`#0D9488, `$titleColor`#0F2E25, `$bodyColor`#42584F, `$surfaceColor`#F6F8F7, `$accentColor`#F59E0B, `$hairline`#E2E8E5, `$whiteColor`, `$titlefont`, `$bodyfont`; `--es-*` vars. Neutral black-shadow rgba is acceptable.
- **Reuse the homepage primitives**: `.es-section`, `.es-eyebrow`, `.es-h2`, `.es-btn`, `.es-card` (in `_home.scss`). Do NOT redefine them. If a primitive needs to be shared more broadly, that's fine — they already live in an imported partial.
- **One `<h1>` per page** — each inner page gets exactly one (the page's main title); subsequent sections use `<h2>`/`<h3>`. (The homepage's h1 is in the hero; inner pages are separate routes, so each needs its own single h1.)
- **Every animation honors `prefers-reduced-motion`** via the `animations.js` helpers (they snap to final state). Attach GSAP in `useLayoutEffect` + `gsap.context(...)` cleanup; guard ScrollTrigger with `typeof window.matchMedia === 'function'`.
- **Preserve functionality**: the EmailJS contact form must keep working (do not change its send logic / service IDs); the Pay Now payment methods + modals must keep working; all phone/email/business copy preserved (`support@exploresresearchsolutions.in`, `+91-9289441168`).
- **Mobile-first**, no horizontal page scrollbar, at 360/768/1024/1440.
- Use `<ResponsiveImage>` for content images (lazy by default; `eager` only for an above-the-fold page banner image).

## File Structure

- Modify: `src/components/Header/index.js`, `src/components/Header/MenuItems.js`, `src/components/Footer/index.js` (+ `FooterTwo.js` if used).
- Create: `src/assets/scss/_header.scss`, `src/assets/scss/_inner.scss` (shared inner-page primitives: page banner, prose, form fields) — import both in `main.scss`.
- Modify: section components under `src/pages/about/`, `src/pages/services/`, `src/pages/domain/`, `src/pages/contact/`, `src/pages/paynow/`, and `src/pages/404.js`.
- Modify: the section SCSS partials as needed (`_mission-vision.scss`, `_services.scss`, `_domains.scss`, `_contact.scss`, `_contact-page.scss`, `paynow/PayNow.scss`).

---

### Task 1: Header restyle + nav cleanup + Footer restyle

**Files:**
- Modify: `src/components/Header/MenuItems.js`, `src/components/Header/index.js`, `src/components/Footer/index.js`
- Create: `src/assets/scss/_header.scss`; Modify: `src/assets/scss/main.scss` (add `@import 'header';`)
- Create: `src/components/Header/Header.test.js`

**Interfaces:**
- Produces: a sticky, modern, token-styled header whose nav is exactly Home · About · Services · Domain · Contact + a **Pay Now** pill button; a slim topbar with phone/email; a working mobile drawer toggle. Footer restyled to brand. No dead links remain.

- [ ] **Step 1: Smoke test (RED).** `Header.test.js`: render `<Header />` in `<MemoryRouter>`; assert nav links Home, About, Services, **Domain**, Contact, and a Pay Now link are present, and that NO link points to `/course`, `/event`, `/instructor`, `/blog`.
- [ ] **Step 2: Run → RED.** `CI=true npm test -- src/components/Header/Header.test.js`.
- [ ] **Step 3: Update `MenuItems.js`** — final menu: Home (`/`), About us (`/about`), Services (`/services`), **Domain (`/domain`)** [NEW], Contact Us (`/contact`). (Pay Now is rendered as a pill button in the header chrome, not in this list.) Keep the `menu-active` location logic.
- [ ] **Step 4: Clean + restyle `Header/index.js`** — remove the dead "Categories" submenu (the `react-category-menu` block linking to `/course` "English/Math/Story Book"). Keep the topbar (phone `+91-9289441168`, email `support@exploresresearchsolutions.in`, social), the logo, the `MenuItems`, the mobile `menu-btn` toggle (keep its `menuOpen` state), and add a **Pay Now** `<Link to="/paynow" className="es-btn es-btn--primary header-cta">`. Keep the existing sticky `isVisible` scroll logic.
- [ ] **Step 5: Create `_header.scss`** — modern sticky header: clean white bar, subtle shadow when `.react-sticky`, brand-colored active/hover nav links (`$primaryColor`), slim topbar in `$titleColor`/`$surfaceColor`, the Pay Now pill, and a mobile drawer (`.react-inner-menus.menu-open`) sliding in. Tokens only. Add `@import 'header';` to `main.scss`.
- [ ] **Step 6: Restyle `Footer/index.js`** — ensure brand tokens, working links (no `/course` etc.), email/phone/social, copyright. (Light touch — keep structure, fix colors/links/spacing.)
- [ ] **Step 7: Run → GREEN.** Header test passes.
- [ ] **Step 8: Build.** `npm run build` → compiled, no errors. (Manual: header is sticky, Domain appears, Pay Now pill works, mobile toggle opens the drawer, no dead links.)

---

### Task 2: About page restyle

**Files:**
- Modify: `src/pages/about/AboutMain.js`, `src/pages/about/AboutSection.js`, `src/pages/about/MissionVisionSection.js`, `src/pages/about/TestimonialSection.js`
- Modify: `src/assets/scss/_mission-vision.scss` (+ a new `_inner.scss` if shared primitives help); `src/pages/about/index.js` only if a page banner `<h1>` needs adding
- Create: `src/pages/about/AboutMain.test.js`

**Interfaces:**
- Consumes: `.es-section`/`.es-h2`/`.es-card`/`fadeUp`/`<ResponsiveImage>`.
- Produces: an About page with exactly one `<h1>` (page title/banner), restyled intro + mission/vision + testimonials, brand cards, scroll reveals.

- [ ] **Step 1: Smoke test (RED).** `AboutMain.test.js` (in `MemoryRouter`): asserts the About page renders its main heading and the mission/vision content; asserts exactly one `<h1>` on the page main (query `container.querySelectorAll('h1').length === 1`).
- [ ] **Step 2: Run → RED.**
- [ ] **Step 3: Restyle the About sections** — wrap each in `.es-section`, add `.es-eyebrow` + `.es-h2` headings (the page's single `<h1>` goes on the intro/banner), convert mission/vision/feature blocks to `.es-card`s, swap images to `<ResponsiveImage>`. Add `fadeUp(rootRef.current, '...', {stagger})` reveals per section (reduced-motion safe, matchMedia-guarded, gsap.context cleanup).
- [ ] **Step 4: Run → GREEN.**
- [ ] **Step 5: Token + responsive pass** on the about styles (`_mission-vision.scss` etc.) — brand tokens, mobile-first grids.
- [ ] **Step 6: Build.** `npm run build` → ok.

---

### Task 3: Services page + Service Detail restyle

**Files:**
- Modify: `src/pages/services/IntroductionSection.js`, `MainServicesSection.js`, `DetailedOfferingsSection.js`, `ServicesMain.js`, `service-details.js`
- Modify: `src/assets/scss/_services.scss`
- Create: `src/pages/services/ServicesMain.test.js`

**Interfaces:**
- Produces: a Services listing page (intro + service cards + detailed offerings) and a Service Detail page, both in the `.es-*` language with reveals; one `<h1>` each.

- [ ] **Step 1: Smoke test (RED).** `ServicesMain.test.js` (MemoryRouter): asserts the services intro heading + the 4 service titles render; one `<h1>`.
- [ ] **Step 2: Run → RED.**
- [ ] **Step 3: Restyle** intro (banner with single `<h1>`), main services as `.es-card` grid (link to detail), detailed offerings as a clean list/grid. Add `fadeUp` reveals. Swap images to `<ResponsiveImage>`. Restyle `service-details.js` to match (banner + body + related/CTA).
- [ ] **Step 4: Run → GREEN.**
- [ ] **Step 5: Token + responsive pass** on `_services.scss`.
- [ ] **Step 6: Build.** `npm run build` → ok.

---

### Task 4: Domain page restyle

**Files:**
- Modify: `src/pages/domain/DomainMain.js`, `IntroductionSection.js`, `DomainsSection.js`
- Modify: `src/assets/scss/_domains.scss`
- Create: `src/pages/domain/DomainMain.test.js`

**Interfaces:**
- Produces: a Domain page (intro + domains grid) in the `.es-*` language with reveals; one `<h1>`.

- [ ] **Step 1: Smoke test (RED).** `DomainMain.test.js` (MemoryRouter): asserts the domain intro heading + at least a couple of domain names render; one `<h1>`.
- [ ] **Step 2: Run → RED.**
- [ ] **Step 3: Restyle** intro (single `<h1>` banner) + domains as a brand card/chip grid (reuse the homepage chip/marquee styling where sensible, but a static responsive grid is fine here). Add `fadeUp` stagger reveal.
- [ ] **Step 4: Run → GREEN.**
- [ ] **Step 5: Token + responsive pass** on `_domains.scss`.
- [ ] **Step 6: Build.** `npm run build` → ok.

---

### Task 5: Contact page restyle (preserve EmailJS)

**Files:**
- Modify: `src/pages/contact/ContactMain.js`, `ContactDetailsSection.js`, `ContactForm.js`, `ContactInfo.js`, `GoogleMapSection.js`/`MapSection.js`
- Modify: `src/assets/scss/_contact.scss`, `_contact-page.scss`
- Create: `src/pages/contact/ContactMain.test.js`

**Interfaces:**
- Produces: a Contact page with a restyled form + contact cards + map, one `<h1>`, **EmailJS send logic unchanged**.

- [ ] **Step 1: Smoke test (RED).** `ContactMain.test.js` (MemoryRouter): asserts the contact heading, the form fields (name/email/message), the submit button, and the contact email/phone render; one `<h1>`. **Do not** assert on actual EmailJS sending.
- [ ] **Step 2: Run → RED.**
- [ ] **Step 3: Restyle** — `.es-section` layout, a two-column form + info-cards grid, brand-styled inputs (focus ring `$primaryColor`), contact info as `.es-card`s, restyle the map frame. **Do NOT touch the `emailjs.send`/`sendForm` call, service/template/user IDs, or field `name` attributes.** Add `fadeUp` reveal to non-form elements only (don't animate inputs in a way that breaks focus). Swap any images to `<ResponsiveImage>`.
- [ ] **Step 4: Run → GREEN.**
- [ ] **Step 5: Token + responsive pass** on the contact partials; verify the form is fully usable on mobile.
- [ ] **Step 6: Build.** `npm run build` → ok. Report explicitly that the EmailJS logic/IDs were not modified.

---

### Task 6: Pay Now restyle (preserve payment flow)

**Files:**
- Modify: `src/pages/paynow/PayNowMain.js`, `HeroBanner.js`, `PaymentMethods.js`, `PaymentProcess.js`, `BankTransferModal.js`, `GPayModal.js`
- Modify: `src/pages/paynow/PayNow.scss`
- Create: `src/pages/paynow/PayNowMain.test.js`

**Interfaces:**
- Produces: a restyled Pay Now page (hero banner + payment methods + process + modals) in the brand language, one `<h1>`, **payment method selection + modal open/close logic unchanged**.

- [ ] **Step 1: Smoke test (RED).** `PayNowMain.test.js` (MemoryRouter): asserts the Pay Now heading and the payment method options render; one `<h1>`.
- [ ] **Step 2: Run → RED.**
- [ ] **Step 3: Restyle** — brand hero banner (single `<h1>`), payment methods as `.es-card`s, the process steps in the brand style, modals restyled (keep their open/close state + content). **Do NOT change payment data (UPI IDs, bank details, amounts) or the modal trigger logic.** Add subtle reveals (reduced-motion safe). Swap images (`/payment.jpg`→`payment.webp`, `/scanner.jpg`) to `<ResponsiveImage>`.
- [ ] **Step 4: Run → GREEN.**
- [ ] **Step 5: Token + responsive pass** on `PayNow.scss`.
- [ ] **Step 6: Build.** `npm run build` → ok. Report that payment data/modal logic were not modified.

---

### Task 7: 404 restyle + whole-site consistency & responsive pass

**Files:**
- Modify: `src/pages/404.js` (+ `src/components/Error/index.js` if that's where the markup lives)
- Modify: any inner partial needing a final fix
- Create: (none required)

**Interfaces:**
- Produces: a brand-styled 404, and a verified-consistent inner-page set.

- [ ] **Step 1: Restyle 404** — brand colors, `.es-btn` "Back to home" link, clean centered layout, one `<h1>`.
- [ ] **Step 2: Consistency sweep.** Verify token purity across all inner partials: `grep -rniE "#3270fc|#00306e|rgba\(\s*50,\s*112,\s*252|rgba\(\s*0,\s*48,\s*110" src/assets/scss src/pages` → must be empty. Fix any stray old-blue.
- [ ] **Step 3: One-h1 check per page.** For each route (about, services, service-details, domain, contact, paynow, 404), confirm the page main renders exactly one `<h1>` (grep the page Mains/sections; note any with 0 or >1 and fix).
- [ ] **Step 4: Reduced-motion + responsive note.** Confirm (and state in the report) every inner section with GSAP has a reduced-motion fallback and no section causes horizontal overflow.
- [ ] **Step 5: Full test + build.** `CI=true npm test` (all suites pass) and `npm run build` (clean). Report the consistency-sweep results and the per-page h1 counts.

---

## Self-Review Notes

- **Spec coverage:** Header/nav/Footer → Task 1; About → 2; Services + detail → 3; Domain → 4; Contact (EmailJS preserved) → 5; Pay Now (payment preserved) → 6; 404 + consistency/responsive/token sweep → 7. All reuse the homepage `.es-*` primitives + `animations.js` per Global Constraints.
- **No placeholders:** each task has a concrete smoke test (one-h1 assertion + key content) and explicit "preserve functionality" guardrails for the form/payment. CSS is token-based restyle with design latitude per the established Clean Professional direction.
- **Preservation guardrails called out explicitly** for EmailJS (Task 5) and payment flow (Task 6) so reviewers gate on them.
- **Deferred to Plan 4:** per-page `<Seo>` wiring + JSON-LD, sitemap/robots, react-snap prerender, `3.mp4` handling, Lighthouse pass, and the carried-over a11y nits from Plan 2 (testimonials autoplay reduced-motion gate, etc.).
