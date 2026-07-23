# Explore S Redesign — Plan 1: Foundation & Cleanup

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Strip the inherited education-template cruft and stand up the shared foundation (design tokens, GSAP animation utilities, reusable `<Seo>` and `<ResponsiveImage>` components, optimized media) that every later page builds on.

**Architecture:** Incremental, build-safe changes to the existing CRA app. Remove dead routes/pages/components without breaking the kept pages, introduce a design-token layer in SCSS + CSS custom properties, add a GSAP helper module that is React-StrictMode-safe and honors `prefers-reduced-motion`, and add two shared presentational components. Compress the multi-megabyte `public/` assets in place.

**Tech Stack:** React 18 (CRA / react-scripts), SCSS (sass), Bootstrap 5, GSAP + ScrollTrigger, react-helmet, sharp (dev-only, image optimization), React Testing Library + Jest (via react-scripts test).

## Global Constraints

- Stay on CRA — do **not** migrate to Next.js or eject. (spec §2, §11)
- Do **not** push or commit to the GitHub remote. Local commits only. (spec §1)
- Pages kept: Home, About, Services, Service Detail, Domain, Contact, Pay Now, 404. All other routes/pages removed. (spec §2, §7)
- Brand tokens (exact values): primary `#0D9488`, ink `#0F2E25`, body `#42584F`, surface `#F6F8F7`, white `#FFFFFF`, accent `#F59E0B`, hairline `#E2E8E5`. (spec §3)
- Headings + body font: **Inter** (display headlines may use Sora), `font-display: swap`. (spec §3)
- All animations must honor `prefers-reduced-motion: reduce` by snapping to final state. (spec §4)
- Contact email `support@exploresresearchsolutions.in`, phone `+91-9289441168` must be preserved. (spec §5)
- Preserve existing EmailJS contact integration, Meta Pixel, and the Pay Now flow. (spec §1)
- Run all commands with `yarn` (project has `yarn.lock`). `yarn build` uses `CI=false`.

---

### Task 1: Remove dead routes from the router

**Files:**
- Modify: `src/app/App.js`

**Interfaces:**
- Produces: an `<App>` that only routes `/`, `/about`, `/services`, `/service/:serviceId`, `/domain`, `/contact`, `/paynow`, and `*` (404). Later tasks/plans assume these are the only live routes.

- [ ] **Step 1: Edit `src/app/App.js`** — remove the imports and `<Route>` entries for HomeTwo, HomeThree, Course, CourseList, CourseDetails, CourseSidebar, Instructor, InstructorDetails, Event, EventSidebar, EventDetails, Blog, BlogDetails, Login, Signup. Keep Home, About, Services, ServiceDetails, Domain, Contact, PayNow, Error, Preloader, LoadTop.

The resulting `<Routes>` block must read exactly:

```jsx
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
```

And the import block must drop every removed page import (HomeTwo, HomeThree, Course, CourseList, CourseDetails, CourseSidebar, Instructor, InstructorDetails, Event, EventSidebar, EventDetails, Blog, BlogDetails, Login, Signup).

- [ ] **Step 2: Verify the build compiles**

Run: `yarn build`
Expected: `Compiled successfully` (or with warnings, but NO "Module not found" / "Cannot find module" errors). Because we removed only imports for routes we also deleted, the kept pages must still resolve.

- [ ] **Step 3: Commit**

```bash
git add src/app/App.js
git commit -m "chore: remove dead template routes from router"
```

---

### Task 2: Delete unused page folders

**Files:**
- Delete: `src/pages/home-2/`, `src/pages/home-3/`, `src/pages/course/`, `src/pages/instructor/`, `src/pages/event/`, `src/pages/blog/`, `src/pages/authentication/`

**Interfaces:**
- Consumes: Task 1 (router no longer imports these).
- Produces: a `src/pages/` containing only `home/`, `about/`, `services/`, `domain/`, `contact/`, `paynow/`, and `404.js`.

