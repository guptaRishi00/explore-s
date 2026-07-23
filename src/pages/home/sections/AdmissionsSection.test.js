import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdmissionsSection from './AdmissionsSection';

test('renders admissions h2 heading, all 3 card titles, and Enroll Now buttons', () => {
  render(<MemoryRouter><AdmissionsSection /></MemoryRouter>);
  expect(screen.getByRole('heading', { level: 2, name: /Admissions Made Simple/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /PhD Admissions/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /Masters Admissions/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /Medical Admissions/i })).toBeInTheDocument();
  const enrollLinks = screen.getAllByRole('link', { name: /Enroll/i });
  expect(enrollLinks.length).toBe(3);
  enrollLinks.forEach(link => expect(link).toHaveAttribute('href', '/contact'));
});
