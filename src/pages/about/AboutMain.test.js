import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutMain from './AboutMain';

// react-slick uses window.matchMedia at module-load time; mock to avoid jsdom errors
jest.mock('react-slick', () => {
  const React = require('react');
  return function Slider({ children }) {
    return <div data-testid="slider">{children}</div>;
  };
});

test('renders exactly one h1 — the About page banner title', () => {
  const { container } = render(
    <MemoryRouter>
      <AboutMain />
    </MemoryRouter>
  );
  const h1s = container.querySelectorAll('h1');
  expect(h1s.length).toBe(1);
  expect(h1s[0].textContent).toMatch(/Explore S Research Solutions/i);
});

test('renders mission and vision section content', () => {
  const { container } = render(
    <MemoryRouter>
      <AboutMain />
    </MemoryRouter>
  );
  expect(container.textContent).toMatch(/Our Mission/);
  expect(container.textContent).toMatch(/Our Vision/);
});
