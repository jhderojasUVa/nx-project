import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * A wrapper class around Axios that provides in-memory caching for GET requests.
 */
export class CachedAxios {
  private cache = new Map<string, Promise<AxiosResponse>>();
  private instance: AxiosInstance;

  /**
   * Initializes a new instance of the CachedAxios.
   * 
   * @param config - Optional base Axios request configuration
   */
  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  /**
   * Performs a GET request to the specified URL. If the URL has been requested before,
   * the cached response promise is returned instead of making a new request.
   * 
   * @param url - The URL to send the GET request to
   * @param config - Optional Axios request configuration for this specific request
   * @returns A Promise containing the AxiosResponse
   */
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
