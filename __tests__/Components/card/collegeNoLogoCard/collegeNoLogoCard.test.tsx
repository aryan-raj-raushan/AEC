import React from 'react';
import { render } from '@testing-library/react';
import CollegeNoLogoCard from '@/src/Components/card/collegeNoLogoCard'; 

describe('CollegeNoLogoCard component', () => {
  it('renders college card without logo', () => {
    const mockCollege = {
      college_name: 'University of Cambridge',
      city: 'Cambridge',
      state: 'England',
      total_fees_range: '1.3L',
      courses_offered: 9,
    };
    const { getByText, getByAltText } = render(<CollegeNoLogoCard college={mockCollege} />);

    const collegeName = getByText('University of Cambridge');
    const location = getByText('Public university in Cambridge, England');
    const coursesOffered = getByText('9 Courses Offered');
    const applyNowButton = getByText('Apply Now');

    expect(collegeName).toBeInTheDocument();
    expect(location).toBeInTheDocument();

    expect(coursesOffered).toBeInTheDocument();
    expect(applyNowButton).toBeInTheDocument();

    expect(getByAltText('Cash')).toBeInTheDocument();
    expect(getByAltText('type of college')).toBeInTheDocument();
  });

});
