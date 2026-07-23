import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContactMain from './ContactMain';

describe('ContactMain', () => {
  function renderPage() {
    const { container } = render(
      <MemoryRouter>
        <ContactMain />
      </MemoryRouter>
    );
    return container;
  }

  test('has exactly one h1 — the contact page banner', () => {
    const container = renderPage();
    const h1s = container.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
    expect(h1s[0].textContent).toMatch(/Contact|Get in Touch|Touch/i);
  });

  test('renders form fields by name attribute', () => {
    const container = renderPage();
    expect(container.querySelector('input[name="user_name"]')).toBeInTheDocument();
    expect(container.querySelector('input[name="user_email"]')).toBeInTheDocument();
    expect(container.querySelector('textarea[name="user_message"]')).toBeInTheDocument();
  });

  test('renders a submit button', () => {
    renderPage();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  test('renders the contact email address', () => {
    const container = renderPage();
    expect(container.textContent).toMatch(/support@exploresresearchsolutions\.in/);
  });

  test('renders the contact phone number', () => {
    const container = renderPage();
    expect(container.textContent).toMatch(/\+91-9289441168/);
  });
});
