import { Link } from "react-router-dom";
import Slider from "react-slick";
import homeContent from "../../../data/homeContent";
import aiCourses from "../../../assets/images/bootcamps/ai-courses.webp";
import phdMasters from "../../../assets/images/bootcamps/phd-masters-medical.webp";
import thesisMarketing from "../../../assets/images/bootcamps/thesis-digital-marketing.webp";

const imageMap = {
  "ai-courses": aiCourses,
  "phd-masters-medical": phdMasters,
  "thesis-digital-marketing": thesisMarketing,
};

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4500,
  speed: 700,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
};

const TransformationsSection = () => {
  const { transformations } = homeContent;

  return (
    <section className="es-section es-transform" aria-label="Transformations">
      <div className="container">
        <div className="es-transform__frame">
          <Slider {...settings} className="es-transform__slider">
            {transformations.map((t) => (
              <div key={t.img} className="es-transform__slide">
                <Link
                  to={t.to}
                  className="es-transform__link"
                  aria-label={t.alt}
                >
                  <img
                    src={imageMap[t.img]}
                    alt={t.alt}
                    className="es-transform__img"
                    loading="lazy"
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
