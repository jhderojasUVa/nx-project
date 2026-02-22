/**
 * Calculates the area of a triangle.
 * 
 * @param base - The base of the triangle
 * @param height - The height of the triangle
 * @returns The calculated area
 */
export function calculateTriangleArea(base: number, height: number): number {
    return (base * height) / 2;
}

/**
 * Calculates the perimeter of a triangle given all three sides.
 * 
 * @param sideA - Side A
 * @param sideB - Side B
 * @param sideC - Side C
 * @returns The calculated perimeter
 */
export function calculateTrianglePerimeter(sideA: number, sideB: number, sideC: number): number {
    return sideA + sideB + sideC;
}
