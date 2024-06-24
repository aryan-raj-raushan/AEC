import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Filter from '@/src/Components/collegeFilters/filter/filter';  

describe('Filter component', () => {
  // Mock props
  const mockProps = {
    name: 'Test Filter',
    filters: [
      { name: 'Filter 1', count: 10 },
      { name: 'Filter 2', count: 20 },
      { name: 'Filter 3', count: 30 },
    ],
    handleSelectFilter: jest.fn(),
  };

  it('filters filter options', () => {
    render(<Filter {...mockProps} />);

    fireEvent.change(screen.getByPlaceholderText('search Test Filter'), { target: { value: 'Filter 1' } });

    expect(screen.getByText('Filter 1')).toBeInTheDocument();
    expect(screen.queryByText('Filter 2')).toBeInTheDocument();
    expect(screen.queryByText('Filter 3')).toBeInTheDocument();
  });

  it('selects filter', () => {
    render(<Filter {...mockProps} />);

    fireEvent.click(screen.getByText('Filter 1'));

  });
});
