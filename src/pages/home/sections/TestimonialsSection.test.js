import { render, screen } from '@testing-library/react';
import TestimonialsSection from './TestimonialsSection';

// react-slick relies on enquire.js which calls window.matchMedia at module-load
// time (before beforeEach runs). Mock the Slider to avoid the dependency.
jest.mock('react-slick', () => {
  const React = require('react');
  return function Slider({ children }) {
    return <div data-testid="slider">{children}</div>;
  };
});

test('renders the testimonials heading and at least one author name', () => {
  render(<TestimonialsSection />);

  // h2 heading
  expect(
    screen.getByRole('heading', { level: 2, name: /What scholars say/i })
  ).toBeInTheDocument();

  // react-slick may clone slides — use getAllByText and assert at least one
  expect(screen.getAllByText(/A\. Sharma/)[0]).toBeInTheDocument();
});
