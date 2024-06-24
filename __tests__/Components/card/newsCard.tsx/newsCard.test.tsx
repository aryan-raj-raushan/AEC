import { render, screen } from '@testing-library/react';
import NewsCard from '@/src/Components/card/newsCard'

describe('NewsCard component', () => {
  test('renders news card correctly', () => {
    render(<NewsCard />);
 
    const coursesTag = screen.getByText('Courses');
    expect(coursesTag).toBeInTheDocument();
    expect(coursesTag).toHaveClass('text-green-800');
    expect(coursesTag).toHaveClass('bg-green-200');

    const courseName = screen.getByText('Bsc. Mechanical Engineering');
    expect(courseName).toBeInTheDocument();

    const description = screen.getByText('Studying at MIT: Excellence, Innovation, Success.');
    expect(description).toBeInTheDocument();

    const learnMoreLink = screen.getByText('LEARN MORE');
    expect(learnMoreLink).toBeInTheDocument();
    expect(learnMoreLink).toHaveAttribute('href', '/');
  });
});
