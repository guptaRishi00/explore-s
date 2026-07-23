import Slider from 'react-slick';
import homeContent from '../../../data/homeContent';

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
};

const QuoteIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 40 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="es-testimonials__icon"
    width="40"
    height="28"
  >
    <path
      d="M0 28V16.8C0 7.52 5.6 2.24 16.8 0l1.96 3.08C13.44 4.2 10.36 6.72 9.24 10.64H16.8V28H0Zm22.4 0V16.8C22.4 7.52 28 2.24 39.2 0l1.96 3.08c-5.32 1.12-8.4 3.64-9.52 7.56H39.2V28H22.4Z"
      fill="currentColor"
    />
  </svg>
);

const TestimonialsSection = () => {
  const { title, items } = homeContent.testimonials;

  return (
    <section className="es-section es-testimonials" aria-label="Testimonials">
      <div className="container">
        <h2 className="es-h2 es-testimonials__heading">{title}</h2>

        <Slider {...sliderSettings}>
          {items.map(({ quote, name, role }) => (
            <div key={name} className="es-testimonials__slide">
              <div className="es-testimonials__card">
                <QuoteIcon />
                <blockquote className="es-testimonials__quote">
                  <p>&#8220;{quote}&#8221;</p>
                  <footer className="es-testimonials__author">
                    <span className="es-testimonials__name">{name}</span>
                    <span className="es-testimonials__role">{role}</span>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
