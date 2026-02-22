import { calculateTriangleArea, calculateTrianglePerimeter } from './triangle';

describe('triangle', () => {
    it('should calculate area correctly', () => {
        expect(calculateTriangleArea(10, 5)).toBe(25);
    });

    it('should calculate perimeter correctly', () => {
        expect(calculateTrianglePerimeter(3, 4, 5)).toBe(12);
    });
});
