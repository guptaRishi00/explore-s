import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import Seo from '../../components/Seo';
import { BLOG_BY_SLUG, ALL_BLOGS } from '../../data/blogs/index';

// Custom renderers so markdown images get responsive classes
const mdComponents = {
  img({ src, alt, ...rest }) {
    return (
      <figure className="bd-figure">
        <img
          src={src}
          alt={alt || ''}
          loading="lazy"
          className="bd-figure__img"
          {...rest}
        />
        {alt && <figcaption className="bd-figure__caption">{alt}</figcaption>}
      </figure>
    );
  },
  a({ href, children, ...rest }) {
    const isExternal = href && (href.startsWith('http') || href.startsWith('//'));
    return (
      <a
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  },
};

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = BLOG_BY_SLUG[slug];

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const { meta, content } = blog;

  // Determine adjacent posts for prev/next navigation
  const currentIdx = ALL_BLOGS.findIndex((b) => b.meta.slug === slug);
  const prevBlog = ALL_BLOGS[currentIdx + 1] || null;
  const nextBlog = ALL_BLOGS[currentIdx - 1] || null;

  return (
    <>
      <Seo
        title={`${meta.title} | Explore S Research Solutions`}
        description={meta.excerpt}
        path={`/blogs/${meta.slug}`}
        keywords={`${meta.category}, academic blog, research, Explore S`}
      />
      <Header parentMenu="home" topbarEnable="enable" />

      <div className="react-wrapper">
        <div className="react-wrapper-inner">

          {/* Hero banner */}
          <section className="es-section bd-hero">
            <div className="bd-hero__inner">
              <nav className="bd-breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true"> / </span>
                <Link to="/blogs">Blogs</Link>
                <span aria-hidden="true"> / </span>
                <span>{meta.category}</span>
              </nav>
              <span className="bd-hero__cat">{meta.category}</span>
              <h1 className="bd-hero__title">{meta.title}</h1>
              <div className="bd-hero__meta">
                <span>{meta.author}</span>
                <span className="bd-hero__dot" aria-hidden="true">·</span>
                <span>{meta.date}</span>
              </div>
            </div>
          </section>

          {/* Article body */}
          <div className="bd-layout container">
            <article className="bd-article">
              {meta.coverImage && (
                <figure className="bd-cover">
                  <img
                    src={meta.coverImage}
                    alt={meta.coverAlt || meta.title}
                    loading="eager"
                    className="bd-cover__img"
                  />
                </figure>
              )}

              <div className="bd-prose">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={mdComponents}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="bd-sidebar">
              <div className="bd-cta-box">
                <h3 className="bd-cta-box__title">Need Research Help?</h3>
                <p className="bd-cta-box__body">
                  Our experts have helped 4,500+ scholars with thesis writing,
                  data analysis, plagiarism removal, and more.
                </p>
                <a
                  href="https://wa.me/919289441168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="es-btn es-btn--cta bd-cta-box__btn"
                >
                  WhatsApp Us ➔
                </a>
              </div>

              {ALL_BLOGS.length > 1 && (
                <div className="bd-related">
                  <h4 className="bd-related__title">More Articles</h4>
                  <ul className="bd-related__list">
                    {ALL_BLOGS.filter((b) => b.meta.slug !== slug)
                      .slice(0, 4)
                      .map((b) => (
                        <li key={b.meta.slug}>
                          <Link to={`/blogs/${b.meta.slug}`} className="bd-related__link">
                            <span className="bd-related__cat">{b.meta.category}</span>
                            <span className="bd-related__headline">{b.meta.headline}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>

          {/* Prev / Next navigation */}
          {(prevBlog || nextBlog) && (
            <nav className="bd-pagination container" aria-label="Blog navigation">
              <div className="bd-pagination__inner">
                {prevBlog ? (
                  <Link to={`/blogs/${prevBlog.meta.slug}`} className="bd-pagination__item bd-pagination__item--prev">
                    <span className="bd-pagination__label">← Previous</span>
                    <span className="bd-pagination__name">{prevBlog.meta.headline}</span>
                  </Link>
                ) : <div />}
                {nextBlog ? (
                  <Link to={`/blogs/${nextBlog.meta.slug}`} className="bd-pagination__item bd-pagination__item--next">
                    <span className="bd-pagination__label">Next →</span>
                    <span className="bd-pagination__name">{nextBlog.meta.headline}</span>
                  </Link>
                ) : <div />}
              </div>
            </nav>
          )}

        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default BlogDetail;
