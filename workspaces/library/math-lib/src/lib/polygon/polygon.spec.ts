import { calculatePolygonArea, calculatePolygonPerimeter } from './polygon';

describe('polygon', () => {
    it('should calculate perimeter correctly', () => {
        // Pentagon (5 sides) with length 10
        expect(calculatePolygonPerimeter(5, 10)).toBe(50);
    });

    it('should calculate area correctly for a regular pentagon', () => {
        // Area of pentagon = (5/4) * s^2 * cot(pi/5)
        // For s = 10 -> ~172.047
        expect(calculatePolygonArea(5, 10)).toBeCloseTo(172.047);
    });

    it('should calculate area correctly for a hexagon', () => {
        // Hexagon (6 sides) with length 10 -> ~259.807
        expect(calculatePolygonArea(6, 10)).toBeCloseTo(259.807);
    });

    it('should throw if sides are less than 3', () => {
        expect(() => calculatePolygonPerimeter(2, 10)).toThrow();
        expect(() => calculatePolygonArea(2, 10)).toThrow();
    });
});
