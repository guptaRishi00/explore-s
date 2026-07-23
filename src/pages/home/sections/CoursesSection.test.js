import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CoursesSection from './CoursesSection';

test('renders courses h2 heading, all 5 course titles, and Enroll Now buttons', () => {
  render(<MemoryRouter><CoursesSection /></MemoryRouter>);
  expect(screen.getByRole('heading', { level: 2, name: /Master the Tools of Modern Research/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /Python for Research/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /MATLAB for Researchers/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /SPSS Statistics/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /R Programming/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /NVivo for Qualitative Research/i })).toBeInTheDocument();
  const enrollLinks = screen.getAllByRole('link', { name: /Enroll/i });
  expect(enrollLinks.length).toBe(5);
  enrollLinks.forEach(link => expect(link).toHaveAttribute('href', '/contact'));
});
