import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ServicesMain from './ServicesMain';

describe('ServicesMain', () => {
  function renderPage() {
    const { container } = render(
      <MemoryRouter>
        <ServicesMain />
      </MemoryRouter>
    );
    return container;
  }

  test('has exactly one h1 — the services intro banner', () => {
    const container = renderPage();
    const h1s = container.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
    expect(h1s[0].textContent).toMatch(/Our Services/i);
  });

  test('renders all 3 main service titles', () => {
    renderPage();
    expect(screen.getByText('Thesis Writing Assistance')).toBeInTheDocument();
    expect(screen.getByText('Paper Writing Assistance')).toBeInTheDocument();
    expect(screen.getByText('Paper Publication Assistance')).toBeInTheDocument();
  });

  test('renders at least one detailed offering title', () => {
    renderPage();
    expect(screen.getByText('Guides to Research Methodologies')).toBeInTheDocument();
  });
});
