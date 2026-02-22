/**
 * Solves a quadratic equation of the form ax^2 + bx + c = 0
 * 
 * @param a - Coefficient a
 * @param b - Coefficient b
 * @param c - Coefficient c
 * @returns An array containing the real roots. An empty array if no real roots exist.
 */
export function solveQuadraticEquation(a: number, b: number, c: number): number[] {
    if (a === 0) {
        if (b === 0) return [];
        return [-c / b];
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        return []; // No real roots
    } else if (discriminant === 0) {
        return [-b / (2 * a)]; // One real root
    } else {
        const sqrtD = Math.sqrt(discriminant);
        const root1 = (-b + sqrtD) / (2 * a);
        const root2 = (-b - sqrtD) / (2 * a);
        return [root1, root2].sort((x, y) => x - y); // Two real roots
    }
}
