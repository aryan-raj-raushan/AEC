import React from 'react';
import { render, screen } from '@testing-library/react';
import ExamPrepMaterial from '@/src/Components/@exam/examPrepMaterial/examPrepMaterial';

describe('ExamPrepMaterial component', () => {
  test('renders all necessary elements', () => {
    render(<ExamPrepMaterial />);

    const updateDateArticle = screen.getByText(/Nov 17, 2023 14:25 IST/i);
    expect(updateDateArticle).toBeInTheDocument();

    const prepAccordian = screen.getByText(/JEE Advanced Preparation 2024/i);
    expect(prepAccordian).toBeInTheDocument();
  });
});
