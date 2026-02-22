# @jhderojasUVa/axios-lib

A lightweight caching wrapper around Axios that stores successful GET request promises in an internal memory cache to prevent duplicate requests. 

This library is built with [Nx](https://nx.dev) and fully typed.

## Installation

```bash
npm install @jhderojasUVa/axios-lib axios
```
*(Requires `axios` as a peer dependency)*

## Features

- `CachedAxios`: A class taking standard standard `AxiosRequestConfig` on initialization.
- `get(url, config)`: Intercepts GET requests. If the request was made recently, it returns the existing Promise instead of firing a new network call. Failed requests are automatically evicted from the cache.

## Building & Docs

Run `nx build axios-lib` to build the library.

To generate JSDoc documentation, run:
```bash
nx docs axios-lib
```
The documentation will be output to `docs/axios-lib`.

## Running unit tests

Run `nx test axios-lib` to execute the unit tests via [Vitest](https://vitest.dev/).
