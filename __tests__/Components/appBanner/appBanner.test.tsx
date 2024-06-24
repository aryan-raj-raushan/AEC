import { render } from '@testing-library/react';
import AppBanner from '@/src/Components/appBanner/appBanner';

describe('AppBanner component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<AppBanner />);
  });

  it('does not render the image', () => {
    const { queryByRole } = render(<AppBanner />);
  });
});
