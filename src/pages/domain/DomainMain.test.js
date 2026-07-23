import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DomainMain from './DomainMain';

test('renders exactly one h1 — the Domain page banner title', () => {
  const { container } = render(
    <MemoryRouter>
      <DomainMain />
    </MemoryRouter>
  );
  const h1s = container.querySelectorAll('h1');
  expect(h1s.length).toBe(1);
  expect(h1s[0].textContent).toMatch(/Domains/i);
});

test('renders domain intro copy', () => {
  const { container } = render(
    <MemoryRouter>
      <DomainMain />
    </MemoryRouter>
  );
  expect(container.textContent).toMatch(/Explore S Research Solutions/i);
});

test('renders at least two domain names', () => {
  const { container } = render(
    <MemoryRouter>
      <DomainMain />
    </MemoryRouter>
  );
  expect(container.textContent).toMatch(/Management/i);
  expect(container.textContent).toMatch(/Life Sciences/i);
});
