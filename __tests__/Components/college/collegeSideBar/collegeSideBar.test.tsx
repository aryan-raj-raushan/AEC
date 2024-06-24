import { render, screen } from '@testing-library/react';
import CollegeSideBarComponent from '@/src/Components/@college/collegeSideBar/collegeSideBar';

describe('CollegeSideBarComponent', () => {
  test('renders without errors', () => {
    render(<CollegeSideBarComponent />);
  });

  test('renders tabs with correct titles', () => {
    render(<CollegeSideBarComponent />);
    const imagesTab = screen.getByText(/Images/i);
    const videosTab = screen.getByText(/Videos/i);
    expect(imagesTab).toBeInTheDocument();
    expect(videosTab).toBeInTheDocument();
  });

});
