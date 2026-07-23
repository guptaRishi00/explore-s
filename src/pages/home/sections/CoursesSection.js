import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../../utils/animations';
import { aiCourses } from '../../../data/programs';

// Derive a 1-2 letter monogram from the course id
const monogram = (id) => {
  const map = { python: 'Py', matlab: 'ML', spss: 'SP', r: 'R', nvivo: 'NV' };
  return map[id] || id.slice(0, 2).toUpperCase();
};

const CoursesSection = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const ctx = fadeUp(rootRef.current, '.es-course__card', { stagger: 0.1 });
    return () => ctx?.revert?.();
  }, []);

  return (
    <section className="es-section es-course" id="ai-courses" ref={rootRef} aria-label="AI and Data Courses">
      <div className="container">
        <div className="es-course__intro">
          <span className="es-eyebrow">AI & Data Courses</span>
          <h2 className="es-h2">Master the Tools of Modern Research</h2>
          <p className="es-course__lead">
            Hands-on, researcher-focused training in the software tools that power
            today's academic and data-driven work.
          </p>
        </div>

        <ul className="es-course__grid" role="list">
          {aiCourses.map((course) => (
            <li key={course.id} className="es-course__card">
              <div className="es-course__chip" aria-hidden="true">
                {monogram(course.id)}
              </div>
              <h3 className="es-course__title">{course.title}</h3>
              <p className="es-course__blurb">{course.blurb}</p>
              <div className="es-course__pills" aria-label={`Level: ${course.level}, Duration: ${course.duration}`}>
                <span className="es-course__pill es-course__pill--level">{course.level}</span>
                <span className="es-course__pill es-course__pill--duration">{course.duration}</span>
              </div>
              <Link to="/contact" className="es-btn es-btn--accent" aria-label={`Enroll in ${course.title}`}>
                Enroll Now
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoursesSection;
