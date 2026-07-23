import { render, screen } from '@testing-library/react';
import DomainsSection from './DomainsSection';

test('renders the domains section heading and domain chip names', () => {
  render(<DomainsSection />);

  // h2 heading
  expect(
    screen.getByRole('heading', { level: 2, name: /Research domains we cover/i })
  ).toBeInTheDocument();

  // Marquee duplicates items — use getAllByText to handle multiple occurrences
  expect(screen.getAllByText(/Engineering/).length).toBeGreaterThanOrEqual(1);
  expect(screen.getAllByText(/Life Sciences/).length).toBeGreaterThanOrEqual(1);
  expect(screen.getAllByText(/Computer Science/).length).toBeGreaterThanOrEqual(1);
  expect(screen.getAllByText(/Mathematics/).length).toBeGreaterThanOrEqual(1);
});
