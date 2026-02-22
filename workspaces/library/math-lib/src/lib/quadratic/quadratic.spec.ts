import { solveQuadraticEquation } from './quadratic';

describe('quadratic', () => {
    it('should solve a quadratic equation with 2 real roots', () => {
        // x^2 - 5x + 6 = 0 -> roots are 2, 3
        const roots = solveQuadraticEquation(1, -5, 6);
        expect(roots).toEqual([2, 3]);
    });

    it('should solve a quadratic equation with 1 real root', () => {
        // x^2 - 4x + 4 = 0 -> root is 2
        const roots = solveQuadraticEquation(1, -4, 4);
        expect(roots).toEqual([2]);
    });

    it('should return empty for no real roots', () => {
        // x^2 + 1 = 0 -> imaginary roots
        const roots = solveQuadraticEquation(1, 0, 1);
        expect(roots).toEqual([]);
    });

    it('should solve linear equation if a = 0', () => {
        // 2x - 4 = 0 -> root is 2
        const roots = solveQuadraticEquation(0, 2, -4);
        expect(roots).toEqual([2]);
    });
});
