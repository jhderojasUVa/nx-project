import { calculateRectangleArea, calculateRectanglePerimeter } from './rectangle';

describe('rectangle', () => {
    it('should calculate area correctly', () => {
        expect(calculateRectangleArea(5, 10)).toBe(50);
    });

    it('should calculate perimeter correctly', () => {
        expect(calculateRectanglePerimeter(5, 10)).toBe(30);
    });
});
