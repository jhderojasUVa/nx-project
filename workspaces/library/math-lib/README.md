# @jhderojasUVa/math-lib

A comprehensive algebra and geometry utility library specifically designed to compute dimensions of various geometrical figures (e.g., circles, rectangles, triangles, etc.).

This library is built with [Nx](https://nx.dev), fully typed, and cleanly structured with separate modules per geometrical figure.

## Installation

```bash
npm install @jhderojasUVa/math-lib
```

## Usage Example

Because the library splits logic geometrically, you can freely import specific shapes to keep bundle sizes minimal:

```typescript
import { calculateCircleCircumference } from '@jhderojasUVa/math-lib';
import { calculateTriangleArea } from '@jhderojasUVa/math-lib';

const circumference = calculateCircleCircumference(5); // 31.4159...
const area = calculateTriangleArea(10, 5); // 25
```

## Features

### Circle (`circle.ts`)
- `calculateCircleArea(radius: number)`: Returns the area of a circle.
- `calculateCircleDiameter(radius: number)`: Returns the diameter of a circle.
- `calculateCircleCircumference(radius: number)`: Returns the circumference of a circle.
- `calculateCircleRadiusFromArea(area: number)`: Returns the radius calculating backwards from the area.
- `calculateCircleRadiusFromCircumference(circumference: number)`: Returns the radius calculating backwards from the circumference.

### Rectangle (`rectangle.ts`)
- `calculateRectangleArea(width: number, height: number)`: Returns the area of a rectangle.
- `calculateRectanglePerimeter(width: number, height: number)`: Returns the perimeter of a rectangle.

### Triangle (`triangle.ts`)
- `calculateTriangleArea(base: number, height: number)`: Returns the area of a triangle.
- `calculateTrianglePerimeter(sideA: number, sideB: number, sideC: number)`: Returns the perimeter of a given triangle.

## Building & Docs

Run `nx build math-lib` to build the library.

To generate JSDoc documentation, run:
```bash
nx docs math-lib
```
The documentation will be output to `docs/math-lib`.

## Running unit tests

Run `nx test math-lib` to execute the unit tests via [Vitest](https://vitest.dev/).
