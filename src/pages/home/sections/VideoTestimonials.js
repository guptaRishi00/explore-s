import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import homeContent from '../../../data/homeContent';

const settings = {
  dots: true,
  arrows: false,
  // NOT infinite: slick's infinite mode clones slides, and a cloned slide
  // duplicates the <video> element — pausing the visible one leaves the
  // hidden clone's audio playing.
  infinite: false,
  autoplay: true,
  autoplaySpeed: 3200,
  speed: 450,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

// Card media: local video (`src` + `poster`) plays natively in the card;
// a YouTube `videoId` embeds instead; neither → styled quote placeholder.
const VideoTestimonials = () => {
  const { videoTestimonials } = homeContent;
  // One player at a time — clicking another card swaps it.
  const [active, setActive] = useState(null);

  return (
    <section className="es-section es-vtest" aria-label="Video testimonials">
      <div className="container">
        <div className="es-section__head es-section__head--split">
          <div>
            <span className="es-tag">{videoTestimonials.tag}</span>
            <h2 className="es-h2">{videoTestimonials.title}</h2>
          </div>
          <Link to={videoTestimonials.viewAll.to} className="es-btn es-btn--outline">
            {videoTestimonials.viewAll.label} ➔
          </Link>
        </div>

        {/* stop auto-advancing while someone is watching a testimonial;
            stop playback if the user swipes to other slides */}
        <Slider
          {...settings}
          autoplay={!active}
          beforeChange={() => setActive(null)}
          className="es-vtest__slider"
        >
          {videoTestimonials.cards.map((c) => {
            const key = c.src || c.videoId;
            const playing = key && active === key;
            return (
              <div key={c.name + c.target} className="es-vtest__slide">
                <article className={`es-vtest__card${playing ? ' is-playing' : ''}`}>
                  <div className="es-vtest__media">
                    {playing && c.src ? (
                      <video
                        src={c.src}
                        poster={c.poster}
                        controls
                        autoPlay
                        playsInline
                        onEnded={() => setActive(null)}
                      />
                    ) : playing ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${c.videoId}?autoplay=1&rel=0`}
                        title={`${c.name} — testimonial`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : key ? (
                      <button
                        type="button"
                        className="es-vtest__thumb"
                        onClick={() => setActive(key)}
                        aria-label={`Play testimonial from ${c.name}`}
                      >
                        <img
                          src={c.poster || `https://i.ytimg.com/vi/${c.videoId}/hqdefault.jpg`}
                          alt=""
                          loading="lazy"
                        />
                        <span className="es-vtest__play" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7L8 5Z" />
                          </svg>
                        </span>
                      </button>
                    ) : (
                      <div className="es-vtest__placeholder" aria-hidden="true">
                        <span className="es-vtest__quote">&ldquo;</span>
                      </div>
                    )}

                    {!playing && (
                      <div className="es-vtest__overlay">
                        <h3 className="es-vtest__name">{c.name}</h3>
                        <p className="es-vtest__meta">
                          <span aria-hidden="true">{c.flag}</span> {c.country}
                        </p>
                        <span className="es-vtest__target">{c.target}</span>
                      </div>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default VideoTestimonials;