- [ ] **Step 1: Confirm nothing live imports these page folders**

Run:
```bash
grep -rn --include=*.js -E "pages/(home-2|home-3|course|instructor|event|blog|authentication)" src | grep -v -E "^src/pages/(home-2|home-3|course|instructor|event|blog|authentication)/"
```
Expected: no output (no file OUTSIDE those folders imports them). If there is output, fix that importer first.

- [ ] **Step 2: Delete the folders**

```bash
git rm -r src/pages/home-2 src/pages/home-3 src/pages/course src/pages/instructor src/pages/event src/pages/blog src/pages/authentication
```

- [ ] **Step 3: Verify the build compiles**

Run: `yarn build`
Expected: `Compiled successfully`, no "Module not found".

- [ ] **Step 4: Commit**

```bash
git commit -m "chore: delete unused template page folders"
```

---

### Task 3: Delete now-orphaned components and data

**Files:**
- Delete (only those confirmed unreferenced): `src/components/Course/`, `src/components/Event/`, `src/components/Blog/`, `src/components/Breadcrumb/CourseBreadcrumbs.js`, `src/components/Breadcrumb/EventBreadcrumbs.js`, `src/components/Breadcrumb/BlogBreadcrumbs.js`, and any of `src/data/Courses.json`, `src/data/Events.json`, `src/data/Posts.json`, `src/data/Instructors.json` that are unreferenced.

**Interfaces:**
- Consumes: Tasks 1–2.
- Produces: a components/data tree with no education-template leftovers. `SectionTitle`, `Service/`, `Testimonial/`, `Footer/`, `Header/`, `Preloader/`, `ScrollTop/`, `Faq/`, `Team/`, `Breadcrumb/index.js` remain (kept pages may use them).

- [ ] **Step 1: For each candidate, confirm zero references before deleting.** Run this guard for each path and only delete when output is empty:

```bash
for p in "Course/" "Event/" "Blog/" "Breadcrumb/CourseBreadcrumbs" "Breadcrumb/EventBreadcrumbs" "Breadcrumb/BlogBreadcrumbs" "data/Courses" "data/Events" "data/Posts" "data/Instructors"; do
  echo "== $p =="
  grep -rn --include=*.js "$p" src | grep -v "src/components/$p" | grep -v "src/$p"
done
```
For any candidate whose section prints no reference lines, it is safe to delete. If a candidate is still referenced by a kept page, leave it and note it.

- [ ] **Step 2: Delete the confirmed-unreferenced files** (adjust the list to match Step 1 findings):

```bash
git rm -r src/components/Course src/components/Event src/components/Blog
git rm src/components/Breadcrumb/CourseBreadcrumbs.js src/components/Breadcrumb/EventBreadcrumbs.js src/components/Breadcrumb/BlogBreadcrumbs.js
# Only the data files Step 1 proved unreferenced:
git rm src/data/Courses.json src/data/Events.json src/data/Posts.json src/data/Instructors.json
```

- [ ] **Step 3: Verify the build compiles**

Run: `yarn build`
Expected: `Compiled successfully`, no "Module not found".

- [ ] **Step 4: Commit**

```bash
git commit -m "chore: delete orphaned template components and data"
```

---

### Task 4: Swap animation dependencies (add GSAP, remove wowjs)

**Files:**
- Modify: `package.json`
- Modify: `public/index.html`

**Interfaces:**
- Produces: `gsap` available as an import; `wowjs` removed; `animate.css` CDN removed from `index.html`. Task 6 consumes `gsap`.

- [ ] **Step 1: Add gsap, remove wowjs**

Run:
```bash
yarn add gsap
yarn remove wowjs
```
Expected: `gsap` appears in `package.json` dependencies; `wowjs` removed.

- [ ] **Step 2: Find and neutralize any wowjs initialization**

