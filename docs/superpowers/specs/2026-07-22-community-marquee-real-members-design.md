# Community Marquee — Real Member Photos

**Date:** 2026-07-22
**Status:** Approved

## Goal

Replace the 10 placeholder people in the homepage community marquee with 15 real
community members, each showing their photo and name.

## Decisions (confirmed with user)

- **Videos skipped.** Two of the 17 supplied files are large videos
  (`skybeats edit.mp4`, `Home Page Video in Slides Form.mov (1).mp4`) with no
  person name — excluded entirely.
- **Photo + name only.** No country/flag/role on the new cards; nothing
  fabricated appears on the site.

## Data

`community.people` in `src/data/homeContent.js` becomes 15 entries of
`{ name, image }`, names taken verbatim from the source filenames:

Yash Rathore, Raghav Sharma, Pallav, Isha Chaudhary, Harshit Srivastava,
Dr. Renu Bharti, Dr Vani Katukam, Dr Raghul, Dr Manya Gupta, Ashish,
Arti Sharma, Anupama Tomar, Ansh, Anjali Gautam, Aditya Pal.

Marquee rows split 8 + 7 (`slice(0, 8)` / `slice(8)`).

## Images

- Source photos live in `~/Downloads`; originals untouched.
- Optimized with `sharp` (already a devDependency) into `public/community/`:
  square center-crop, 160×160 (2× retina for the 46px avatar), WebP.
- Kebab-case filenames (`yash-rathore.webp`, …); referenced by public-root
  path (`/community/yash-rathore.webp`) matching the existing `homeContent.js`
  convention.

## Component

`src/pages/home/sections/CommunitySection.js`:

- `Card` renders `<img src={person.image} alt="" loading="lazy">` inside the
  avatar circle when `person.image` exists; falls back to the current
  initial-letter otherwise.
- Meta (country/flag) and role lines removed.
- Row split updated for 15 people.

## Styles

`src/assets/scss/_es-redesign.scss` — `.es-community__avatar` gets an `img`
rule: fill the circle, `object-fit: cover`, `border-radius: 50%`. Card layout
and the −50% duplicate-track marquee animation are unchanged.

## Out of scope

No new dependencies, no section title/subtitle changes, no video handling.
