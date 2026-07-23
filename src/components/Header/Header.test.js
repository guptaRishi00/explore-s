import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';

const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header topbarEnable={true} />
    </MemoryRouter>
  );

test('nav contains Home link', () => {
  renderHeader();
  expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument();
});

test('nav contains About link', () => {
  renderHeader();
  expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
});

test('nav contains Services link', () => {
  renderHeader();
  expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
});

test('nav contains Domain link', () => {
  renderHeader();
  expect(screen.getByRole('link', { name: /domain/i })).toBeInTheDocument();
});

test('nav contains Contact link', () => {
  renderHeader();
  expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
});

test('header contains Pay Now link', () => {
  renderHeader();
  expect(screen.getByRole('link', { name: /pay now/i })).toBeInTheDocument();
});

test('no link points to /course', () => {
  const { container } = renderHeader();
  const links = container.querySelectorAll('a[href="/course"]');
  expect(links.length).toBe(0);
});

test('no link points to /event', () => {
  const { container } = renderHeader();
  const links = container.querySelectorAll('a[href="/event"]');
  expect(links.length).toBe(0);
});

test('no link points to /instructor', () => {
  const { container } = renderHeader();
  const links = container.querySelectorAll('a[href="/instructor"]');
  expect(links.length).toBe(0);
});

test('no link points to /blog', () => {
  const { container } = renderHeader();
  const links = container.querySelectorAll('a[href="/blog"]');
  expect(links.length).toBe(0);
});
