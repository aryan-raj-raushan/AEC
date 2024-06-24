// pages/_document.test.js
import { render } from '@testing-library/react';
import Document from '@/pages/_document';

jest.mock('next/document', () => ({
  __esModule: true,
  Html: () => <div />,
  Head: () => <div />,
  Main: () => <div />,
  NextScript: () => <div />,
}));

describe('Document component', () => {
  test('renders without crashing', () => {
    render(<Document />);
  });
});
