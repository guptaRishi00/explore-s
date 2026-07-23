import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import homeContent from '../../../data/homeContent';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2800,
  speed: 450,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const ServicesSection = () => {
  const { services } = homeContent;

  const renderTitle = () => {
    const { title, titleAccent } = services;
    if (!titleAccent || !title.includes(titleAccent)) return title;
    const [before, after] = title.split(titleAccent);
    return (
      <>
        {before}
        <span className="es-h2__accent">{titleAccent}</span>
        {after}
      </>
    );
  };

  return (
    <section className="es-section es-services" aria-label="Services">
      <div className="container">
        <div className="es-section__head es-section__head--split">
          <div>
            <span className="es-tag">Our Services</span>
            <h2 className="es-h2">{renderTitle()}</h2>
          </div>
          <Link to={services.viewAll.to} className="es-btn es-btn--outline">
            {services.viewAll.label} ➔
          </Link>
        </div>

        <Slider {...settings} className="es-services__slider">
          {services.cards.map((card) => (
            <div key={card.title} className="es-services__slide">
              <article className="es-svc-card">
                <div className="es-svc-card__head">
                  <span className="es-svc-card__ribbon" aria-hidden="true" />
                  <span className="es-svc-card__tag">{card.tag}</span>
                  <h3 className="es-svc-card__title">{card.title}</h3>
                </div>
                <div className="es-svc-card__body">
                  <ul className="es-svc-card__points" role="list">
                    {card.points.map((pt) => (
                      <li key={pt}>
                        <span className="es-svc-card__arrow" aria-hidden="true">➔</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link to={card.cta.to} className="es-svc-card__cta">
                    {card.cta.label}
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServicesSection;
