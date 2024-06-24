import { render } from '@testing-library/react';
import Button from '@/src/Components/button/button';

describe('Button Component', () => {
  it('renders a button with text only', () => {
    const { getByText } = render(<Button text="Click me" />);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders a button with icon and text', () => {
    const { getByText, getByTestId } = render(
      <Button text="Click me" icon={<svg data-testid="test-icon" />} />
    );
    const buttonElement = getByText('Click me');
    const iconElement = getByTestId('test-icon');
    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it('renders a button with outline style', () => {
    const { getByText } = render(<Button text="Click me" outline />);
    const buttonElement = getByText('Click me');
  });

  it('renders a button with filled style', () => {
    const { getByText } = render(<Button text="Click me" filled />);
    const buttonElement = getByText('Click me');
  });
});