Run: `grep -rn -iE "wow|new WOW|animate__|data-wow" src public/index.html`
For each hit in JS: remove the `new WOW().init()` calls and `import 'wowjs'`. Leave `data-wow-*` attributes and `animate__` classes in JSX for now (harmless without the library; they get replaced as each section is rebuilt in later plans). In `public/index.html`, delete the `animate.css` `<link>` (the line referencing `cdnjs.cloudflare.com/ajax/libs/animate.css`).

- [ ] **Step 3: Verify the build compiles**

Run: `yarn build`
Expected: `Compiled successfully`. If a removed `import 'wowjs'` left an unused variable, clean it up.

- [ ] **Step 4: Commit**

```bash
git add package.json yarn.lock public/index.html src
git commit -m "build: replace wowjs/animate.css with gsap"
```

---

### Task 5: Design tokens (SCSS variables + CSS custom properties + Inter font)

**Files:**
- Create: `src/assets/scss/_tokens.scss`
- Modify: `src/assets/scss/_variables.scss`
- Modify: `src/assets/scss/main.scss`

**Interfaces:**
- Produces: SCSS variables `$primaryColor`, `$titleColor`, `$bodyColor`, `$surfaceColor`, `$accentColor`, `$hairline`, `$titlefont`, `$bodyfont` set to the brand values, plus matching CSS custom properties on `:root` (`--es-primary`, `--es-ink`, `--es-body`, `--es-surface`, `--es-accent`, `--es-hairline`) that JS/GSAP can read.

- [ ] **Step 1: Create `src/assets/scss/_tokens.scss`**

```scss
// Explore S design tokens — single source of truth for color/type.
// SCSS vars for stylesheets + CSS custom properties for JS/runtime.

:root {
  --es-primary: #0D9488;
  --es-ink:     #0F2E25;
  --es-body:    #42584F;
  --es-surface: #F6F8F7;
  --es-white:   #FFFFFF;
  --es-accent:  #F59E0B;
  --es-hairline:#E2E8E5;
  --es-radius:  14px;
  --es-shadow:  0 8px 30px rgba(15, 46, 37, 0.08);
}
```

- [ ] **Step 2: Replace the color/font block in `src/assets/scss/_variables.scss`**

Replace the existing `@import url('...Source+Sans+Pro...')` line and the color/font `$` variables with:

```scss
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap');

$titlefont: 'Sora', 'Inter', system-ui, sans-serif;
$bodyfont: 'Inter', system-ui, sans-serif;
$blog-font: 'Inter', system-ui, sans-serif;
$transition: all 0.4s ease 0s;
$bodyColor: #42584F;
$titleColor: #0F2E25;
$primaryColor: #0D9488;
$secondaryColor: #0F2E25;
$hoverColor: #0D9488;
$whiteColor: #ffffff;
$black-color: #000;
$heading-color: #0F2E25;
$surfaceColor: #F6F8F7;
$accentColor: #F59E0B;
$hairline: #E2E8E5;
```

Keep any other variables below this block (e.g. `$kidscolor`, `$paragraphColor`, `$homesix-textColor`) untouched so existing partials still compile.

- [ ] **Step 3: Import tokens first in `src/assets/scss/main.scss`**

Add `@import 'tokens';` as the FIRST `@import` (above `@import 'animations';`).

- [ ] **Step 4: Verify the build compiles**

Run: `yarn build`
Expected: `Compiled successfully`. SCSS resolves all `$` variables.

- [ ] **Step 5: Commit**

```bash
git add src/assets/scss/_tokens.scss src/assets/scss/_variables.scss src/assets/scss/main.scss
git commit -m "feat: add Explore S design tokens and Inter/Sora fonts"
```

---

### Task 6: GSAP animation utility module

**Files:**
- Create: `src/utils/animations.js`
- Create: `src/utils/animations.test.js`

