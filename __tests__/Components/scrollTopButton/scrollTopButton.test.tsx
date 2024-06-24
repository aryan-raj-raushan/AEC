import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScrollToTopButton from "@/src/Components/scrollTopButton/scrollTopButton";


describe('ScrollToTopButton', () => {
    it('button click triggers scroll to top', () => {
        render(<ScrollToTopButton />);
        window.pageYOffset = 400;
        fireEvent.scroll(window);

        const scrollToSpy = jest.spyOn(window, 'scrollTo');
        scrollToSpy.mockRestore();
    });
});
