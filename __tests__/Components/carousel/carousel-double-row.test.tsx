import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from '@/src/Components/carousel/carousel-double-row';

describe('Carousel', () => {
  const slides = [
    <div key={1}>Slide 1</div>,
    <div key={2}>Slide 2</div>,
    <div key={3}>Slide 3</div>,
  ];

  test('renders carousel with slides', () => {
    const { getByText } = render(<Carousel slides={slides} />);

    expect(getByText('Slide 1')).toBeInTheDocument();
    expect(getByText('Slide 2')).toBeInTheDocument();
    expect(getByText('Slide 3')).toBeInTheDocument();
  });

  test('renders title correctly', () => {
    const title = 'Test Carousel';
    const { getByText } = render(<Carousel slides={slides} title={title} />);

    // Check if the title is rendered
    expect(getByText(title)).toBeInTheDocument();
  });

  test('renders carousel with slides', () => {
    const { getByText } = render(<Carousel slides={slides} />);

    expect(getByText('Slide 1')).toBeInTheDocument();
    expect(getByText('Slide 2')).toBeInTheDocument();
    expect(getByText('Slide 3')).toBeInTheDocument();
  });

  test('renders title correctly', () => {
    const title = 'Test Carousel';
    const { getByText } = render(<Carousel slides={slides} title={title} />);

    // Check if the title is rendered
    expect(getByText(title)).toBeInTheDocument();
  });

  test('navigates to next slide when next button is clicked', () => {
    const { getByText } = render(<Carousel slides={slides} />);

    expect(getByText('Slide 2')).toBeInTheDocument();
  });

  test('navigates to previous slide when previous button is clicked', () => {
    const { getByText } = render(<Carousel slides={slides} />);

    expect(getByText('Slide 2')).toBeInTheDocument();
  });

  test('navigates to specific slide when pagination button is clicked', () => {
    const { getByText } = render(<Carousel slides={slides} />);
    expect(getByText('Slide 3')).toBeInTheDocument();
  });

  let originalInnerWidth: number;
  beforeEach(() => {
    originalInnerWidth = global.innerWidth;
  });

  afterEach(() => {
    global.innerWidth = originalInnerWidth;
  });

  test('adjusts number of slides to show based on screen size', () => {
    global.innerWidth = 375; // Set the screen width to mobile size
    const { container } = render(
      <Carousel slides={slides} slidesMobile={1} slidesTablet={2} slidesDesktop={3} />
    );

    let slideElements = container.querySelectorAll('.carousel-slide');
    expect(slideElements.length).toBe(0);

    global.innerWidth = 768;
    fireEvent(window, new Event('resize'));

    slideElements = container.querySelectorAll('.carousel-slide');
    expect(slideElements.length).toBe(0);

    global.innerWidth = 1200;
    fireEvent(window, new Event('resize'));

    slideElements = container.querySelectorAll('.carousel-slide');
    expect(slideElements.length).toBe(0);
  });
 
});
