import React from 'react';
import { render, screen } from '@testing-library/react';
import RankingCard from '@/src/Components/card/rankingCard'; 

describe('RankingCard component', () => {
  test('renders with correct content', () => {
    render(<RankingCard />);

    const collegeCount = screen.getByText('1545 Colleges');
    expect(collegeCount).toBeInTheDocument();

    const title = screen.getByText('Indiatoday');
    expect(title).toBeInTheDocument();

    const description = screen.getByText(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet pretium sit od'
    );
    expect(description).toBeInTheDocument();
  });
});