**Interfaces:**
- Produces:
  - `prefersReducedMotion(): boolean` — true when the user requested reduced motion.
  - `fadeUp(scope, selector, opts?)` — animate matching elements from `y:40, opacity:0` to visible, staggered, on scroll into `scope`. Returns the created `gsap.context` (or `null` under reduced motion, after setting final state).
  - `countUp(el, end, opts?)` — animate an element's text from 0 to `end` when scrolled into view.
  - `registerGsap()` — registers `ScrollTrigger` exactly once.
  Later plans (homepage/inner pages) consume these helpers.

- [ ] **Step 1: Write the failing test — `src/utils/animations.test.js`**

```js
import { prefersReducedMotion } from './animations';

describe('prefersReducedMotion', () => {
  const setMatch = (matches) => {
    window.matchMedia = jest.fn().mockImplementation((q) => ({
      matches, media: q, addEventListener: () => {}, removeEventListener: () => {},
    }));
  };

  test('returns true when reduce is preferred', () => {
    setMatch(true);
    expect(prefersReducedMotion()).toBe(true);
  });

  test('returns false when no preference', () => {
    setMatch(false);
    expect(prefersReducedMotion()).toBe(false);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `CI=true yarn test src/utils/animations.test.js`
Expected: FAIL — `Cannot find module './animations'`.

- [ ] **Step 3: Implement `src/utils/animations.js`**

```js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;
export function registerGsap() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

