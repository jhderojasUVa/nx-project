import { CachedAxios } from './axios-lib';
import axios from 'axios';
import { vi, describe, it, expect, Mock } from 'vitest';

vi.mock('axios');
const mockedAxios = axios as unknown as { create: Mock };

describe('axiosLib', () => {
  it('should create an instance', () => {
    mockedAxios.create.mockReturnValue({} as any);
    const instance = new CachedAxios();
    expect(instance).toBeTruthy();
  });

  it('should cache requests', async () => {
    const mockGet = vi.fn().mockResolvedValue({ data: 'response' });
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
