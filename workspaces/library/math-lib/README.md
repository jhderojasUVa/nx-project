# @jhderojasUVa/math-lib

A simple utility library to perform mathematical operations, specifically calculating the area and diameter of circles.

This library is built with [Nx](https://nx.dev) and fully typed.

## Installation

```bash
npm install @jhderojasUVa/math-lib
```

## Features

- `calculateCircleArea(radius: number)`: Returns the area of a circle.
- `calculateCircleDiameter(radius: number)`: Returns the diameter of a circle.

## Building & Docs

Run `nx build math-lib` to build the library.

To generate JSDoc documentation, run:
```bash
nx docs math-lib
```
The documentation will be output to `docs/math-lib`.

## Running unit tests

Run `nx test math-lib` to execute the unit tests via [Vitest](https://vitest.dev/).
