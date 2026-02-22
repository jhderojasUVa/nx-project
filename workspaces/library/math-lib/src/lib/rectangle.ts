/**
 * Calculates the area of a rectangle.
 * 
 * @param width - The width of the rectangle
 * @param height - The height of the rectangle
 * @returns The calculated area
 */
export function calculateRectangleArea(width: number, height: number): number {
    return width * height;
}

/**
 * Calculates the perimeter of a rectangle.
 * 
 * @param width - The width of the rectangle
 * @param height - The height of the rectangle
 * @returns The calculated perimeter
 */
export function calculateRectanglePerimeter(width: number, height: number): number {
    return 2 * (width + height);
}
