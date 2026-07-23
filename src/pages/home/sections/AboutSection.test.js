import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutSection from './AboutSection';

test('renders the about title, 3 bullet points, and CTA link', () => {
  render(
    <MemoryRouter>
      <AboutSection />
    </MemoryRouter>
  );

  // h2 heading
  expect(
    screen.getByRole('heading', { level: 2, name: /Welcome to Explore S Research Solutions/i })
  ).toBeInTheDocument();

  // 3 bullet points from homeContent.about.points
  expect(screen.getByText('Domain experts across 50+ fields')).toBeInTheDocument();
  expect(screen.getByText('Confidential & plagiarism-free')).toBeInTheDocument();
  expect(screen.getByText('On-time delivery, every time')).toBeInTheDocument();

  // CTA link
  expect(screen.getByRole('link', { name: /Read more about us/i })).toBeInTheDocument();
});
