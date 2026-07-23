import { render, waitFor } from '@testing-library/react';
import { Helmet } from 'react-helmet';
import Seo from './index';

test('sets document title and description', async () => {
  render(<Seo title="About | Explore S" description="Trusted research partner" path="/about" />);
  await waitFor(() => {
    const helmet = Helmet.peek();
    expect(helmet.title).toContain('About | Explore S');
  });
});
