import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DigitalMarketingSection from './DigitalMarketingSection';

test('renders DM h2, all 6 module titles, Enroll Now + Learn More CTA', () => {
  render(<MemoryRouter><DigitalMarketingSection /></MemoryRouter>);
  expect(screen.getByRole('heading', { level: 2, name: /Digital Marketing Training/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /SEO & On-Page/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /Social Media Marketing/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /Google Ads/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /Content Marketing/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /Email Marketing/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /Analytics & Reporting/i })).toBeInTheDocument();
  const enrollLink = screen.getByRole('link', { name: /Enroll Now/i });
  expect(enrollLink).toHaveAttribute('href', '/contact');
  const learnLink = screen.getByRole('link', { name: /Learn More/i });
  expect(learnLink).toHaveAttribute('href', '/services');
});
