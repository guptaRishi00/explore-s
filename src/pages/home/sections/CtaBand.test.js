import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CtaBand from './CtaBand';

test('renders CTA title and button label', () => {
  render(
    <MemoryRouter>
      <CtaBand />
    </MemoryRouter>
  );

  expect(
    screen.getByRole('heading', { level: 2, name: /Ready to move your research forward\?/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('link', { name: /Book a consult/i })
  ).toBeInTheDocument();
});
