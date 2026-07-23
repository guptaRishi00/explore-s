import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PayNowMain from './PayNowMain';

describe('PayNowMain smoke test', () => {
  function renderPage() {
    const { container } = render(
      <MemoryRouter>
        <PayNowMain />
      </MemoryRouter>
    );
    return container;
  }

  test('has exactly one h1 — the Pay Now hero banner', () => {
    const container = renderPage();
    const h1s = container.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
    expect(h1s[0].textContent).toMatch(/Pay Now/i);
  });

  test('renders Bank Transfer and G Pay UPI payment method names', () => {
    const container = renderPage();
    expect(container.textContent).toMatch(/Bank Transfer/i);
    expect(container.textContent).toMatch(/G Pay UPI/i);
  });
});
