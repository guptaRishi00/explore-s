import { render, screen } from '@testing-library/react';
import TrustBar from './TrustBar';

beforeEach(() => {
  window.matchMedia = jest.fn().mockImplementation(q => ({
    matches: true,
    media: q,
    addEventListener() {},
    removeEventListener() {},
  }));
});

test('shows all stat labels and final values', () => {
  render(<TrustBar />);
  expect(screen.getByText('Projects delivered')).toBeInTheDocument();
  expect(screen.getByText(/500/)).toBeInTheDocument();
});

test('renders all 4 stat labels', () => {
  render(<TrustBar />);
  expect(screen.getByText('Projects delivered')).toBeInTheDocument();
  expect(screen.getByText('Acceptance rate')).toBeInTheDocument();
  expect(screen.getByText('Research domains')).toBeInTheDocument();
  expect(screen.getByText('Years of expertise')).toBeInTheDocument();
});

test('renders all 4 suffixes', () => {
  render(<TrustBar />);
  const plusSuffixes = screen.getAllByText('+');
  expect(plusSuffixes).toHaveLength(3);
  expect(screen.getByText('%')).toBeInTheDocument();
});
