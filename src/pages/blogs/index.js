import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import Seo from '../../components/Seo';
import homeContent from '../../data/homeContent';

const Blogs = () => {
  const { blog } = homeContent;
  return (
    <>
      <Seo
        title="Blogs | Explore S Research Solutions"
        description="Read insightful articles on academic research, thesis writing, AI, data science and digital marketing from Explore S Research Solutions."
        path="/blogs"
        keywords="academic blog, research articles, thesis tips, AI, data science, digital marketing"
      />
      <Header parentMenu="home" topbarEnable="enable" />

      <div className="react-wrapper">
        <div className="react-wrapper-inner">
          <section className="es-section es-svc-banner">
            <div className="es-svc-banner__blob" aria-hidden="true" />
            <div className="es-svc-banner__inner">
              <h1 className="es-svc-banner__h1">
                Our <span className="es-svc-banner__accent">Blogs</span>
              </h1>
              <p className="es-svc-banner__lead">{blog.subtitle}</p>
            </div>
          </section>

          <section className="es-section es-blog">
            <div className="container">
              <ul className="es-blog__grid" role="list">
                {blog.cards.map((c) => (
                  <li key={c.headline} className="es-blog__card">
                    <div className="es-blog__media" aria-hidden="true">
                      <span className="es-blog__cat">{c.category}</span>
                      <span className="es-blog__headline">{c.headline}</span>
                    </div>
                    <div className="es-blog__body">
                      <h3 className="es-blog__title">{c.title}</h3>
                      <Link to="/contact" className="es-blog__link">Read Article ➔</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Blogs;
