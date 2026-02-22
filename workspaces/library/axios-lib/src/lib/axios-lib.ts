import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class CachedAxios {
  private cache = new Map<string, Promise<AxiosResponse>>();
  private instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const key = url;
    if (this.cache.has(key)) {
      console.log(`Returning cached response for: ${url}`);
      return this.cache.get(key) as Promise<AxiosResponse<T>>;
    }

    const promise = this.instance.get<T>(url, config);
    this.cache.set(key, promise);

    promise.catch(() => {
      this.cache.delete(key);
    });

    return promise;
  }
}
