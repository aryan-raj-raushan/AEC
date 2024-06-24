import { useQuery } from '@apollo/client';
import useCommonApi from '@/src/Hooks/useCommonApi';
import {
  GET_STREAM,
  GET_STATE,
  GET_CITY,
  GET_EXAM_LEVEL,
} from '@/src/graphql/query/query';

jest.mock('@apollo/client');

describe('useCommonApi hook', () => {
  it('fetches data correctly', async () => {
    const mockStreamData = {
      streams: {
        data: [
          {
            id: 1,
            attributes: {
              stream_name: 'Stream 1',
              college_names: { data: [{ id: 1, attributes: { college_name: 'College 1' } }] },
              content_for_colleges: 'Content 1',
              content_for_exams: 'Content 2',
              content_for_courses: 'Content 3',
            },
          },
          {
            id: 2,
            attributes: {
              stream_name: 'Stream 2',
              college_names: { data: [{ id: 2, attributes: { college_name: 'College 2' } }] },
              content_for_colleges: 'Content 4',
              content_for_exams: 'Content 5',
              content_for_courses: 'Content 6',
            },
          },
        ],
      },
    };
    const mockStateData = {
      states: {
        data: [
          {
            id: 1,
            attributes: {
              state_name: 'State 1',
              colleges: { data: [{ id: 1, attributes: { college_name: 'College 1' } }] },
            },
          },
          {
            id: 2,
            attributes: {
              state_name: 'State 2',
              colleges: { data: [{ id: 2, attributes: { college_name: 'College 2' } }] },
            },
          },
        ],
      },
    };
    const mockCityData = {
      cities: {
        data: [
          {
            id: 1,
            attributes: {
              city_name: 'City 1',
              colleges: { data: [{ id: 1, attributes: { college_name: 'College 1' } }] },
            },
          },
          {
            id: 2,
            attributes: {
              city_name: 'City 2',
              colleges: { data: [{ id: 2, attributes: { college_name: 'College 2' } }] },
            },
          },
        ],
      },
    };
    const mockExamLevelData = {
      examLevels: {
        data: [
          {
            id: 1,
            attributes: {
              exam_level_name: 'Exam Level 1',
              exams: { data: [{ id: 1, attributes: { exam_name: 'Exam 1' } }] },
            },
          },
          {
            id: 2,
            attributes: {
              exam_level_name: 'Exam Level 2',
              exams: { data: [{ id: 2, attributes: { exam_name: 'Exam 2' } }] },
            },
          },
        ],
      },
    };

    (useQuery as jest.Mock).mockImplementation((query: any) => {
      switch (query) {
        case GET_STREAM:
          return { loading: false, error: null, data: mockStreamData };
        case GET_STATE:
          return { loading: false, error: null, data: mockStateData };
        case GET_CITY:
          return { loading: false, error: null, data: mockCityData };
        case GET_EXAM_LEVEL:
          return { loading: false, error: null, data: mockExamLevelData };
        default:
          return { loading: false, error: null, data: null };
      }
    });

    const { AllStreamData } = useCommonApi();
    expect(AllStreamData).toEqual(mockStreamData.streams.data);
  });
});
