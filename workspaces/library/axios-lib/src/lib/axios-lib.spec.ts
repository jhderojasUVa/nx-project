import { CachedAxios } from './axios-lib';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('axiosLib', () => {
  it('should create an instance', () => {
    mockedAxios.create.mockReturnValue({} as any);
    const instance = new CachedAxios();
    expect(instance).toBeTruthy();
  });

  it('should cache requests', async () => {
    const mockGet = jest.fn().mockResolvedValue({ data: 'response' });
    mockedAxios.create.mockReturnValue({
      get: mockGet
    } as any);

    const cachedAxios = new CachedAxios();

    // First call should hit the API
    await cachedAxios.get('/test');
    expect(mockGet).toHaveBeenCalledTimes(1);

    // Second call should NOT hit the API
    await cachedAxios.get('/test');
    expect(mockGet).toHaveBeenCalledTimes(1);
  });
});
