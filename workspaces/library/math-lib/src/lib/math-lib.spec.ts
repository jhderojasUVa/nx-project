import { calculateCircleArea, calculateCircleDiameter } from './math-lib';

describe('mathLib', () => {
  it('should calculate area correctly', () => {
    expect(calculateCircleArea(1)).toBeCloseTo(3.14159);
    expect(calculateCircleArea(10)).toBeCloseTo(314.159);
  });

  it('should calculate diameter correctly', () => {
    expect(calculateCircleDiameter(1)).toBe(2);
    expect(calculateCircleDiameter(5)).toBe(10);
  });
});
