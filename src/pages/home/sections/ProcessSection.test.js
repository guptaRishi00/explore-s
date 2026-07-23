import { render, screen } from '@testing-library/react';
import ProcessSection from './ProcessSection';
import homeContent from '../../../data/homeContent';

const { title, steps } = homeContent.process;

test('renders the process heading and every milestone title', () => {
  render(<ProcessSection />);

  // Section heading (the process title)
  expect(
    screen.getByRole('heading', { level: 2, name: title })
  ).toBeInTheDocument();

  // Every milestone title from homeContent.process.steps
  steps.forEach((step) => {
    expect(screen.getByText(step.title)).toBeInTheDocument();
  });
});
