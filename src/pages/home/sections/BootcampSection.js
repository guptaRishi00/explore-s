import Slider from "react-slick";
import homeContent from "../../../data/homeContent";
// import aiCourses from "../../../assets/images/bootcamps/ai-courses.webp";
// import phdMasters from "../../../assets/images/bootcamps/phd-masters-medical.webp";
// import thesisMarketing from "../../../assets/images/bootcamps/thesis-digital-marketing.webp";
import liveLearning from "../../../assets/images/bootcamps/live-interactive-learning.webp";

const slides = [
  // { img: aiCourses, alt: 'Upgrade from a Basic Coder to an Advanced AI & Data Expert' },
  // { img: phdMasters, alt: 'Transform your credentials from Mr. to Dr. — PhD, Masters & Medical admissions' },
  // { img: thesisMarketing, alt: 'Elevate to a Certified Industry Professional — Thesis Writing & Digital Marketing masterclasses' },
  {
    img: liveLearning,
    alt: "Live Masterclasses & Bootcamps — 100% real-time interactive learning",
  },
];

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 700,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  cssEase: "cubic-bezier(.22,.61,.36,1)",
};

const BootcampSection = () => {
  const { bootcamp } = homeContent;
  const href = bootcamp.formUrl || "/contact";

  return (
    <section
      className="es-bootcamp"
      aria-label="Live masterclasses and bootcamps"
    >
      <div className="container">
        <Slider {...settings} className="es-bootcamp__slider">
          {slides.map((slide) => (
            <div key={slide.alt} className="es-bootcamp__slide">
              <a
                href={href}
                className="es-bootcamp__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${slide.alt} — register now`}
              >
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="es-bootcamp__img"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BootcampSection;
