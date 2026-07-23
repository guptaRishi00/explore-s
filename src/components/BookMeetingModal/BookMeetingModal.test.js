// src/components/BookMeetingModal/BookMeetingModal.test.js
import { render, screen, fireEvent, act } from '@testing-library/react';
import BookMeetingModal from './index';

// Mock emailjs-com so tests don't make real network calls
jest.mock('emailjs-com', () => ({
  sendForm: jest.fn(() => Promise.resolve({ text: 'OK' })),
}));

// Helper: fire the custom event that opens the modal
function openModal() {
  act(() => {
    window.dispatchEvent(new CustomEvent('es:book-meeting'));
  });
}

test('modal is not visible before the event fires', () => {
  render(<BookMeetingModal />);
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('modal opens when es:book-meeting event fires', () => {
  render(<BookMeetingModal />);
  openModal();
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /Book a Meeting with an Expert/i })
  ).toBeInTheDocument();
});

test('modal closes when × button is clicked', () => {
  render(<BookMeetingModal />);
  openModal();
  fireEvent.click(screen.getByRole('button', { name: /close/i }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('modal closes when overlay is clicked', () => {
  const { container } = render(<BookMeetingModal />);
  openModal();
  // Click the overlay (the outermost div), not the modal card
  fireEvent.click(container.querySelector('.es-modal__overlay'));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('modal closes on Escape key', () => {
  render(<BookMeetingModal />);
  openModal();
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('form has required fields with correct name attributes', () => {
  render(<BookMeetingModal />);
  openModal();
  expect(screen.getByLabelText(/Full Name/i)).toHaveAttribute('name', 'user_name');
  expect(screen.getByLabelText(/Email/i)).toHaveAttribute('name', 'user_email');
  expect(screen.getByLabelText(/Phone/i)).toHaveAttribute('name', 'user_phone');
});
