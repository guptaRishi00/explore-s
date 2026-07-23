import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ServicesSection from './ServicesSection';

test('renders the section heading and all 4 service titles', () => {
  render(
    <MemoryRouter>
      <ServicesSection />
    </MemoryRouter>
  );

  // h2 heading
  expect(
    screen.getByRole('heading', { level: 2, name: /Our Expertise, Your Success/i })
  ).toBeInTheDocument();

  // All 4 service titles from homeContent.services
  expect(screen.getByText('PhD Research Assistance')).toBeInTheDocument();
  expect(screen.getByText('Data Analysis & Statistics')).toBeInTheDocument();
  expect(screen.getByText('Academic Writing Services')).toBeInTheDocument();
  expect(screen.getByText('Publication & Review Support')).toBeInTheDocument();
});
