/**
 * Calculates the perimeter of a regular N-sided polygon.
 * 
 * @param sides - The number of sides
 * @param sideLength - The length of each side
 * @returns The calculated perimeter
 */
export function calculatePolygonPerimeter(sides: number, sideLength: number): number {
    if (sides < 3) throw new Error("A polygon must have at least 3 sides");
    return sides * sideLength;
}

/**
 * Calculates the area of a regular N-sided polygon.
 * 
 * @param sides - The number of sides
 * @param sideLength - The length of each side
 * @returns The calculated area
 */
export function calculatePolygonArea(sides: number, sideLength: number): number {
    if (sides < 3) throw new Error("A polygon must have at least 3 sides");
    return (sides * (sideLength * sideLength)) / (4 * Math.tan(Math.PI / sides));
}
