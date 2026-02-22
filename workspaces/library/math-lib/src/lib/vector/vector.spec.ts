import { calculateVectorMagnitude, calculateVectorDotProduct, addVectors, Vector2D } from './vector';

describe('vector', () => {
    const v1: Vector2D = { x: 3, y: 4 };
    const v2: Vector2D = { x: 1, y: 2 };

    it('should calculate magnitude correctly', () => {
        // 3^2 + 4^2 = 9 + 16 = 25 -> sqrt = 5
        expect(calculateVectorMagnitude(v1)).toBe(5);
    });

    it('should calculate dot product correctly', () => {
        // (3*1) + (4*2) = 3 + 8 = 11
        expect(calculateVectorDotProduct(v1, v2)).toBe(11);
    });

    it('should add vectors correctly', () => {
        const sum = addVectors(v1, v2);
        expect(sum.x).toBe(4);
        expect(sum.y).toBe(6);
    });
});
