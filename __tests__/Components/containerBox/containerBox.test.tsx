import React from 'react';
import { render, screen } from '@testing-library/react';
import ContainerBox from '@/src/Components/containerBox/containerBox';

describe('ContainerBox component', () => {
  it('renders with title and children', () => {
    render(
      <ContainerBox title="Test Title" bgColor="bg-gray-200">
        <p>Test Content</p>
      </ContainerBox>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();    
  });

  it('renders without title', () => {
    render(
      <ContainerBox bgColor="bg-gray-200">
        <p>Test Content</p>
      </ContainerBox>
    );

    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
