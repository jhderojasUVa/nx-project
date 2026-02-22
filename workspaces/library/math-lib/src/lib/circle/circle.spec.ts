import {
  calculateCircleArea,
  calculateCircleDiameter,
  calculateCircleCircumference,
  calculateCircleRadiusFromArea,
  calculateCircleRadiusFromCircumference
} from './circle';

describe('circle', () => {
  it('should calculate area correctly', () => {
    expect(calculateCircleArea(1)).toBeCloseTo(3.14159);
    expect(calculateCircleArea(10)).toBeCloseTo(314.159);
  });

  it('should calculate diameter correctly', () => {
    expect(calculateCircleDiameter(1)).toBe(2);
    expect(calculateCircleDiameter(5)).toBe(10);
  });

  it('should calculate circumference correctly', () => {
    expect(calculateCircleCircumference(1)).toBeCloseTo(6.28318);
    expect(calculateCircleCircumference(5)).toBeCloseTo(31.4159);
  });

  it('should calculate radius from area correctly', () => {
    expect(calculateCircleRadiusFromArea(3.14159)).toBeCloseTo(1);
    expect(calculateCircleRadiusFromArea(314.159)).toBeCloseTo(10);
  });

  it('should calculate radius from circumference correctly', () => {
    expect(calculateCircleRadiusFromCircumference(6.28318)).toBeCloseTo(1);
    expect(calculateCircleRadiusFromCircumference(31.4159)).toBeCloseTo(5);
  });
});
