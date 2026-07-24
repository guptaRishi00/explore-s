import { Link } from 'react-router-dom';
import homeContent from '../../../data/homeContent';
import { ALL_BLOGS } from '../../../data/blogs/index';

const BlogSection = () => {
  const { blog } = homeContent;
  const displayBlogs = ALL_BLOGS.slice(0, 3);

  return (
    <section className="es-section es-blog" aria-label="Latest articles">
      <div className="container">
        <div className="es-section__head es-section__head--split">
          <div>
            <span className="es-tag">{blog.tag}</span>
            <h2 className="es-h2">{blog.title}</h2>
            <p className="es-section__lead">{blog.subtitle}</p>
          </div>
          <Link to={blog.viewAll.to} className="es-btn es-btn--outline">
            {blog.viewAll.label} ➔
          </Link>
        </div>

        <ul className="es-blog__grid" role="list">
          {displayBlogs.map(({ meta: c }) => (
            <li key={c.slug} className="es-blog__card">
              <div className="es-blog__media" aria-hidden="true">
                <span className="es-blog__cat">{c.category}</span>
                <span className="es-blog__headline">{c.headline}</span>
              </div>
              <div className="es-blog__body">
                <h3 className="es-blog__title">{c.title}</h3>
                <Link to={`/blogs/${c.slug}`} className="es-blog__link">
                  Read Article ➔
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;
