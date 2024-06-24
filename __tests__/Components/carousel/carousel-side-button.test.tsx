import { render, fireEvent } from '@testing-library/react';
import CarouselSideBtn from '@/src/Components/carousel/carousel-side-button';

describe('CarouselSideBtn component', () => {
  const slides = [<div key={1}>Slide 1</div>, <div key={2}>Slide 2</div>, <div key={3}>Slide 3</div>];

  it('renders without crashing', () => {
    render(
      <CarouselSideBtn 
        slides={slides}
        title="Test Carousel"
        slidesMobile={1}
        slidesTablet={2}
        slidesDesktop={3}
      />
    );
  });

  it('allows clicking next and previous buttons', () => {
    const { getByTestId, getAllByRole } = render(
      <CarouselSideBtn 
        slides={slides}
        title="Test Carousel"
        slidesMobile={1}
        slidesTablet={2}
        slidesDesktop={3}
      />
    );

    const nextButton = getByTestId('next-button');
    const prevButton = getByTestId('prev-button');

    fireEvent.click(nextButton);
    expect(getAllByRole('button', { name: /Slide/ })[1]).toBeInTheDocument();

    fireEvent.click(prevButton);
    expect(getAllByRole('button', { name: /Slide/ })[0]).toBeInTheDocument();
  });

  it('displays correct number of pagination buttons', () => {
    const { getAllByRole } = render(
      <CarouselSideBtn 
        slides={slides}
        title="Test Carousel"
        slidesMobile={1}
        slidesTablet={2}
        slidesDesktop={3}
      />
    );

    const paginationButtons = getAllByRole('button', { name: /pagination button/ });
    expect(paginationButtons.length).toBe(slides.length);
  });
});
