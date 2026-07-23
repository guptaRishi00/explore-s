import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroSection from './HeroSection';
import homeContent from '../../../data/homeContent';

const { primaryCta, secondaryCta } = homeContent.hero;

test('hero renders the headline and CTAs', () => {
  render(<MemoryRouter><HeroSection /></MemoryRouter>);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getByText(primaryCta.label)).toBeInTheDocument();
  expect(screen.getByText(secondaryCta.label)).toBeInTheDocument();
});
