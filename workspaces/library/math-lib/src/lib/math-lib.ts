/**
 * Calculates the area of a circle.
 * 
 * @param radius - The radius of the circle
 * @returns The calculated area
 */
export function calculateCircleArea(radius: number): number {
  return Math.PI * radius * radius;
}

/**
 * Calculates the diameter of a circle.
 * 
 * @param radius - The radius of the circle
 * @returns The calculated diameter
 */
export function calculateCircleDiameter(radius: number): number {
  return 2 * radius;
}
