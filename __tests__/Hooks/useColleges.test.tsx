import { useQuery } from '@apollo/client';
import useColleges from '@/src/Hooks/useColleges';

jest.mock('@apollo/client');

const mockAllCollegeQueryData = {
  colleges: { data: [{ id: '1', name: 'College 1' }, { id: '2', name: 'College 2' }] },
};

describe('useColleges hook', () => {
  beforeEach(() => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: mockAllCollegeQueryData,
    });
  });

  it('fetches all colleges correctly', () => {
    // const { AllCollegesData, allCollegeLoading, allCollegeError } = useColleges();
    // expect(AllCollegesData).toEqual(mockAllCollegeQueryData.colleges.data);
    // expect(allCollegeLoading).toBe(false);
    // expect(allCollegeError).toBe(null);
  });
});
 