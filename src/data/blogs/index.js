// ─────────────────────────────────────────────────────────────────────────────
//  Blog index — import every blog here and add it to ALL_BLOGS.
//  Order = newest first.
//
//  To add a new blog:
//    1. Create src/data/blogs/your-slug.js  (copy _TEMPLATE.js)
//    2. Add:  import * as yourSlug from './your-slug';
//    3. Add   yourSlug  to ALL_BLOGS below.
//    That's it — it appears on the listing page and in the homepage cards.
// ─────────────────────────────────────────────────────────────────────────────
import * as thesisStructure from './thesis-structure-guide';

// ← ADD NEW IMPORTS ABOVE THIS LINE

export const ALL_BLOGS = [
  thesisStructure,
  // ← ADD NEW BLOG OBJECTS ABOVE THIS LINE (newest first)
];

/** Fast lookup by slug */
export const BLOG_BY_SLUG = Object.fromEntries(
  ALL_BLOGS.map((b) => [b.meta.slug, b])
);
