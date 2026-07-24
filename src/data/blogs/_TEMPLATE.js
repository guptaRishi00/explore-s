// ─────────────────────────────────────────────────────────────────────────────
//  HOW TO ADD A NEW BLOG
// ─────────────────────────────────────────────────────────────────────────────
//
//  1. Copy this file and rename it: src/data/blogs/your-blog-slug.js
//     (use lowercase-hyphens, e.g. "phd-tips-2026.js")
//
//  2. Fill in the `meta` object below.
//
//  3. Paste your article in the `content` template literal.
//     Write it in standard Markdown:
//       # Heading 1     ## Heading 2     **bold**   *italic*
//       - bullet list   1. numbered      > blockquote
//       ![Alt text](/blogs/your-slug/image-name.jpg)
//
//  4. Put any images in:  public/blogs/your-slug/
//     Reference them as: /blogs/your-slug/filename.jpg
//
//  5. Open  src/data/blogs/index.js  and add one import + one entry.
//     That's it — the blog appears everywhere automatically.
// ─────────────────────────────────────────────────────────────────────────────

export const meta = {
  slug: 'your-blog-slug',               // must match the filename & folder name
  title: 'Full SEO title of the post',
  headline: 'Short punchy headline shown on the card (max ~8 words)',
  excerpt: 'One or two sentence summary shown on the listing page and cards.',
  category: 'Academic & Research',      // shown as the yellow badge on the card
  date: 'July 24, 2026',
  author: 'Explore S Research Solutions',
  coverImage: '/blogs/your-blog-slug/cover.jpg',  // leave '' if no cover image
  coverAlt: 'Descriptive alt text for the cover image',
};

export const content = `
<!-- Replace everything below with your actual article content in Markdown -->

## Introduction

Write your introduction paragraph here. You can use **bold**, *italic*, and [links](https://example.com).

## Section Heading

Another paragraph of content goes here.

![Descriptive alt text](/blogs/your-blog-slug/image.jpg)

### Sub-heading

- Bullet point one
- Bullet point two
- Bullet point three

1. Numbered item one
2. Numbered item two

> This is a blockquote — great for highlighting key insights.

## Conclusion

Wrap up the article here.
`;
