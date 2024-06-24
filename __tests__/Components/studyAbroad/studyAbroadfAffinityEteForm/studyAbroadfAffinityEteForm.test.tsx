import AffinityEteForm from '@/src/Components/@studyAbroad/studyAbroadfAffinityEteForm/studyAbroadfAffinityEteForm';
import { render, screen } from '@testing-library/react';



describe('GradientImage Component', () => {
    it('renders the component properly', () => {
        render(<AffinityEteForm />);

        expect(screen.getByText('AffinityEteForm...')).toBeInTheDocument();
    });

});




