import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '@/src/Components/input/input';

describe('Input component', () => {
  it('renders correctly with label and placeholder', () => {
    const label = 'Username:';
    const placeholder = 'Enter your username';
    const { getByLabelText, getByPlaceholderText } = render(
      <Input label={label} placeholder={placeholder} />
    );

    const inputElement = getByPlaceholderText(placeholder);

    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange callback when input value changes', () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter your username" onChange={onChangeMock} />
    );

    const inputElement = getByPlaceholderText('Enter your username');

    fireEvent.change(inputElement, { target: { value: 'new value' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('new value');
  });

  it('renders with default label color and size when not provided', () => {
    const { getByText } = render(<Input label="Username:" />);

    const labelElement = getByText('Username:');
    expect(labelElement).toHaveClass('text-sm');
  });

  it('renders with custom label color and size when provided', () => {
    const { getByText } = render(
      <Input label="Username:" labelColor="text-red-500" labelSize="text-lg" />
    );

    const labelElement = getByText('Username:');
    expect(labelElement).toHaveClass('text-lg');
    expect(labelElement).toHaveClass('text-red-500');
  });

  it('renders with default text size when not provided', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter your username" />
    );

    const inputElement = getByPlaceholderText('Enter your username');
    expect(inputElement).toHaveClass('text-base');
  });

  it('renders with custom text size when provided', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter your username" textSize="text-xl" />
    );

    const inputElement = getByPlaceholderText('Enter your username');
    expect(inputElement).toHaveClass('text-xl');
  });
});
