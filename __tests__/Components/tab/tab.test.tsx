import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TabComponent from '@/src/Components/tab/tab';

describe('TabComponent', () => {
  const tabs = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' },
    { title: 'Tab 3', content: 'Content for Tab 3' },
  ];

  it('renders tab titles and content correctly', () => {
    const { getByText } = render(<TabComponent tabs={tabs} />);
    
    // Check if tab titles are rendered
    tabs.forEach(tab => {
      const tabTitle = getByText(tab.title);
      expect(tabTitle).toBeInTheDocument();
    });

    // Check if the content for the first tab is rendered
    const contentForTab1 = getByText('Content for Tab 1');
    expect(contentForTab1).toBeInTheDocument();
  });

  it('switches between tabs when clicked', () => {
    const { getByText } = render(<TabComponent tabs={tabs} />);

    // Click on the second tab
    fireEvent.click(getByText('Tab 2'));

    // Check if the content for Tab 2 is rendered
    const contentForTab2 = getByText('Content for Tab 2');
    expect(contentForTab2).toBeInTheDocument();

    // Click on the third tab
    fireEvent.click(getByText('Tab 3'));

    // Check if the content for Tab 3 is rendered
    const contentForTab3 = getByText('Content for Tab 3');
    expect(contentForTab3).toBeInTheDocument();
  });
});
