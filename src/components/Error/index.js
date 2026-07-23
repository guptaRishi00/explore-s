import { Link } from 'react-router-dom';

const ErrorContent = () => {
  return (
    <section className="es-section es-404" aria-label="Page not found">
      <div className="container">
        <div className="es-404__inner">
          {/* Large decorative number — hidden from assistive tech */}
          <p className="es-404__code" aria-hidden="true">404</p>

          <h1 className="es-404__title">Page Not Found</h1>

          <p className="es-404__body">
            The page you were looking for doesn&apos;t exist or may have been moved.
            Let&apos;s get you back on track.
          </p>

          <Link className="es-btn es-btn--primary" to="/">
            Back to Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorContent;
