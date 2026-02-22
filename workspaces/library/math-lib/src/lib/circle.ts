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

/**
 * Calculates the circumference of a circle.
 * 
 * @param radius - The radius of the circle
 * @returns The calculated circumference
 */
export function calculateCircleCircumference(radius: number): number {
  return 2 * Math.PI * radius;
}

/**
 * Calculates the radius of a circle from its area.
 * 
 * @param area - The area of the circle
 * @returns The calculated radius
 */
export function calculateCircleRadiusFromArea(area: number): number {
  return Math.sqrt(area / Math.PI);
}

/**
 * Calculates the radius of a circle from its circumference.
 * 
 * @param circumference - The circumference of the circle
 * @returns The calculated radius
 */
export function calculateCircleRadiusFromCircumference(circumference: number): number {
  return circumference / (2 * Math.PI);
}
