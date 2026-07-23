// src/pages/home/sections/ExpertsSection.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import ExpertsSection from './ExpertsSection';

// openBookMeeting dispatches a window event — mock it to observe calls
jest.mock('../../../utils/bookMeeting', () => ({
  openBookMeeting: jest.fn(),
}));
import { openBookMeeting } from '../../../utils/bookMeeting';

test('renders eyebrow, h2 heading, and lead paragraph', () => {
  render(<ExpertsSection />);
  expect(screen.getByText(/Our Mentors/i)).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: /Talk to the Experts/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/Connect directly with our domain specialists/i)).toBeInTheDocument();
});

test('renders all 4 expert names', () => {
  render(<ExpertsSection />);
  expect(screen.getByText('Dr. A. Sharma')).toBeInTheDocument();
  expect(screen.getByText('Dr. R. Iyer')).toBeInTheDocument();
  expect(screen.getByText('Dr. M. Khan')).toBeInTheDocument();
  expect(screen.getByText('Dr. S. Nair')).toBeInTheDocument();
});

test('each expert card has a "Book a Call Now" button', () => {
  render(<ExpertsSection />);
  const buttons = screen.getAllByRole('button', { name: /Book a Call Now/i });
  expect(buttons).toHaveLength(4);
});

test('clicking "Book a Call Now" calls openBookMeeting', () => {
  render(<ExpertsSection />);
  const [firstBtn] = screen.getAllByRole('button', { name: /Book a Call Now/i });
  fireEvent.click(firstBtn);
  expect(openBookMeeting).toHaveBeenCalledTimes(1);
});

test('renders initials avatar for each expert', () => {
  render(<ExpertsSection />);
  // Dr. A. Sharma → "AS", Dr. R. Iyer → "RI", etc.
  expect(screen.getByText('AS')).toBeInTheDocument();
  expect(screen.getByText('RI')).toBeInTheDocument();
  expect(screen.getByText('MK')).toBeInTheDocument();
  expect(screen.getByText('SN')).toBeInTheDocument();
});
