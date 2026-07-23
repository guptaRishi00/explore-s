import { render, screen } from '@testing-library/react';
import ResponsiveImage from './index';

test('renders img with alt and lazy by default', () => {
  render(<ResponsiveImage src="/x.jpg" alt="A chart" />);
  const img = screen.getByAltText('A chart');
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('loading', 'lazy');
});

test('eager image loads eagerly', () => {
  render(<ResponsiveImage src="/hero.jpg" alt="Hero" eager />);
  expect(screen.getByAltText('Hero')).toHaveAttribute('loading', 'eager');
});

test('adds webp source when provided', () => {
  const { container } = render(
    <ResponsiveImage src="/x.jpg" webp="/x.webp" alt="A chart" />
  );
  const source = container.querySelector('source[type="image/webp"]');
  expect(source).toHaveAttribute('srcset', '/x.webp');
});
