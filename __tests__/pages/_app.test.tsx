import React from 'react';
import { render } from '@testing-library/react';
import MyApp from '@/pages/_app';

jest.mock('../../src/lib/apolloClient', () => ({
  useApollo: jest.fn(() => ({
    query: jest.fn(),
    mutate: jest.fn(),
  })),
}));

describe('MyApp', () => {
  test('renders without crashing', () => {
    const mockPageProps = {
      initialApolloState: {} 
    };

    render(<MyApp Component={() => <div />} pageProps={mockPageProps} />);

  });
});
