import { render, screen } from '@testing-library/react';
import StudyAbroadCard from '@/src/Components/card/studyAbroadCard';

describe('StudyAbroadCard component', () => {
    test('renders studyAbroadCard card correctly', () => {
        render(<StudyAbroadCard />);

        const coursesTag = screen.getByText('Courses');
        expect(coursesTag).toBeInTheDocument();
        expect(coursesTag).toHaveClass('text-red-800');


        const courseName = screen.getByText('Bsc. Mechanical Engineering');
        expect(courseName).toBeInTheDocument();

        const description = screen.getByText('Studying at MIT: Excellence, Innovation, Success.');
        expect(description).toBeInTheDocument();

        const learnMoreLink = screen.getByText('LEARN MORE');
        expect(learnMoreLink).toBeInTheDocument();
        expect(learnMoreLink).toHaveAttribute('href', '/');
    });
});
