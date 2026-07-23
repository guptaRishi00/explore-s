import homeContent from '../../../data/homeContent';

const GallerySection = () => {
  const { gallery } = homeContent;

  return (
    <section className="es-section es-guided" id="gallery" aria-label="Guided journeys">
      <div className="container">
        <div className="es-section__head es-section__head--center">
          <span className="es-tag">{gallery.tag}</span>
          <h2 className="es-h2">{gallery.title}</h2>
          <p className="es-section__lead">{gallery.desc}</p>
        </div>

        <div className="es-guided__strip" aria-hidden="true">
          {['Enrollment', 'Data Simulation', 'Defense Prep', 'AI & Digital Tools', 'Publication'].map((s) => (
            <span key={s} className="es-guided__chip">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