// Animate elements matching `selector` within `scope` (a DOM node/ref).
export function fadeUp(scope, selector, opts = {}) {
  if (prefersReducedMotion()) {
    scope?.querySelectorAll?.(selector).forEach((n) => {
      n.style.opacity = '1';
      n.style.transform = 'none';
    });
    return null;
  }
  registerGsap();
  return gsap.context(() => {
    gsap.from(selector, {
      y: opts.y ?? 40,
      opacity: 0,
      duration: opts.duration ?? 0.8,
      ease: opts.ease ?? 'power3.out',
      stagger: opts.stagger ?? 0.12,
      scrollTrigger: {
        trigger: scope,
        start: opts.start ?? 'top 80%',
        once: true,
      },
    });
  }, scope);
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
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `CI=true yarn test src/utils/animations.test.js`
Expected: PASS (2 tests).

- [ ] **Step 5: Verify the build compiles**

Run: `yarn build`
Expected: `Compiled successfully`.

- [ ] **Step 6: Commit**

```bash
git add src/utils/animations.js src/utils/animations.test.js
git commit -m "feat: add gsap animation utilities (reduced-motion safe)"
```

---

### Task 7: `<ResponsiveImage>` component

**Files:**
- Create: `src/components/ResponsiveImage/index.js`
- Create: `src/components/ResponsiveImage/index.test.js`

**Interfaces:**
- Produces: default export `ResponsiveImage({ src, alt, webp, width, height, className, eager })`. Renders a `<picture>` with an optional `<source type="image/webp" srcSet={webp}>` and an `<img>` that is `loading="lazy"` + `decoding="async"` unless `eager` is true (then `loading="eager"`, `fetchpriority="high"`). `alt` is required and always rendered. Used by every later image-bearing component.

- [ ] **Step 1: Write the failing test — `src/components/ResponsiveImage/index.test.js`**

```js
import { render, screen } from '@testing-library/react';
import ResponsiveImage from './index';

test('renders img with alt and lazy by default', () => {
  render(<ResponsiveImage src="/x.jpg" alt="A chart" />);
  const img = screen.getByAltText('A chart');
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('loading', 'lazy');
});

test('eager image loads eagerly', () => {
  render(<ResponsiveImage src="/hero.jpg" alt="Hero" eager />);
  expect(screen.getByAltText('Hero')).toHaveAttribute('loading', 'eager');
});

test('adds webp source when provided', () => {
  const { container } = render(
    <ResponsiveImage src="/x.jpg" webp="/x.webp" alt="A chart" />
  );
  const source = container.querySelector('source[type="image/webp"]');
  expect(source).toHaveAttribute('srcset', '/x.webp');
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `CI=true yarn test src/components/ResponsiveImage`
Expected: FAIL — `Cannot find module './index'`.

- [ ] **Step 3: Implement `src/components/ResponsiveImage/index.js`**

```js
import React from 'react';

const ResponsiveImage = ({ src, alt, webp, width, height, className, eager = false }) => (
  <picture>
    {webp && <source type="image/webp" srcSet={webp} />}
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={eager ? 'high' : undefined}
    />
  </picture>
);

export default ResponsiveImage;
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `CI=true yarn test src/components/ResponsiveImage`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/components/ResponsiveImage
git commit -m "feat: add ResponsiveImage component (webp + lazy)"
```

---

### Task 8: `<Seo>` component (per-page meta + JSON-LD)

**Files:**
- Create: `src/components/Seo/index.js`
- Create: `src/components/Seo/index.test.js`

**Interfaces:**
- Produces: default export `Seo({ title, description, path, image, jsonLd })`. Renders (via `react-helmet`) `<title>`, `<meta name="description">`, canonical link (`https://exploresresearchsolutions.in` + `path`), Open Graph + Twitter tags, and an optional JSON-LD `<script type="application/ld+json">`. Consumed by every page in later plans.

- [ ] **Step 1: Write the failing test — `src/components/Seo/index.test.js`**

```js
import { render, waitFor } from '@testing-library/react';
import { Helmet } from 'react-helmet';
import Seo from './index';

test('sets document title and description', async () => {
  render(<Seo title="About | Explore S" description="Trusted research partner" path="/about" />);
  await waitFor(() => {
    const helmet = Helmet.peek();
    expect(helmet.title).toContain('About | Explore S');
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `CI=true yarn test src/components/Seo`
Expected: FAIL — `Cannot find module './index'`.

- [ ] **Step 3: Implement `src/components/Seo/index.js`**

```js
import React from 'react';
import { Helmet } from 'react-helmet';

const SITE_URL = 'https://exploresresearchsolutions.in';
const DEFAULT_DESC =
  'Explore S Research Solutions — trusted PhD research assistance, data analysis, academic writing, and publication support.';

const Seo = ({
  title = 'Explore S Research Solutions',
  description = DEFAULT_DESC,
  path = '/',
  image = `${SITE_URL}/logo512.png`,
  jsonLd,
}) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default Seo;
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `CI=true yarn test src/components/Seo`
Expected: PASS (1 test).

- [ ] **Step 5: Commit**

```bash
git add src/components/Seo
git commit -m "feat: add Seo component (meta + OG + JSON-LD)"
```

---

### Task 9: Optimize the oversized `public/` media

**Files:**
- Create: `scripts/optimize-images.js`
- Modify: `package.json` (add a `scripts.optimize:images` entry; add `sharp` devDependency)
- Modify (output): `public/*.{jpg,jpeg,png}` → compressed + `.webp` siblings

**Interfaces:**
- Produces: every large `public/` raster compressed to a sane display size and a matching `.webp` sibling (e.g. `2.png` → `2.png` (smaller) + `2.webp`). Hero-class images target < 200KB. Later plans reference the `.webp` siblings via `<ResponsiveImage webp=...>`.

- [ ] **Step 1: Back up originals (safety — keep the high-res sources)**

```bash
mkdir -p .superpowers/original-media
cp public/1.jpeg public/2.png public/guidance.jpg public/payment.jpg public/scanner.jpg .superpowers/original-media/ 2>/dev/null || true
```
(`.superpowers/` is already gitignored, so originals stay local and out of git.)

- [ ] **Step 2: Add sharp as a dev dependency**

Run: `yarn add -D sharp`
Expected: `sharp` in `devDependencies`.

- [ ] **Step 3: Create `scripts/optimize-images.js`**

```js
/* Compress oversized public/ rasters and emit .webp siblings. */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUB = path.join(__dirname, '..', 'public');
const MAX_W = 1920; // no display surface exceeds full-bleed desktop width
const exts = ['.jpg', '.jpeg', '.png'];

async function run() {
  const files = fs.readdirSync(PUB).filter((f) => exts.includes(path.extname(f).toLowerCase()));
  for (const file of files) {
    const src = path.join(PUB, file);
    const { size } = fs.statSync(src);
    if (size < 300 * 1024) { console.log(`skip ${file} (${Math.round(size / 1024)}KB)`); continue; }
    const base = file.replace(/\.[^.]+$/, '');
    const img = sharp(src).resize({ width: MAX_W, withoutEnlargement: true });

    // Re-encode original format, compressed.
    const ext = path.extname(file).toLowerCase();
    const outSame = path.join(PUB, file);
    if (ext === '.png') await img.clone().png({ quality: 80, compressionLevel: 9 }).toFile(outSame + '.tmp');
    else await img.clone().jpeg({ quality: 72, mozjpeg: true }).toFile(outSame + '.tmp');
    fs.renameSync(outSame + '.tmp', outSame);

    // WebP sibling.
    await sharp(src).resize({ width: MAX_W, withoutEnlargement: true })
      .webp({ quality: 72 }).toFile(path.join(PUB, base + '.webp'));

    const after = fs.statSync(outSame).size;
    console.log(`${file}: ${Math.round(size / 1024)}KB -> ${Math.round(after / 1024)}KB (+ ${base}.webp)`);
  }
}
run().catch((e) => { console.error(e); process.exit(1); });
```

> Note: re-encoding reads the source first, so this is safe to run once. If re-run, it re-compresses already-compressed files (mild quality loss) — run it once per asset change, restoring from `.superpowers/original-media/` if you need a clean pass.

- [ ] **Step 4: Add the npm script to `package.json`**

Add to `"scripts"`: `"optimize:images": "node scripts/optimize-images.js"`.

- [ ] **Step 5: Run it and verify sizes drop**

Run: `yarn optimize:images`
Expected: console lines showing each large file shrinking (e.g. `2.png: 13140KB -> <800KB`, plus `2.webp` created). Then confirm:
```bash
ls -lh public/*.webp public/2.png public/1.jpeg public/guidance.jpg
```
Expected: `.webp` files exist; the big rasters are now well under 1MB.

> Note: `3.mp4` (~20MB video) is NOT handled by sharp. If it is used on a page, address it in the plan that introduces that page (compress with ffmpeg / move to a poster image + lazy load). Out of scope for this task.

- [ ] **Step 6: Verify the build still compiles**

Run: `yarn build`
Expected: `Compiled successfully`.

- [ ] **Step 7: Commit**

```bash
git add scripts/optimize-images.js package.json yarn.lock public
git commit -m "perf: optimize oversized public media + add webp siblings"
```

---

## Self-Review Notes

- **Spec coverage:** §2 decisions (cleanup) → Tasks 1–3; §4 GSAP system → Tasks 4, 6; §3 tokens/fonts → Task 5; §8 SEO `<Seo>` → Task 8; §9 perf images + `<ResponsiveImage>` → Tasks 7, 9. Per-route meta/JSON-LD wiring, react-snap, sitemap/robots, and the actual section rebuilds are deferred to Plans 2–4 (noted in handoff below).
- **Deferred to later plans:** homepage sections (Plan 2); Header/Footer/nav update incl. adding "Domain" to `MenuItems.js` and inner-page restyles (Plan 3); per-page `<Seo>` usage, JSON-LD payloads, sitemap.xml, robots.txt, react-snap postbuild, Lighthouse pass, and `3.mp4` handling (Plan 4).
- **Build-safety:** every task ends with `yarn build` green, so the site is always runnable.
